import styled from "styled-components";
import { CancelLink, SubmitButton } from "./Buttons";
import Heading from "./Heading";
import { Fragment, useState } from "react";
import {
  StyledButtonContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./Form";

const StyledFieldset = styled.fieldset`
  margin-top: 1rem;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.2rem;
  > input {
    margin: 1rem;
  }
`;

export default function FormTask({ formName, onSubmit, value }) {
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

  const tagTypes = ["urgent", "important", "optional", "new"];

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

        <StyledFieldset>
          <legend>Tags:</legend>

          {tagTypes.map((tag) => (
            <Fragment key={tag}>
              <StyledLabel htmlFor={tag}>{tag}</StyledLabel>
              <input
                type="checkbox"
                id={tag}
                name={tag}
                onClick={() => handleClick(tag)}
                checked={checkedTags[tag]}
              />
            </Fragment>
          ))}
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
