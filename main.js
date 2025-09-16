// Takes the createTaskCard function from
// the referenced JavaScript file
import { createTaskCard } from "./createTaskCard.js"

// Stores the list (JS calls them Arrays) of all tasks we have
const tasks = []

// Get the <form id="task-form"> object from the document
const taskForm = document.querySelector("#task-form")
// Whenever the Submit event occours, run the function (() => {})
taskForm.addEventListener("submit", (event) => {
  // Form causes a page refresh, we ignore it
  event.preventDefault()

  // Get the correct input elements
  const titleElement = taskForm.querySelector("#title")
  const imageReferenceElement = taskForm.querySelector("#image")

  // Collect all the information into an object
  const newTask = {
    // <element>.value is the user input value
    title: titleElement.value,
    imageReference: imageReferenceElement.value,
  }

  // Add it to the tasks list
  tasks.push(newTask)

  // Rerender the HTML
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

