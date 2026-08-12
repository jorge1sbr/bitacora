const PROYECTOS_RAIZ = [
  {
    id: 'ia',
    nombre: 'IA',
    tareas: [
      { id: 't1', tipo: 'tarea', texto: 'Video Benj. Cordero', hecha: true },
      { id: 't2', tipo: 'tarea', texto: 'Crear Agentes Claude', hecha: true }
    ]
  },
  {
    id: 'python',
    nombre: 'Python',
    tareas: [
      { id: 't3', tipo: 'tarea', texto: 'Estudiar Python — fundamentos', hecha: true },
      {
        id: 'c1',
        tipo: 'carpeta',
        nombre: 'Data with Baraa',
        tareas: [
          { id: 't4', tipo: 'tarea', texto: 'Módulo 1', hecha: true },
          { id: 't5', tipo: 'tarea', texto: 'Módulo 2', hecha: false }
        ]
      }
    ]
  },
  {
    id: 'app',
    nombre: 'App',
    tareas: []
  }
];

const EVENTOS_RAIZ = [
  {
    id: 'e1',
    hora: '09:00',
    titulo: 'Estudiar Python — Módulo 2',
    duracion: '45 min',
    alarma: '08:55'
  },
  {
    id: 'e2',
    hora: '11:30',
    titulo: 'Grabar video — Benj. Cordero',
    duracion: '1h',
    alarma: null
  },
  {
    id: 'e3',
    hora: '17:00',
    titulo: 'Bocetar pantallas de la App',
    duracion: '30 min',
    alarma: null
  },
  {
    id: 'e4',
    hora: '20:30',
    titulo: 'Repaso — Data with Baraa',
    duracion: '30 min',
    alarma: '20:25'
  },
  {
    id: 'e5',
    hora: null,
    titulo: 'Revisar notas del curso',
    duracion: null,
    alarma: null
  }
];


//===================== PROYECTOS ===================

//Proyectos guardados como texto en localStorage
function guardarProyectos(projects){
  const texto = JSON.stringify(projects);
  localStorage.setItem('bitacora_projects', texto)

}

//Texto a json de nuevo 
function getProyectos() {
  const texto = localStorage.getItem('bitacora_projects');

  if (texto == null){
    //Si no hay nada guardado todavía 
    guardarProyectos(PROYECTOS_RAIZ);
    return PROYECTOS_RAIZ;
  }

  const projects = JSON.parse(texto)
  return projects;
}

// Cuenta tareas totales y hechas de una lista, incluyendo las que están dentro de carpetas
function contarTareas(items){
  let total = 0;
  let hechas = 0;

  items.forEach((item) =>{
    if(item.tipo === 'tarea'){
      total++;
      if(item.hecha){
        hechas++;
      }
    } else if (item.tipo === 'carpeta'){
      const resultado = contarTareas(item.tareas); // se llama a sí misma con las tareas de dentro de la carpeta
      total += resultado.total;
      hechas += resultado.hechas;
    }
  });
    return { total, hechas};
}

function generarItemHtml(item){
  if(item.tipo === 'tarea'){
    const claseHecha = item.hecha ? 'done' : '';
    return `
      <li class="task ${claseHecha}" data-task-id="${item.id}">
        <span class="task-text">${item.texto}</span>
        <span class="task-actions">
          <span class="task-checkbox"></span>
          <button class="delete-task-btn" data-task-id="${item.id}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"/>
            </svg>
          </button>
        </span>
      </li>
    `;
  }

  if (item.tipo === 'carpeta'){
    const conteo = contarTareas(item.tareas);
    const todoHecho = conteo.total > 0 && conteo.hechas == conteo.total;
    const claseHecha = todoHecho ? 'done' : '';

    const subitemsHtml = item.tareas.map(generarItemHtml).join('');

    return `
      <li class="task task-folder ${claseHecha}" data-folder-id="${item.id}">
        <span class="task-text">
          ${item.nombre} <span class="folder-count">${conteo.hechas}/${conteo.total}</span>
          <svg class="folder-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
          </svg>
          <button class="add-subtask-btn" data-folder-id="${item.id}">+</button>
        </span>
        <span class="task-actions">
          <span class="task-checkbox"></span>
          <button class="delete-folder-btn" data-folder-id="${item.id}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z"/>
            </svg>
          </button>
        </span>
      </li>
      <ul class="subtask-list-new">
        ${subitemsHtml}
      </ul>
    `;
  }
}

