import { BaseAvatar } from "./BaseAvatar";
import "./BadgeQuestCard.scss";

export const BadgeQuestCard = ({ name, description, imageStyle }) => {
  return (
    <div className="badgequest-card-container">
      <div className="badgequest-card">
        <BaseAvatar imageStyle={imageStyle} />
        <div className="badgequest-card-details ">
          <p className="badgequest-card-name">{name}</p>
          <p className="badgequest-card-description">{description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
