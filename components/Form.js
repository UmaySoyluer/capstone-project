import Link from "next/link";
import { useRouter } from "next/router";
import StyledButton from "./StyledButton";

export default function Form({ formName, onSubmit }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = Object.fromEntries(formData);
    console.log(project);
    onSubmit(project);
  }

  const router = useRouter();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          {" "}
          Name of project
          <input type="text" name="title" id="title" required></input>
        </label>
        <label htmlFor="description">
          {" "}
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </label>
        <label htmlFor="startDate">
          {" "}
          Start Date
          <input type="date" name="startDate" id="startDate" required></input>
        </label>
        <label htmlFor="endDate">
          {" "}
          End Date
          <input type="date" name="endDate" id="endDate" required></input>
        </label>
        <label htmlFor="department">
          {" "}
          Select Department
          <select name="department" id="department" required>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </label>
        <label htmlFor="teamLead">
          {" "}
          Project Lead
          <textarea
            type="text"
            name="teamLead"
            id="teamLead"
            required
          ></textarea>
        </label>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton onClick={router.back}>Cancel</StyledButton>
      </form>
    </>
  );
}
