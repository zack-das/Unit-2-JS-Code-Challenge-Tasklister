class TaskList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

   addTask(task) {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }    

  render() {
    const taskItems = this.tasks.map(task => task.render()).join("");
    return `<ul>${taskItems}</ul>`;
  }
}
