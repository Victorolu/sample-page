import { ProfileAvatar } from "./ProfileAvatar";
import "./ProfileCard.scss";

export const ProfileCard = ({ name, hashtag, isVerified, imageStyle }) => {
  return (
    <div className="profile-card">
      <ProfileAvatar imageStyle={imageStyle} />
      <div className="profile-card-details ">
        <p className="profile-card-name">
          {name}
          <span>{isVerified && <i className="bi-check-circle-fill"></i>}</span>
        </p>
        <p className="profile-card-hashtag">{hashtag}</p>
      </div>
    </div>
  );
};
