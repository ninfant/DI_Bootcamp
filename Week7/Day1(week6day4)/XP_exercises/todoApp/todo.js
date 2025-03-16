export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // ddds a new task with a description, tasks are initially marked as incomplete
  addTask(description) {
    const task = { description, completed: false };
    this.tasks.push(task);
  }

  // marks a task as complete based on its index in the tasks array
  markTaskAsComplete(index) {
    if (index < 0 || index >= this.tasks.length) {
      console.error("Task index out of bounds.");
      return;
    }
    this.tasks[index].completed = true;
  }

  // lists all tasks by printing them to the consolee
  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.description} - ${
          task.completed ? "Complete" : "Incomplete"
        }`
      );
    });
  }
}
