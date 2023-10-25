import { BackLink, DeleteButton, EditLink } from "@/components/Buttons";
import { StyledButtonContainer } from "@/styles/StyledButtonContainer";
import { StyledToolBar } from "@/styles/StyledToolbar";

export default function ButtonBar({ handleDelete, id }) {
  return (
    <div>
      <StyledButtonContainer>
        <BackLink href={"/ProjectsOverview"} />
        <StyledToolBar>
          <EditLink url={`/projects/${id}/edit`} />
          <DeleteButton handleClick={handleDelete} />
        </StyledToolBar>
      </StyledButtonContainer>
    </div>
  );
}
