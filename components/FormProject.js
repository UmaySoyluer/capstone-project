import styled from "styled-components";

import { CancelLink, ModalCancel, SubmitButton } from "./Buttons";
import Heading from "./Heading";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -0.5rem;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  color: var(--color-brand-900);
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const StyledInput = styled.input`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  border-radius: 10px;
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);

  &:focus {
    border: 1px solid var(--color-brand-900);
  }
`;

export const StyledTextArea = styled.textarea`
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  resize: none;
  border-radius: 10px;
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);

  &:focus {
    border: 1px solid var(--color-brand-900);
  }
`;

export const StyledSelect = styled.select`
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  border-radius: 10px;
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-300);

  &:focus {
    border: 1px solid var(--color-brand-900);
  }
`;

const StyledOption = styled.option`
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  background-color: var(--color-gray-100);
`;

export const StyledButtonContainer = styled.div`
  margin-top: 1.7rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export default function FormProject({ formName, onSubmit, value, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);

    if (onClose) {
      onClose();
    }

    onSubmit(project);
  }

  return (
    <>
      <Heading>{formName}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Project title:</StyledLabel>

        <StyledInput
          type="text"
          name="title"
          id="title"
          required
          defaultValue={value?.title}
        />

        <StyledLabel htmlFor="endDate">Due Date:</StyledLabel>
        <StyledInput
          type="date"
          name="endDate"
          id="endDate"
          required
          defaultValue={value?.endDate}
        />

        <StyledLabel htmlFor="department">Department:</StyledLabel>
        <StyledSelect
          name="department"
          id="department"
          required
          defaultValue={value?.department}
        >
          <StyledOption value="development">Development</StyledOption>
          <StyledOption value="design">Design</StyledOption>
          <StyledOption value="marketing">Marketing</StyledOption>
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
          {value && !onClose && <CancelLink url={`/projects/${value._id}`} />}
          {!value && <CancelLink url={"/ProjectsOverview"} />}
          {onClose && <ModalCancel onClick={onClose}>Close</ModalCancel>}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
