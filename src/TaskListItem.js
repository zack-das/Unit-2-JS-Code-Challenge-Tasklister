class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `<li>${this.description}</li>`;
  }
}
