// Takes the createTaskCard function from
// the referenced JavaScript file
import { createTaskCard } from "./createTaskCard.js"

// Stores the list (JS calls them Arrays) of all tasks we have
const tasks = []

const taskForm = document.querySelector("#task-form")
taskForm.addEventListener("submit", (event) => {
  event.preventDefault() // Form refresh page, we ignore it
  const titleElement = taskForm.querySelector("#title")
  const imageReferenceElement = taskForm.querySelector("#image")

  const newTask = {
    // <element>.value is the user input value
    title: titleElement.value,
    imageReference: imageReferenceElement.value,
  }

  tasks.push(newTask)

  render()
  
  // Clear out form
  taskForm.reset()
})

function render() {
  // Get the <ol id="task-list"> element from the Document
  // So that we can insert elements into it
  const taskList = document.querySelector("#task-list")
  // Remove all existing content
  taskList.innerHTML = ""

  // Go through all items defined in the
  // tasks list (line 6)
  for (const task of tasks) {
    // Use the function (our assistant)
    // provid him with the specific task
    // and use the returned <li> element
    const card = createTaskCard(task)
    // Append that to the end of the HTML <ol> element
    taskList.append(card)
  }
}

