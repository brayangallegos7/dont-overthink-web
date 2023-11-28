import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");
  const tasksContainer = document.getElementById("tasks-container");
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks((querySnapshot) => {
      tasksContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
  
        tasksContainer.innerHTML += `
        
        <main>
    <div class="container">
        <div>
            <div class="table-wrapper">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Categoria</i></th>
                            <th>Nombre</th>
                            <th>Modelo</i></th>
                            <th>Color</th>
                            <th>Precio</i></th>
                            <th>Acción</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${task.categoria}</td>
                            <td>${task.marca}</td>
                            <td>${task.modelo}</td>
                            <td>${task.color}</td>
                            <td>${task.precio}</td>
                            <td>
                              <button class="btn btn-warning btn-edit" data-id="${doc.id}">
                                🖉
                               </button>
                               <button class="btn btn-danger btn-delete" data-id="${doc.id}">
                                🗑
                               </button>
                              </td>   
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>        
    </div>     
</main>`;
      });
  
      const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteTask(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getTask(e.target.dataset.id);
            const task = doc.data();
            taskForm["task-categoria"].value = task.categoria;
            taskForm["task-marca"].value = task.marca;
            taskForm["task-modelo"].value = task.modelo;
            taskForm["task-color"].value = task.color;
            taskForm["task-precio"].value = task.precio;
  
            editStatus = true;
            id = doc.id;
            taskForm["btn-task-form"].innerText = "Actualizar";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const categoria = taskForm["task-categoria"];
    const marca = taskForm["task-marca"];
    const modelo = taskForm["task-modelo"];
    const color = taskForm["task-color"];
    const precio = taskForm["task-precio"];
    try {
      if (!editStatus) {
        await saveTask(categoria.value, marca.value, modelo.value, color.value, precio.value);
      } else {
        await updateTask(id, {
          categoria: categoria.value,
          marca: marca.value,
          modelo: modelo.value,
          color: color.value,
          precio: precio.value,
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-form"].innerText = "Guardar";
      }
  
      taskForm.reset();
      categoria.focus();
    } catch (error) {
      console.log(error);
    }
  });