import { useAppSelector } from "../../store";
import UserCard from "../UserCard/UserCard";
import "./UsersList.css";

const UsersList = (): React.ReactElement => {
  const users = useAppSelector((state) => state.usersState.users);

  return (
    <>
      <div className="users-title">
        <h2>Users list</h2>
      </div>
      <ul className="users-list">
        <div className="users-list__content">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default UsersList;
