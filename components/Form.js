import styled from "styled-components";
import { useRouter } from "next/router";

import { CancelLink, SubmitButton } from "./Buttons";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-inline: 1.5rem;
  margin-top: -0.5rem;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;

export const StyledInput = styled.input`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  border-radius: 10px;
  border: 1px solid black;
`;

export const StyledTextArea = styled.textarea`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  resize: none;
  border-radius: 10px;
  border: 1px solid black;
`;

export const StyledSelect = styled.select`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  border: 1px solid black;
  border-radius: 10px;
  background: transparent;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 1.7rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export default function Form({ formName, onSubmit, value }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
    onSubmit(project);
  }

  const router = useRouter();

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Project name:</StyledLabel>

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
        <StyledLabel htmlFor="endDate">Due Date:</StyledLabel>
        <StyledInput
          type="date"
          name="endDate"
          id="endDate"
          required
          defaultValue={value?.endDate}
        ></StyledInput>
        <StyledLabel htmlFor="department">Select Department:</StyledLabel>
        <StyledSelect
          name="department"
          id="department"
          required
          defaultValue={value?.department}
        >
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </StyledSelect>

        <StyledLabel htmlFor="teamLead">Project Lead:</StyledLabel>
        <StyledInput
          type="text"
          name="teamLead"
          id="teamLead"
          required
          defaultValue={value?.teamLead}
        />

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {value && <CancelLink url={`/projects/${value._id}`} />}
          {!value && <CancelLink url={"/"} />}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
