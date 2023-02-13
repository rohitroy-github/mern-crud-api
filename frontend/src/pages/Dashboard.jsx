import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

import {toast} from "react-toastify";

// importingComponents
import GoalForm from "../components/GoalForm";
import {getGoals, reset} from "../features/goals/goalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);

  const {goals, isLoading, isError, message} = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    // redirectToLoginPageIfUserNotSignedIn
    // ifUserTriesToGoToDashboard/HomePage
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h4>Welcome {user && user.name}</h4>
        <h5>Goals Dashboard</h5>
      </section>

      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not created any goals yet ! </h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
