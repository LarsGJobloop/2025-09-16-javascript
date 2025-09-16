export function createTaskCard(task) {
  const taskCard = document.createElement("li")
  
  
  taskCard.className = "task-item"
  taskCard.textContent = task

  return taskCard
}