//Pintar los proyectos en pantaalla
function mostrarProyectos(){
  const projects = getProyectos();
  const contenedor = document.getElementById('project-list');
  
  contenedor.innerHTML = ''; // vaciamos el HTML fijo de antes

  projects.forEach((proyecto) => {
    const conteo = contarTareas(proyecto.tareas);
    const porcentaje = conteo.total === 0 ? 0 : (conteo.hechas / conteo.total) * 100;

    const listaTareasHtml  = proyecto.tareas.map(generarItemHtml).join('');

    const html = `
      <article class="project-card">
        <div class="project-card-header">
          <div class="project-title-group">
            <span class="project-name">${proyecto.nombre}</span>
            <div class="add-item-wrapper">
              <button class="add-item-btn" data-project-id="${proyecto.id}">+</button>
              <div class="add-item-menu" data-project-id="${proyecto.id}" hidden>
                <button class="add-item-option" data-action="tarea" data-project-id="${proyecto.id}">Añadir tarea</button>
                <button class="add-item-option" data-action="carpeta" data-project-id="${proyecto.id}">Añadir subcarpeta</button>
              </div>
            </div>
          </div>
          <div class="project-header-actions">
            <span class="project-count">${conteo.hechas} / ${conteo.total} tareas</span>
            <button class="project-menu-btn" data-project-id="${proyecto.id}">⋯</button>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill progress-green" style="width: ${porcentaje}%"></div>
        </div>
        <ul class="task-list">
          ${listaTareasHtml}
        </ul>
      </article>
    `;

    contenedor.innerHTML += html;

  });
}


// ===== Funcionamiento de botones y =====
document.getElementById('project-list').addEventListener('click',(event) =>{
  const checkbox = event.target.closest('.task-checkbox');
  if (checkbox != null){
    const li = checkbox.closest('.task');
    if (!li.classList.contains('task-folder')) {
      marcarTarea(li.dataset.taskId);
    }
    // si es carpeta su estado se calcula solo
    return;
  }

  const textoTarea = event.target.closest('.task-text');
  if (textoTarea !== null){
    const li = textoTarea.closest('.task');
    if (li.classList.contains('task-folder')) {
      editarCarpeta(li.dataset.folderId);
    } else {
      editarTarea(li.dataset.taskId);
    }
    return;
  }
})

//Detectar clic en "Añadir tarea"
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.add-task-btn');
  if (boton === null) return;

  if (boton.dataset.folderId) {
    addTareaEnCarpeta(boton.dataset.folderId);
  } else {
    addTarea(boton.dataset.projectId);
  }
});

//Detectar clic en "borrar tarea" 
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.delete-task-btn');
  if (boton === null) return;

  borrarTarea(boton.dataset.taskId);
});

//Detectar clic en "+ Proyecto"
document.getElementById('add-project-btn').addEventListener('click', () => {

  addProyecto();
});

//Detectar clic en "Añadir carpeta"
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.add-folder-btn');
  if (boton === null) return;

  addCarpeta(boton.dataset.projectId);
});

//Detectar clic en "borrar carpeta"
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.delete-folder-btn');
  if (boton === null) return;

  borrarCarpeta(boton.dataset.folderId);
});

// ===== Detectar clic en el menú de un proyecto (⋯) =====
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.project-menu-btn');
  if (boton === null) return;

  menuProyecto(boton.dataset.projectId);
});

// Marca/desmarca una tarea como hecha
function marcarTarea(taskId){
  const projects = getProyectos();

  function buscarYMarcar(items){
    items.forEach((item)=> {
      if (item.tipo === 'tarea' && item.id === taskId){
        item.hecha = !item.hecha;
      } else if (item.tipo === 'carpeta'){
        buscarYMarcar(item.tareas);//busca también dentro de la carpeta
      }
    });
  }

  projects.forEach((proyecto) => buscarYMarcar(proyecto.tareas));

  guardarProyectos(projects);
  mostrarProyectos();
}

//Editar texto de tareas
function editarTarea(taskId){
  const projects = getProyectos();
  let tareaEncontrada = null;

  function buscar(items) {
    items.forEach((item) => {
      if (item.tipo === 'tarea' && item.id === taskId) {
        tareaEncontrada = item;
      } else if (item.tipo === 'carpeta') {
        buscar(item.tareas);
      }
    });
  }

  projects.forEach((proyecto) => buscar(proyecto.tareas));

  if(tareaEncontrada === null) return;

  const nuevoTexto = prompt('Editar tarea:', tareaEncontrada.texto);

  if(nuevoTexto === null || nuevoTexto.trim() === ''){
    return;
  }

  tareaEncontrada.texto = nuevoTexto.trim();
  guardarProyectos(projects);
  mostrarProyectos();
}

