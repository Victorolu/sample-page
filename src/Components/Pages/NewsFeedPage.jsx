import { PageHeader } from "../Compound/PageHeader";
import { SideContentContainer } from "../Compound/SideContentContainer";
import { ProfileCard } from "../Core/ProfileCard";
import { PopularGroupCard } from "../Core/PopularGroupCard";
import { BadgeQuestCard } from "../Core/BadgeQuestCard";
import { NewsPostCard } from "../Core/NewsPostCard";
import "./NewsFeedPage.scss";
import { UpdateFilter } from "../Core/Filter";
import { useState } from "react";

const title = "Newsfeed";
const description = "Check what your friends have been up to";

const newestMembers = [
  {
    name: "Sandra Page",
    isVerified: true,
    hashtag: "@sanstrange",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-one.jpeg")})`,
    },
  },
  {
    name: "Rosie Sakura",
    isVerified: false,
    hashtag: "@sakurara",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-two.jpeg")})`,
    },
  },
  {
    name: "Damian Greyson",
    isVerified: false,
    hashtag: "@dgreyson",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-three.png")})`,
    },
  },
  {
    name: "The Green Goo",
    isVerified: false,
    hashtag: "@greengoo",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-four.jpeg")})`,
    },
  },
  {
    name: "Bearded Wonder",
    isVerified: false,
    hashtag: "@brdwonder",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-six.png")})`,
    },
  },
];

const popularGroups = [
  {
    name: "Street Artists",
    numberOfMembers: 4,
    isPrivate: false,
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-one.jpeg")})`,
    },
  },
  {
    name: "Cosplayers of the World",
    numberOfMembers: 3,
    isPrivate: false,
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-two.jpeg")})`,
    },
  },
  {
    name: "Stream Designerss",
    numberOfMembers: 3,
    isPrivate: false,
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-three.png")})`,
    },
  },
  {
    name: "Gaming Watchtower",
    numberOfMembers: 3,
    isPrivate: true,
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-four.jpeg")})`,
    },
  },
  {
    name: "Living in Japan",
    numberOfMembers: 2,
    isPrivate: false,
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-five.png")})`,
    },
  },
];

const quests = [
  {
    name: "Posting Machine",
    description: "Posted more than 20 profile activities in one day",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-five.png")})`,
    },
  },
  {
    name: "Posting Machine",
    description: "Posted more than 20 profile activities in one day",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-one.jpeg")})`,
    },
  },
];

const badges = [
  {
    name: "Globe Trotter",
    description: "Has joined at least 10 different groups",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-five.png")})`,
    },
  },
  {
    name: "Globe Trotter",
    description: "Has joined at least 10 different groups",
    imageStyle: {
      backgroundImage: `url(${require("../../images/avatars/avatar-four.jpeg")})`,
    },
  },
];

const updates = [
  {
    person: {
      name: "Marina Valentine",
      isVerified: true,
      imageStyle: {
        backgroundImage: `url(${require("../../images/avatars/avatar-one.jpeg")})`,
      },
    },
    post: {
      description:
        "<span>replied to the topic <b>Welcome to the Cosplayers Group Forum! </b>in the forum <b>Cosplayers Group Forum</b></span>",
      age: "1 year ago",
      content: {
        text: "Hello, Everyone!",
        image: {
          source: "",
          alt: "",
        },
      },
      numberOfComments: 2,
      numberOfShares: 2,
      type: 2,
      numberOfEmojis: 1,
    },
  },
  {
    person: {
      name: "Marina Valentine",
      isVerified: false,
      imageStyle: {
        backgroundImage: `url(${require("../../images/avatars/avatar-two.jpeg")})`,
      },
    },
    post: {
      description: "posted an update",
      age: "1 year ago",
      content: {
        text: "https://drive.google.com/file/d/1xQhvv3Qjqpk8fiycD5u0YdjPzCQnWJdJ/view",
        image: {
          source:
            "https://drive.google.com/uc?id=1xQhvv3Qjqpk8fiycD5u0YdjPzCQnWJdJ",
          alt: "sample page",
        },
      },
      numberOfComments: 2,
      numberOfShares: 2,
      type: 1,
      numberOfEmojis: 0,
    },
  },
];

export const NewsFeedPage = () => {
  const [filteredUpdates, setFilteredUpdates] = useState([...updates]);

  function filterUpdates(filterKey) {
    let numericKey = Number(filterKey);
    if (numericKey === 0) {
      setFilteredUpdates(updates);
    } else {
      setFilteredUpdates(updates.filter((x) => x.post.type === numericKey));
    }
  }

  const headerStyle = {
    backgroundImage: `linear-gradient(to right, #5d5ef5, rgba(105, 243, 251, 0.9)), url(${require("../../images/profile-avatars.jpeg")})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "100%, contain",
  };

  const imageSource = require("../../images/newsfeed-page-image.jpg");

  return (
    <div className="news-feed-page">
      <PageHeader
        title={title}
        description={description}
        headerStyle={headerStyle}
        imageSource={imageSource}
      />
      <section className="news-feed-page-content">
        <div className="side-contents">
          <SideContentContainer title="Newest Members">
            {newestMembers.map((x, index) => (
              <ProfileCard
                key={index}
                name={x.name}
                hashtag={x.hashtag}
                isVerified={x.isVerified}
                imageStyle={x.imageStyle}
              />
            ))}
          </SideContentContainer>
          <SideContentContainer title="Quests">
            {quests.map((x, index) => (
              <BadgeQuestCard
                key={index}
                name={x.name}
                description={x.description}
                imageStyle={x.imageStyle}
              />
            ))}
          </SideContentContainer>
        </div>
        <div className="main-content">
          <UpdateFilter onFilterChange={filterUpdates}></UpdateFilter>
          {filteredUpdates.map((x, index) => (
            <NewsPostCard key={index} person={x.person} post={x.post} />
          ))}
        </div>
        <div className="side-contents">
          <SideContentContainer title="Popular Groups">
            {popularGroups.map((x, index) => (
              <PopularGroupCard
                key={index}
                name={x.name}
                numberOfMembers={x.numberOfMembers}
                isPrivate={x.isPrivate}
                imageStyle={x.imageStyle}
              />
            ))}
          </SideContentContainer>
          <SideContentContainer title="Badges">
            {badges.map((x, index) => (
              <BadgeQuestCard
                key={index}
                name={x.name}
                description={x.description}
                imageStyle={x.imageStyle}
              />
            ))}
          </SideContentContainer>
        </div>
      </section>
    </div>
  );
};
