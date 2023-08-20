import { useAppSelector } from "../../store";
import "./Counter.css";

const Counter = (): React.ReactElement => {
  const friendsCount = useAppSelector(
    (state) =>
      state.usersState.users.filter((user) => user.isFriend === true).length,
  );

  const enemiesCount = useAppSelector(
    (state) =>
      state.usersState.users.filter((user) => user.isFriend === false).length,
  );

  return (
    <>
      <div className="count-container">
        <div className="count-container__count">
          <p className="count-friends">{friendsCount} users are friends</p>
          <p className="count-enemies">{enemiesCount} users are enemies</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