function addTarea(projectId){
  const texto = prompt('Nuev tarea:');

  if(texto === null || texto.trim() === ''){
    return
  }

  const projects = getProyectos();

  projects.forEach((proyecto) => {
    if(proyecto.id === projectId){
      proyecto.tareas.push({
        id: crypto.randomUUID(),
        tipo: 'tarea',
        texto: texto.trim(),
        hecha: false
      });
    }
  });

  guardarProyectos(projects);
  mostrarProyectos();
}

function addTareaEnCarpeta(folderId) {
  const texto = prompt('Nueva tarea:');

  if (texto === null || texto.trim() === '') {
    return;
  }

  const projects = getProyectos();

  function buscarCarpetaYAnadir(items) {
    items.forEach((item) => {
      if (item.tipo === 'carpeta' && item.id === folderId) {
        item.tareas.push({
          id: crypto.randomUUID(),
          tipo: 'tarea',
          texto: texto.trim(),
          hecha: false
        });
      } else if (item.tipo === 'carpeta') {
        buscarCarpetaYAnadir(item.tareas);
      }
    });
  }

  projects.forEach((proyecto) => buscarCarpetaYAnadir(proyecto.tareas));

  guardarProyectos(projects);
  mostrarProyectos();
}

function borrarTarea(taskId){
  const confirmado = confirm('¿Borrar esta tarea?');
  if(!confirmado) return;

  const projects = getProyectos();

  projects.forEach((proyecto) =>{
    proyecto.tareas = proyecto.tareas.filter((item) => {
      if (item.tipo === 'tarea'){
        return item.id !== taskId;
      }
      if (item.tipo === 'carpeta'){
        item.tareas = item.tareas.filter((sub) =>  sub.id !== taskId);
        return true;
      }
      return  true;
    });

    guardarProyectos(projects);
    mostrarProyectos();
  });
}

function addCarpeta(projectId) {
  const nombre = prompt('Nombre de la carpeta:');

  if (nombre === null || nombre.trim() === '') {
    return;
  }

  const projects = getProyectos();

  projects.forEach((proyecto) => {
    if (proyecto.id === projectId) {
      proyecto.tareas.push({
        id: crypto.randomUUID(),
        tipo: 'carpeta',
        nombre: nombre.trim(),
        tareas: []
      });
    }
  });

  guardarProyectos(projects);
  mostrarProyectos();
}

function borrarCarpeta(folderId) {
  const confirmado = confirm('¿Borrar esta carpeta y todas sus tareas de dentro?');
  if (!confirmado) return;

  const projects = getProyectos();

  projects.forEach((proyecto) => {
    proyecto.tareas = proyecto.tareas.filter((item) => item.id !== folderId);
  });

  guardarProyectos(projects);
  mostrarProyectos();
}

function addProyecto(){
  const nombre = prompt('Nombre del proyecto:');

  if (nombre === null || nombre.trim() === ''){
    return;
  }

  const projects = getProyectos();

  projects.push({
    id: crypto.randomUUID(),
    nombre: nombre.trim(),
    tareas: []
  });
  guardarProyectos(projects);
  mostrarProyectos();
}

function menuProyecto(projectId){
  const accion = prompt('Escribe "editar" para renombrar el proyecto o "borrar" para eliminarlo');

  if (accion === null) return;

  if (accion.trim().toLowerCase() === 'editar'){
    editarProyecto(projectId);
  } else if (accion.trim().toLowerCase() === 'borrar'){
    borrarProyecto(projectId)
  }
}

function editarProyecto(projectId){
  const proyectos = getProyectos();
  let proyectoEncontrado = null;

  proyectos.forEach((proyecto) =>{
    if(proyecto.id === projectId){
      proyectoEncontrado = proyecto;
    }
  });
  
  if (proyectoEncontrado === null) return;

  const nuevoNombre = prompt('Nuevo nombre del proyecto:', proyectoEncontrado.nombre);
  
  if(nuevoNombre === null || nuevoNombre.trim()=== '') return;

  proyectoEncontrado.nombre = nuevoNombre.trim();
  guardarProyectos(proyectos);
  mostrarProyectos();
}

