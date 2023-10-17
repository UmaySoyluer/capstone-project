import styled from "styled-components";
import { CancelLink, SubmitButton } from "./Buttons";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-inline: 1.5rem;
  margin-top: -0.5rem;
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;

const StyledInput = styled.input`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  border-radius: 10px;
  border: 1px solid black;
`;

const StyledTextArea = styled.textarea`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  resize: none;
  border-radius: 10px;
  border: 1px solid black;
`;

const StyledButtonContainer = styled.div`
  margin-top: 1.7rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export default function FormAddTask({ formName, onSubmit, value }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
    onSubmit(project);
  }

  return (
    <>
      <h3>{formName}</h3>
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

        <StyledLabel htmlFor="startDate">Start Date:</StyledLabel>
        <StyledInput
          type="date"
          name="startDate"
          id="startDate"
          required
          defaultValue={value?.startDate}
        ></StyledInput>

        <fieldset>
          <legend>Tags:</legend>

          <StyledLabel for="urgent">Urgent</StyledLabel>
          <StyledInput type="checkbox" id="urgent" name="urgent" />

          <StyledLabel for="important">Important</StyledLabel>
          <StyledInput type="checkbox" id="important" name="important" />

          <StyledLabel for="optional">Optional</StyledLabel>
          <StyledInput type="checkbox" id="optional" name="optional" />

          <StyledLabel for="new">new</StyledLabel>
          <StyledInput type="checkbox" id="new" name="new" />
        </fieldset>

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {value && <CancelLink url={`/projects/${value._id}`} />}
          {!value && <CancelLink url={"/"} />}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
