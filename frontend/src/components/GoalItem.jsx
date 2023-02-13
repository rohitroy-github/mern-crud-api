// individualGoalItem

import React from "react";

import {useDispatch} from "react-redux";

import {deleteGoal} from "../features/goals/goalSlice";

const GoalItem = ({goal}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="goal">
        <h4>{goal.text}</h4>
        <p>{new Date(goal.createdAt).toLocaleString("en-IN")}</p>
        <button
          className="close"
          onClick={() => dispatch(deleteGoal(goal._id))}
        >
          [X]
        </button>
      </div>
    </>
  );
};

export default GoalItem;
