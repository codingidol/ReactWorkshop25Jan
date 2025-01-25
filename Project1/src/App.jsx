import React, { useState } from "react";
import Card from "./Component/Card";

const App = () => {
  const [taskData, settaskData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      task: e.target.task.value,
    };
    settaskData([...taskData, obj]);
    e.target.task.value = "";
  };
  const handleDelete = (index) => {
    const filteredData = taskData.filter((val, ind) => ind !== index);
    settaskData(filteredData);
  };
  return (
    <div id="main">
      <form onSubmit={handleSubmit} id="form">
        <h1>Write your task here</h1>
        <input type="text" name="task" />
        <button type="submit">Submit</button>
      </form>
      <div id="task">
        {taskData.map((val, index) => (
          <Card data={val} handleDelete={handleDelete} index={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
