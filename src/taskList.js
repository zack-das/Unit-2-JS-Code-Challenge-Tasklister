class TaskList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  render() {
    const taskItems = this.tasks.map(task => task.render()).join("");
    return `<ul>${taskItems}</ul>`;
  }
}
