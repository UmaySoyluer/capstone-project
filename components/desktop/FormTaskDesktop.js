import { ModalCancel, SubmitButton } from "../Buttons";
import Heading from "../Heading";
import {
  StyledButtonContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "../FormProject";

export default function FormTaskDesktop({
  formName,
  onSubmit,
  task,
  onClose,
  onEdit,
  editTask,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = Object.fromEntries(formData);

    if (onClose) {
      onClose();
    }

    if (onEdit) {
      onEdit();
      editTask(task);
      return;
    }

    onSubmit(task);
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
          defaultValue={task?.title}
        ></StyledInput>

        <StyledLabel htmlFor="description">Description:</StyledLabel>

        <StyledTextArea
          type="text"
          name="description"
          id="description"
          rows={3}
          required
          defaultValue={task?.description}
        />

        <StyledButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {!task && <ModalCancel onClick={onClose}>Cancel</ModalCancel>}
          {task && <ModalCancel onClick={onEdit}>Cancel</ModalCancel>}
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}
