import "./SideBarIcon.scss";
export const SideBarIcon = ({ icon }) => {
  return (
    <button>
      <i className={`${icon}`}></i>
    </button>
  );
};
