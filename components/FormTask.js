import styled from "styled-components";
import { CancelLink, SubmitButton } from "./Buttons";
import Heading from "./Heading";
import { useEffect, useState } from "react";
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

const StyledPriorityContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledPriorityTag = styled.div`
  color: #ffff;
  font-size: 0.9rem;
  padding: 1px 8px;
  text-decoration: none;
  text-align: center;
  margin: 0;
  border-radius: 14px;
  width: 6rem;
`;

const StyledPriorityButtons = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

const StyledPriorityLabel = styled.label`
  display: inline-block;
  width: 4rem;
  padding: 0.4rem;
  font-size: 0.8rem;
  border-radius: 0.9rem;

  background: ${(props) => {
    if (props.htmlFor === "High") {
      return `
 #F87168;`;
    } else if (props.htmlFor === "Neutral") {
      return `
  #4ACE97;`;
    } else {
      return `#569DFF;`;
    }
  }};

  &:hover {
    background: var(--color-gray-200);
  }
`;

export default function FormTask({ formName, onSubmit, id, value }) {
  const [tag, setTag] = useLocalStorageState("tag", "Backlog");
  const [priority, setPriority] = useLocalStorageState("priority", "Neutral");

  useEffect(() => {
    if (value) setTag(value.tag);
    if (!value) setTag(tag);
  }, [value, setTag, tag]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
    onSubmit(project);
  }

  function handleChange(event) {
    setTag(event.target.value);
  }

  function handleChangePriority(event) {
    setPriority(event.target.value);
  }

  const tagTypes = [
    "Backlog",
    "Sprint Backlog",
    "In Progress",
    "Code Review",
    "Quality Assurance",
    "Done",
  ];

  const priorityTypes = ["High", "Neutral", "Low"];

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

        <StyledLegend>Priority :</StyledLegend>

        <StyledPriorityContainer>
          {priorityTypes.map((priorityType) => (
            <StyledPriorityTag key={priorityType}>
              <StyledPriorityButtons
                type="radio"
                id={priorityType}
                name="priority"
                value={priorityType}
                onChange={handleChangePriority}
                checked={priority === priorityType}
                required
              />

              <StyledPriorityLabel htmlFor={priorityType}>
                {priorityType}
              </StyledPriorityLabel>
            </StyledPriorityTag>
          ))}
        </StyledPriorityContainer>

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {value && <CancelLink url={`/projects/${id}/tasks/${value._id}`} />}
          {!value && <CancelLink url={`/projects/${id}`} />}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
export { StyledPriorityTag, StyledPriorityButtons, StyledPriorityLabel };
