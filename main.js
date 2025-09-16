import { createTaskCard } from "./createTaskCard.js"

const tasks = [
  {
    title: "Mince meat",
    imageReference: "assets/mince-meat.avif"
  },
  {
    title: "Feed sharks",
    imageReference: "assets/mince-meat.avif"
  },
  {
    title: "Take a stroll",
    imageReference: "assets/mince-meat.avif"
  }
]

const taskList = document.querySelector("#task-list")

for (const task of tasks) {
  const card = createTaskCard(task)
  taskList.append(card)
}
