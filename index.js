import {
    saveTask, 
    getTasks, 
    onGetClient, 
    deleteClient, 
    getClient,
    updateClient,
} from './server.js'

const taskForm = document.getElementById('form')
const contenedorClientes = document.getElementById('contenedor-clientes')

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async () => {
    onGetClient((querySnapshot) => {
        let html = "";

        querySnapshot.forEach(doc => {
            const task = doc.data();
            html += `
            <div class="card border-primary mb-3" style="max-width: 20rem;">
            <div class="card-header"></div>
            <div class="card-body">
            <h3 class="h5">Nombre: ${task.name}</h3>
            <p class="card-text">Telefono: ${task.tel}</p>
            <p class="card-text">Correo: ${task.mail}</p>
            </div>
            <div class="card-body">
            <button class = "btn btn-primary btn-delete" data-id="${doc.id}">Borrar</button>
            <button class = "btn btn-secondary btn-edit" data-id="${doc.id}">Editar</button>
            </div>
            </div>
            `;
        });
        contenedorClientes.innerHTML = html;


        const btnDelete = contenedorClientes.querySelectorAll('.btn-delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({target: { dataset }}) => {
                deleteClient(dataset.id)
            })
        })

        const btnEdit = contenedorClientes.querySelectorAll('.btn-edit')
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getClient(e.target.dataset.id)
                const task = doc.data()

                taskForm['nombre'].value = task.name
                taskForm['telefono'].value = task.tel
                taskForm['correo'].value = task.mail

                editStatus = true;
                id = doc.id;

                taskForm['btn-login'].innerHTML = "Guardar"

            });

        });
    });
});


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = taskForm['nombre'];
    const tel = taskForm['telefono'];
    const mail = taskForm['correo'];

    if (!editStatus){
        saveTask(name.value, tel.value, mail.value);
    } 
    else{
        updateClient(id, {
            name: name.value, 
            tel: tel.value, 
            mail: mail.value,
        });

        editStatus = false;
    }

    taskForm.reset();
});