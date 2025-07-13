class TaskListItem {
  constructor(description, priority, dueDate) {
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.id = null; // Will be set by TaskList
  }

  getPriorityColor() {
    switch(this.priority) {
      case 'high': return 'red';
      case 'medium': return 'yellow';
      case 'low': return 'green';
      default: return 'black';
    }
  }

  formatDueDate() {
    if (!this.dueDate) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(this.dueDate).toLocaleDateString(undefined, options);
  }

  render() {
    const color = this.getPriorityColor();
    const formattedDate = this.formatDueDate();
    const dateDisplay = formattedDate ? ` (Due: ${formattedDate})` : '';
    
    return `
      <li style="color: ${color}">
        ${this.description}${dateDisplay}
        <button class="delete-btn" data-task-id="${this.id}">×</button>
      </li>
    `;
  }
}