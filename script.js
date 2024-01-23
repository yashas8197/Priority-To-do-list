const toDoInput = document.getElementById("toDoInput");
const selectPriority = document.getElementById("selectPriority");
const addPriorityBtn = document.getElementById("addPriorityBtn");
const lowPriorityUl = document.querySelector("#lowPriorityUl")
const mediumPriorityUl = document.querySelector("#mediumPriorityUl")
const highPriorityUl = document.querySelector("#highPriorityUl");

addPriorityBtn.addEventListener("click", function() {
  const listLiElement = document.createElement('li')

  if (selectPriority.value === "Low Priority") {
    listLiElement.innerHTML = `
      ${inputValue()}
      ${multipleDeleteBtn()}
    `
    lowPriorityUl.appendChild(listLiElement)
  } else if (selectPriority.value === "Medium Priority") {
    listLiElement.innerHTML = `
      ${inputValue()}
      ${multipleDeleteBtn()}
    `
    mediumPriorityUl.appendChild(listLiElement)
  } else {
    listLiElement.innerHTML = `
      ${inputValue()}
      ${multipleDeleteBtn()}
    `
    highPriorityUl.appendChild(listLiElement)
  }

  listLiElement.className = "list-group-item d-flex justify-content-between align-items-center"
})

function inputValue() {
  return toDoInput.value
}

function multipleDeleteBtn() {
  return `<button class="btn btn-danger" id="deleteBtn" onClick="deleteItemList(this)">Delete</button>`
}

function deleteItemList(deleteBtn) {
  const listItem = deleteBtn.parentElement
  listItem.remove()
}

