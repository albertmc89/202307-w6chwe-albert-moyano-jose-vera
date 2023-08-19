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
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
