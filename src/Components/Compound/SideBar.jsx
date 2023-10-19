import { SideBarIcon } from "../Core/SideBarIcon";
import "./SideBar.scss";

const icons = [
  "bi-tv",
  "bi-person",
  "bi-people",
  "bi-award",
  "bi-star",
  "bi-stack",
  "bi-gem",
  "bi-chat-square-dots",
  "bi-layout-text-window-reverse",
  "bi-basket3",
  "bi-wallet2",
];

export const SideBar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-content">
          {icons.map((i) => (
            <SideBarIcon key={i} icon={i} />
          ))}
        </div>
      </aside>
    </>
  );
};
