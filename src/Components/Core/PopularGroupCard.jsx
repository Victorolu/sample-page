import { BaseAvatar } from "./BaseAvatar";
import "./PopularGroupCard.scss";

export const PopularGroupCard = ({
  name,
  numberOfMembers,
  isPrivate,
  imageStyle,
}) => {
  return (
    <div className="group-card">
      <BaseAvatar imageStyle={imageStyle} />
      <div className="group-card-details ">
        <p className="group-card-name">{name}</p>
        <p className="group-card-hashtag">{numberOfMembers} member</p>
      </div>
      <div className="group-card-icon">
        <i
          className={`${isPrivate ? "bi-lock" : "bi-globe-europe-africa"}`}
        ></i>
      </div>
    </div>
  );
};
