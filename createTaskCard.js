// A function which does 1 thing and 1 thing only
// Think of it like an assistant that recives a description of
// a task and produces a <li> element with all the bells and whistles
// and returns it to whoever makes use of him
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
