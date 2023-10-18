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

const StyledFieldset = styled.fieldset`
  border-radius: 10px;
  border: 1px solid black;
  > input {
    padding: 1rem;
  }
`;

export default function FormAddTask({ formName, onSubmit, value }) {
  const [checkedTags, setCheckedTags] = useState(new Array(4).fill(false));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
    onSubmit(project);
  }

  function handleClick(position) {
    const updatedCheckedState = checkedTags.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTags(updatedCheckedState);
  }

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
        ></StyledTextArea>

        <StyledFieldset>
          <legend>Tags:</legend>

          <StyledLabel htmlFor="urgent">Urgent</StyledLabel>
          <input
            type="checkbox"
            id="urgent"
            name="urgent"
            onClick={() => handleClick("urgent")}
            checked={checkedTags["urgent"]}
          />

          <StyledLabel htmlFor="important">Important</StyledLabel>
          <input
            type="checkbox"
            id="important"
            name="important"
            onClick={() => handleClick("important")}
            checked={checkedTags["important"]}
          />

          <StyledLabel htmlFor="optional">Optional</StyledLabel>
          <input
            type="checkbox"
            id="optional"
            name="optional"
            onClick={() => handleClick("optional")}
            checked={checkedTags["optional"]}
          />

          <StyledLabel htmlFor="new">New</StyledLabel>
          <input
            type="checkbox"
            id="new"
            name="new"
            onClick={() => handleClick("new")}
            checked={checkedTags["new"]}
          />
        </StyledFieldset>

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {value && <CancelLink url={`/projects/${value._id}`} />}
          {!value && <CancelLink url={"/"} />}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
