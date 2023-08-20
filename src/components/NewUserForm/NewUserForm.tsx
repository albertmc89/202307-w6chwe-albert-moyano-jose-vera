import { useState } from "react";
import { useDispatch } from "react-redux";
import usePeopleApi from "../../hooks/usePeopleApi";
import { addUserActionCreator } from "../../store/Users/UsersSlice";
import { User } from "../../types";
import "./NewUserForm.css";

const NewUserForm = () => {
  const dispatch = useDispatch();

  const { addUserApi } = usePeopleApi();

  const [newUser, setNewUser] = useState<Omit<User, "id">>({
    name: "",
    age: 0,
    sex: "",
    picture: "",
    location: "",
    isFriend: true,
  });

  const changeNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = await addUserApi(newUser);

    dispatch(addUserActionCreator(user));
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="from-control">
        <label htmlFor="name" className="form__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={newUser.name}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="age" className="form__label">
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={newUser.age}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="sex" className="form__label">
          Sex:
        </label>
        <input
          type="text"
          id="sex"
          value={newUser.sex}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="picture" className="form__label">
          Image:
        </label>
        <input
          type="text"
          id="picture"
          value={newUser.picture}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="location" className="form__label">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={newUser.location}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control options">
        <div className="options__control">
          <input
            type="radio"
            id="Friend"
            name="friend"
            value="friend"
            onChange={changeNewUser}
            checked
          />
          <label htmlFor="Friend">Friend</label>
        </div>
        <div className="options__control">
          <input
            type="radio"
            id="Enemy"
            name="friend"
            value="enemy"
            onChange={changeNewUser}
          />
          <label htmlFor="Enemy">Enemy</label>
        </div>
      </div>

      <div className="form__button-container">
        <button type="submit" className="button form__button">
          Add user
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;
