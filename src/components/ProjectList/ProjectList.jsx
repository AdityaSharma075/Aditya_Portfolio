import "./ProjectList.scss";

const ProjectList = ({ title, active, setselected, id }) => {
  return (
    <li
      className={active ? "projectlist active" : "projectlist "}
      onClick={() => setselected(id)}
    >
      {title}
    </li>
  );
};

export default ProjectList;
