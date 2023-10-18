import styled from "styled-components";
import { CancelLink, SubmitButton } from "./Buttons";
import Heading from "./Heading";
import { useState } from "react";
import {
  StyledButtonContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./Form";

const StyledRadioContainer = styled.div``;

const StyledLegend = styled.legend`
  margin-top: 1rem;
`;

export default function FormTask({ formName, onSubmit, id, value }) {
  const [tag, setTag] = useState("Backlog");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
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
              <input
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
          {value && <CancelLink url={`/projects/${id}/tasks/${value._id}`} />}
          {!value && <CancelLink url={"/"} />}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
