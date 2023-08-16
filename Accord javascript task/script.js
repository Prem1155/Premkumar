document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');
    const workInput = document.getElementById('workInput');
    const addButton = document.getElementById('addButton');
    const changeTitleButton = document.getElementById('changeTitleButton');
    const deleteButton = document.getElementById('deleteButton');
    const clearButton = document.getElementById('clearButton');
  
    addButton.addEventListener('click', addWork);
    changeTitleButton.addEventListener('click', changeCardTitle);
    deleteButton.addEventListener('click', deleteWork);
    clearButton.addEventListener('click', clearWorklist);
  
    function addWork() {
      const selectedCategory = categorySelect.value;
      const workItem = document.createElement('li');
      workItem.textContent = workInput.value;
      document.getElementById(selectedCategory).appendChild(workItem);
      workInput.value = '';
    }
  
    function changeCardTitle() {
      const selectedCategory = categorySelect.value;
      const newTitle = prompt('Enter the new title:');
      if (newTitle) {
        const card = document.querySelector(`#${selectedCategory}`).parentNode;
        card.querySelector('h2').textContent = newTitle;
      }
    }
  
    function deleteWork() {
      const selectedCategory = categorySelect.value;
      const workItems = document.getElementById(selectedCategory).children;
      if (workItems.length > 0) {
        removeWork();
        if (confirmation) {
          workItems[workItems.length - 1].remove();
        }
      }
    }
  
    function removeWork() {
      const confirmation = confirm('Are you sure you want to delete this work?');
      if (confirmation) {
        this.remove();
      }
    }
  
    function clearWorklist() {
      const confirmation = confirm('Are you sure you want to clear the entire worklist?');
      if (confirmation) {
        const workItems = document.querySelectorAll('.work-items li');
        workItems.forEach(function(workItem) {
          workItem.remove();
        });
      }
    }
  });
  