function borrarProyecto(projectId){
  const confirmado = confirm('¿Borrar este proyecto y todas sus tareas?')
  if(!confirmado) return;

  let proyectos = getProyectos();
  proyectos = proyectos.filter((proyecto) => proyecto.id !== projectId);

  guardarProyectos(proyectos);
  mostrarProyectos();
}

function editarCarpeta(folderId){
  const proyectos = getProyectos();
  let carpetaEncontrada = null;

  proyectos.forEach((proyecto) =>{
    proyecto.tareas.forEach((item) => {
      if (item.tipo === 'carpeta' && item.id === folderId){
        carpetaEncontrada = item;
      }
    });
  });

  if (carpetaEncontrada === null) return;

  const nuevoNombre = prompt('Nuevo nombre de la carpeta: ', carpetaEncontrada.nombre);

  if(nuevoNombre === null || nuevoNombre.trim() === '') return;

  carpetaEncontrada.nombre = nuevoNombre.trim();
  guardarProyectos(proyectos);
  mostrarProyectos();
}

//Abrir/cerrar el menú "+" de un proyecto o carpeta 
document.getElementById('project-list').addEventListener('click', (event) => {
  const botonAdd = event.target.closest('.add-item-btn');
  const botonTarea = event.target.closest('.add-subtask-btn');
  const opcion = event.target.closest('.add-item-option');

  // Cierra todos los menús abiertos
  document.querySelectorAll('.add-item-menu').forEach((menu) => {
    if (!botonAdd || menu !== botonAdd.nextElementSibling) {
      menu.hidden = true;
    }
  });

  if (botonAdd !== null) {
    const menu = botonAdd.nextElementSibling;
    menu.hidden = !menu.hidden;
    return;
  }

  if (botonTarea !== null) {
    addTareaEnCarpeta(botonTarea.dataset.folderId);
    return;
  }

  if (opcion !== null) {
    const accion = opcion.dataset.action;
    if (accion === 'tarea') {
      addTarea(opcion.dataset.projectId);
    } else if (accion === 'carpeta') {
      addCarpeta(opcion.dataset.projectId);
    }
  }
});

// Cierra cualquier menú "+" abierto si se hace clic fuera de él
document.addEventListener('click', (event) => {
  const dentroDelMenu = event.target.closest('.add-item-wrapper');
  if (dentroDelMenu === null) {
    document.querySelectorAll('.add-item-menu').forEach((menu) => {
      menu.hidden = true;
    });
  }
});
//==========================================================================================
//============ AGENDA =========
//==========================================================================================

//Eventos como texto en localStorage
function saveEventos(eventos) {
  const texto = JSON.stringify(eventos);
  localStorage.setItem('bitacora_eventos', texto);
}

function getEventos(){
  const texto = localStorage.getItem('bitacora_eventos');

  if(texto == null){
    saveEventos(EVENTOS_RAIZ);
    return EVENTOS_RAIZ;
  }

  const eventos = JSON.parse(texto);
  return eventos;
}

//
function mostrarEventos(){
  const eventos = getEventos();
  const contenedor = document.getElementById('agenda-list');

  contenedor.innerHTML = '';

  eventos.forEach((evento) =>{
    const tieneAlarma = evento.alarma !== null;
    const iconoAlarma = tieneAlarma ? `<span class="alarm-icon">🔔</span>` : '';

    const textoHora = evento.hora !== null ? evento.hora : '';
    const textoDuracion = evento.duracion !== null ? evento.duracion : '';

    const html = `
      <article class="event-card" data-event-id="${evento.id}">
        <div class="event-card-header">
          <span class="event-time-group">
            <span class="event-time">${textoHora}</span>
            <span class="event-duration">${textoDuracion}</span>
          </span>
          ${iconoAlarma}
        </div>
        <p class="event-title">${evento.titulo}</p>
      </article>
    `;

    contenedor.innerHTML += html;
  })
}


//Cambio de pantalla mostrando/ocultando cada sección.
document.querySelectorAll('.nav-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetScreen = btn.dataset.screen; // ej. "proyectos", "agenda", "perfil"

    // Actualiza el estado visual de la navegación
    document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // Oculta todas las pantallas y muestra solo la seleccionada
    document.querySelectorAll('.screen').forEach((screen) => {
      const isTarget = screen.id === `screen-${targetScreen}`;
      screen.hidden = !isTarget;
    });
  });
});

mostrarProyectos();
mostrarEventos();