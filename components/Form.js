import Link from "next/link";
import { useRouter } from "next/router";
import StyledButton from "./StyledButton";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          {" "}
          Name of project
          <input
            type="text"
            name="title"
            id="title"
            required
            defaultValue={value?.title}
          ></input>
        </label>
        <label htmlFor="description">
          {" "}
          Description
          <textarea
            type="text"
            name="description"
            id="description"
            required
            defaultValue={value?.description}
          ></textarea>
        </label>
        <label htmlFor="startDate">
          {" "}
          Start Date
          <input
            type="date"
            name="startDate"
            id="startDate"
            required
            defaultValue={value?.startDate}
          ></input>
        </label>
        <label htmlFor="endDate">
          {" "}
          End Date
          <input
            type="date"
            name="endDate"
            id="endDate"
            required
            defaultValue={value?.endDate}
          ></input>
        </label>
        <label htmlFor="department">
          {" "}
          Select Department
          <select
            name="department"
            id="department"
            required
            defaultValue={value?.department}
          >
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
            defaultValue={value?.teamLead}
          ></textarea>
        </label>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton onClick={router.back}>Cancel</StyledButton>
      </form>
    </>
  );
}
