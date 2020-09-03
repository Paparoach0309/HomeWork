 let ToDoList = function() {
     let inputTask = document.querySelector('#inputTask'),
         addTask = document.querySelector('#addTask'),
         itemTask = document.querySelector('.itemTask');

     let toDoList = [];

     addTask.addEventListener('click', function() {
         let arr = {
             task: inputTask.value,
             checked: false
         };
         toDoList.push(arr);
         show();
         inputTask.value = '';
     });

     function show() {
         let disp = '';
         toDoList.forEach(function(item, i) {
             disp += `
         <li>
        <input type='checkbox' class = 'check' id ='item_${i}'>
        <label for='item_${i}' class='${item.task}'>${item.task}</label>
        </li>`;
             itemTask.innerHTML = disp;

             let check = document.querySelector('.check');
             check.addEventListener('click', function() {
                 itemTask.classList.toggle('complete');
             });
         });
     }


     let deleteTask = document.querySelector('.delete');
     deleteTask.addEventListener('click', function() {
         itemTask.innerHTML = '';
         toDoList = [];
         show();
     });
 };

 let toDoList = new ToDoList();