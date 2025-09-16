export function createTaskCard(task) {
  // First create all the elements
  const taskCard = document.createElement("li")
  const titleElement = document.createElement("p")
  const imageElement = document.createElement("img")

  // Configure the elements
  taskCard.className = "task-item"
  titleElement.textContent = task.title
  imageElement.src =task.imageReference
  imageElement.width = 30

  // Organize them
  taskCard.append(titleElement)
  taskCard.append(imageElement)

  // Return the complete card
  return taskCard
}
