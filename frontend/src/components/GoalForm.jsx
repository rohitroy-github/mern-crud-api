import {useState} from "react";
import {useDispatch} from "react-redux";

import {createGoal} from "../features/goals/goalSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  //   afterSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(newGoal);

    dispatch(createGoal({text}));

    setText("");
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Goal</label>
            <input
              type="text"
              className="form-control"
              id="text"
              name="text"
              value={text}
              placeholder="Enter your goal ?"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Save Goal
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default GoalForm;
