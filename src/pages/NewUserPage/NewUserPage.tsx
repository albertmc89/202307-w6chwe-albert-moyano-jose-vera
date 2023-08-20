import NewUserForm from "../../components/NewUserForm/NewUserForm";
import "./NewUserPage.css";

const NewUserPage = () => {
  return (
    <section>
      <div className="section-title">
        <h2>Add new user</h2>
      </div>
      <NewUserForm />
    </section>
  );
};

export default NewUserPage;
