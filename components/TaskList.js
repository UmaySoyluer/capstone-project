import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import Task from "./Task";
import TaskFormModal from "./modals/TaskFormModal";
import { HiPlus } from "react-icons/hi2";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import { DeleteButton, SubmitButton } from "./Buttons";
import { StyledInput } from "./FormProject";

resetServerContext();

const StyledContainer = styled.div`
  padding-block: 1rem;
  padding-inline: 1.5rem;
  width: 100%;
  flex-grow: 1;
  display: flex;
  overflow: auto;
  gap: 1rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding-block: 0.5rem;
  background-color: var(--color-gray-100);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const StyledTaskList = styled.ul`
  min-width: 300px;
  margin-top: 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: scroll;
`;

const StyledListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-brand-900);
  padding: 0 2rem;
  padding-top: 0.5rem;
`;

const StyledCreate = styled.button`
  padding: 0.3rem 3rem;
  margin-top: 1rem;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: 0.3s;
  width: 80%;

  ${({ variant }) =>
    variant === "column" &&
    css`
      justify-content: flex-start;
      padding: 0.3rem 1rem;
      width: auto;
    `}

  &:hover,
  &:focus {
    background-color: var(--color-gray-200);
    outline: none;
  }
`;

export default function TaskList({ columns, id }) {
  const [showModal, setShowModal] = useState(false);
  const [tag, setTag] = useState("");

  function openModal(listId) {
    setShowModal(true);
    setTag(listId);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    setDragColumns(columns);
  }, [columns]);

  const [dragColumns, setDragColumns] = useState(columns);

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    setDragColumns((prevColumns) => {
      const newColumns = [...prevColumns];

      // Find the indices of the source and destination lists in the columns array
      const sourceIndex = newColumns.findIndex(
        (column) => column._id === source.droppableId
      );
      const destIndex = newColumns.findIndex(
        (column) => column._id === destination.droppableId
      );

      // Get a reference to the source and destination lists
      const sourceList = newColumns[sourceIndex];
      const destList = newColumns[destIndex];

      // Remove the task from the source list and add it to the destination list
      const [removedTask] = sourceList.tasks.splice(source.index, 1);
      destList.tasks.splice(destination.index, 0, removedTask);

      // Update the source and destination lists in the columns array
      newColumns[sourceIndex] = sourceList;
      newColumns[destIndex] = destList;

      async function updateColumns() {
        const response = await fetch(`/api/projects/${id}/columns`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            columns: newColumns,
          }),
        });

        if (response.ok) {
          mutate(`/api/projects/${id}`);
        }
      }

      updateColumns();

      return newColumns;
    });
  };

  async function createColumn(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const column = Object.fromEntries(formData);

    const response = await fetch(`/api/projects/${id}/columns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(column),
    });

    if (response.ok) {
      mutate(`/api/projects/${id}`);
      toast.success("New column created!");
      event.target.reset();
    }
  }

  function handleDeleteColumn() {
    Swal.fire({
      title: "Delete Column",
      text: "Do you really want to delete this column? ",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
      closeOnConfirm: true,
      width: 400,
      background: "var(--color-gray-50)",
      color: "var(--color-gray-900)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedColumns = columns.filter((column) => {
          column.id !== column._id;
        });
        const response = await fetch(`/api/projects/${id}/columns`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            columns: updatedColumns,
          }),
        });

        if (response.ok) {
          mutate(`/api/projects/${id}`);
        }

        toast.success("Project deleted!");
      }
    });
  }

  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <StyledContainer>
        {dragColumns.map((column) => (
          <Droppable droppableId={column._id} key={column._id} type="list">
            {(provided) => (
              <StyledWrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <StyledListTitle>
                  {column.name}
                  <DeleteButton handleClick={handleDeleteColumn} />
                </StyledListTitle>
                <StyledTaskList>
                  {column.tasks?.map((task, index) => (
                    <Draggable
                      draggableId={task._id}
                      index={index}
                      key={task._id}
                    >
                      {(provided) => (
                        <Task
                          task={task}
                          innerRef={provided.innerRef}
                          provided={provided}
                        />
                      )}
                    </Draggable>
                  ))}

                  {!column.tasks?.length && <p>No tasks found...</p>}
                </StyledTaskList>

                <StyledCreate
                  type="button"
                  onClick={() => openModal(column._id)}
                >
                  <HiPlus size={19} />
                  <p>Add task</p>
                </StyledCreate>

                {provided.placeholder}
              </StyledWrapper>
            )}
          </Droppable>
        ))}
        <form onSubmit={createColumn}>
          <StyledInput name="name" placeholder="New column" type="text" />
          <StyledCreate variant="column" type="submit">
            <HiPlus size={19} />
            Create
          </StyledCreate>
        </form>
      </StyledContainer>
      {showModal && <TaskFormModal onClose={closeModal} listId={tag} />}
    </DragDropContext>
  );
}
