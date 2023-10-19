import "./SideContentContainer.scss";

export const SideContentContainer = ({ children, title }) => {
  return (
    <aside className="side-content-container">
      <h2>{title}</h2>
      <div className="side-content">{children}</div>
    </aside>
  );
};
