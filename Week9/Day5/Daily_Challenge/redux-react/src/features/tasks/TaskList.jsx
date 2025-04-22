// src/features/tasks/TaskList.js
import React, { useState } from "react";
import TaskItem from "./TaskItem";
import {
  useAddTask,
  useTasks,
  useDeleteTask,
  useEditTask,
} from "./state/hooks";
import { useCategories } from "../categories/state/hooks";
import CategoryManager from "../categories/CategoryManager";

const TaskList = () => {
  const [tasksName, setTasksName] = useState("");
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [editingId, setEditingId] = useState(null);

  const callUseAddTask = useAddTask();
  const callUseDeleteTask = useDeleteTask();
  const callUseEditTask = useEditTask();
  const tasks = useTasks();
  const categories = useCategories();

  const handleAddTask = () => {
    if (tasksName.trim() && selectedCategory !== "Select Category") {
      callUseAddTask(tasksName, selectedCategory);
      setTasksName("");
      setSelectedCategory("Select Category");
      setError("");
    } else {
      setError("Please enter a task name and select a category");
    }
  };

  return (
    <>
      <CategoryManager />
      <h2>Tasks List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter new task"
          value={tasksName}
          onChange={(e) => setTasksName(e.target.value)}
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="Select Category">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <section>
        <h1>New Task</h1>
        <ul>
          {tasks.map((task) => (
            <TaskItem
              task={task}
              onDelete={callUseDeleteTask}
              onEdit={callUseEditTask}
              isEditing={editingId === task.id}
              setEditingId={setEditingId}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default TaskList;
