// Array to store the tasks
let tareas = [];

// CREATE
function addTask() {
  const input = document.getElementById('todoInput');
  const tarea = input.value.trim();

  if (tarea !== '') {
    tareas.push(tarea);
    input.value = '';
    mostrarTareas();
  }
}

// READ
function mostrarTareas() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    ${tarea}
    <button class="edit" onclick="editarTarea(${index})">Editar</button>
    <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
`;
    todoList.appendChild(li);
  });
}

// EDIT
function editarTarea(index) {
  const nuevaTarea = prompt('Editar tarea:', tareas[index]);
  if (nuevaTarea !== null) {
    tareas[index] = nuevaTarea.trim();
    mostrarTareas();
  }
}

// DELETE
function eliminarTarea(index) {
  const confirmacion = confirm('¿Estás seguro de eliminar esta tarea?');
  if (confirmacion) {
    tareas.splice(index, 1);
    mostrarTareas();
  }
}

// INITIALIZE
mostrarTareas();