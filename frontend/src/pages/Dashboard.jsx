import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

// importingComponents
import GoalForm from "./GoalForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  useEffect(() => {
    // redirectToLoginPageIfUserNotSignedIn
    // ifUserTriesToGoToDashboard/HomePage
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <section className="heading">
        <h4>Welcome {user && user.name}</h4>
      </section>

      <GoalForm />
    </>
  );
};

export default Dashboard;
