import React from "react";
import { useDispatch } from "react-redux";
import { toggleUserActionCreator } from "../../store/Users/UsersSlice";
import { User } from "../../types";
import Button from "../Button/Button";
import "./UserCard.css";

interface UserCardProps {
  user: User;
}

const UserCard = ({
  user: { id, name, age, location, picture, sex, isFriend },
}: UserCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const toggleUser = (id: number) => {
    dispatch(toggleUserActionCreator(id));
  };
  return (
    <article className="user">
      <div className="user__container">
        <img
          className="user__picture"
          src={`${picture}`}
          alt={`Close-up of ${name}`}
        />
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
            <span className="user__data-label">Sex: </span> {sex}
          </li>
        </ul>
        <div className="button-container">
          <Button
            className={isFriend ? "friend" : "enemy"}
            actionOnClick={() => toggleUser(id)}
            text={isFriend ? "friend" : "enemy"}
          />
        </div>
      </div>
    </article>
  );
};

export default UserCard;
