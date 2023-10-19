import "./NewsPostCard.scss";
import { ProfileAvatar } from "./ProfileAvatar";
import { Fragment } from "react";

export const NewsPostCard = ({ person, post }) => {
  return (
    <article className="news-post-container">
      <div className="post-header">
        <ProfileAvatar imageStyle={person.imageStyle} />
        <div className="post-details">
          <p className="post-description">
            <b>{person.name} &nbsp;</b>
            {person.isVerified && (
              <>
                <i className="bi-check-circle-fill"></i>
                <span className="pro-member-tag">Pro Member</span>
              </>
            )}
            <span dangerouslySetInnerHTML={{ __html: post.description }}></span>
          </p>
          <p className="post-age">{post.age}</p>
        </div>
      </div>
      <div className="post-content">
        {post.content.text !== null && (
          <p className="post-text">{post.content.text}</p>
        )}
        {post.image !== null && (
          <img
            className="post-image"
            src={post.content.image.source}
            alt={post.content.image.alt}
          />
        )}
      </div>
      <hr />
      <div className="post-footer">
        <div className="emojis">
          {post.numberOfEmojis > 0 && (
            <span role="img" aria-label="crying">
              🐑 &nbsp; {post.numberOfEmojis}
            </span>
          )}
        </div>
        <div className="comments-and-shares">
          <span className="post-related-comments">
            {post.numberOfComments} Comments
          </span>
          <span className="post-shares">{post.numberOfShares} Shares</span>
        </div>
      </div>
    </article>
  );
};
