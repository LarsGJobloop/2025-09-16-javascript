import { createTaskCard } from "./createTaskCard.js"

const tasks = [
  "Mince meat",
  "Feed sharks",
  "Take a stroll",
]

const taskList = document.querySelector("#task-list")

for (const task of tasks) {
  const card = createTaskCard(task)
  taskList.append(card)
}

