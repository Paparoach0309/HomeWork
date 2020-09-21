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
         let list = [];
         toDoList.forEach(function(item, i) {
             let liElem = document.createElement('li');
             liElem.innerHTML = `
            <label for='item_${i}' class='${item.task}'>${item.task}</label>`;

             list.push(liElem);

             liElem.addEventListener('click', function() {
                 this.classList.toggle('complete');
             });


             itemTask.innerHTML = '';

             list.forEach(function(li) {
                 itemTask.appendChild(li);
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