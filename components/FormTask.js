import styled from "styled-components";
import { CancelLink, ModalCancel, SubmitButton } from "./Buttons";
import Heading from "./Heading";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import {
  StyledButtonContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./Form";

const StyledRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledRadioButtons = styled.input`
  margin-right: 0.5rem;
`;

const StyledLegend = styled.legend`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  color: var(--color-brand-900);
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export default function FormTask({ formName, onSubmit, id, value, onClose }) {
  const [tag, setTag] = useLocalStorageState("tag", "Backlog");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);

    if (onClose) {
      onClose();
    }

    onSubmit(project);
  }

  function handleChange(event) {
    setTag(event.target.value);
  }

  const tagTypes = [
    "Backlog",
    "Sprint Backlog",
    "In Progress",
    "Code Review",
    "Quality Assurance",
    "Done",
  ];

  return (
    <>
      <Heading>{formName}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Task name:</StyledLabel>

        <StyledInput
          type="text"
          name="title"
          id="title"
          required
          defaultValue={value?.title}
        ></StyledInput>

        <StyledLabel htmlFor="description">Description:</StyledLabel>

        <StyledTextArea
          type="text"
          name="description"
          id="description"
          rows={3}
          required
          defaultValue={value?.description}
        />
        <StyledLegend>Select a Tag:</StyledLegend>

        <StyledRadioContainer>
          {tagTypes.map((tagsItem) => (
            <div key={tagsItem}>
              <StyledRadioButtons
                type="radio"
                id={tagsItem}
                name="tag"
                value={tagsItem}
                onChange={handleChange}
                checked={tag === tagsItem}
                required
              />

              <StyledLabel htmlFor={tagsItem}>{tagsItem}</StyledLabel>
            </div>
          ))}
        </StyledRadioContainer>

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {value && !onClose && (
            <CancelLink url={`/projects/${id}/tasks/${value._id}`} />
          )}
          {!value && !onClose && <CancelLink url={`/projects/${id}`} />}
          {onClose && <ModalCancel onClick={onClose}>Close</ModalCancel>}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
