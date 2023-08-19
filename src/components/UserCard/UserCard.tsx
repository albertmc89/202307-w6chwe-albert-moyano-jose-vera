import React from "react";
import { User } from "../../types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: { name, age, location, picture, sexo, isFriend },
}: UserCardProps): React.ReactElement => {
  return (
    <article className="user">
      <div className="user__container">
        <img className="user__picture" src={`${picture}`} alt={name} />
      </div>
      <div className="user__data-container">
        <h2 className="user__name">{name}</h2>
        <ul className="user__data-list">
          <li className="user__data">
            <span className="user__data-label">Age: </span>
            {age}
          </li>
          <li className="user__data">
            <span className="user__data-label">Location: </span> {location}
          </li>
          <li className="user__data">
            <span className="user__data-label">Sexo: </span> {sexo}
          </li>
        </ul>
        <div className="button-container">
          <button className="button">
            {isFriend === true ? "Friend" : "Enemy"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
