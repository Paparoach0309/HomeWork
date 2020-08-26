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
 });

 function show() {
     let disp = '';
     toDoList.forEach(function(item, i) {
         disp += `
         <p>
        <input type='checkbox' id ='item_${i}'>
        <label for='item_${i}'>${item.task}</label>
        </p>`;
         itemTask.innerHTML = disp;
     });
 }
 let deleteTask = document.querySelector('.delete');
 deleteTask.addEventListener('click', function() {

     itemTask.remove();
     show();
 });
 /*let deleteTasks = document.querySelector('.delete');
 deleteTasks.addEventListener('click', function() {
     itemTask.remove();
 };*/