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
function saveProjects(projects){
  const texto = JSON.stringify(projects);
  localStorage.setItem('bitacora_projects', texto)

}

//Texto a json de nuevo 
function getProjects() {
  const texto = localStorage.getItem('bitacora_projects');

  if (texto == null){
    //Si no hay nada guardado todavía 
    saveProjects(PROYECTOS_RAIZ);
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
        <span class="task-checkbox"></span>
      </li>
    `;
  }

  if (item.tipo === 'carpeta'){
    const conteo = contarTareas(item.tareas);
    const todoHecho = conteo.total > 0 && conteo.hechas == conteo.total;
    const claseHecha = todoHecho ? 'done' : '';

    const subitemsHtml =item.tareas.map(generarItemHtml).join('');

    return `
      <li class="task task-folder ${claseHecha}" data-folder-id="${item.id}">
        <span class="task-text">${item.nombre} <span class="folder-count">${conteo.hechas}/${conteo.total}</span> 📁</span>
        <span class="task-checkbox"></span>
      </li>
      <ul class="subtask-list-new">
        ${subitemsHtml}
      </ul>
    `;

  }
}

//Pintar los proyectos en pantaalla
function mostrarProjects(){
  const projects = getProjects();
  const contenedor = document.getElementById('project-list');
  
  contenedor.innerHTML = ''; // vaciamos el HTML fijo de antes

  projects.forEach((proyecto) => {
    const conteo = contarTareas(proyecto.tareas);
    const porcentaje = conteo.total === 0 ? 0 : (conteo.hechas / conteo.total) * 100;

    const listaTareasHtml  = proyecto.tareas.map(generarItemHtml).join('');

    const html = `
      <article class="project-card">
        <div class="project-card-header">
          <span class="project-name">${proyecto.nombre}</span>
          <span class="project-count">${conteo.hechas} / ${conteo.total} tareas</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill progress-green" style="width: ${porcentaje}%"></div>
        </div>
        <ul class="task-list">
          ${listaTareasHtml}
        </ul>
        <button class="add-task-btn" data-project-id="${proyecto.id}">+ Añadir tarea</button>
      </article>
    `;

    contenedor.innerHTML += html;

  });
}


// ===== Detectar clic en una tarea =====
document.getElementById('project-list').addEventListener('click',(event) =>{
  //Si el click es en elcheckbox: marcar/desmarcar
  const checkbox = event.target.closest('.task-checkbox');
  if (checkbox != null){
    const li = checkbox.closest('.task');
    marcarTarea(li.dataset.taskId);
    return;
  }

  //Si el click es en el texto: editar
  const textoTarea = event.target.closest('.task-text');
  if (textoTarea !== null){
    const li = textoTarea.closest('.task');
    editarTarea(li.dataset.taskId);
    return;
  }
}
)

// ===== Detectar clic en "Añadir tarea" =====
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.add-task-btn');
  if (boton === null) return;

  addTarea(boton.dataset.projectId);
});


// Marca/desmarca una tarea como hecha
function marcarTarea(taskId){
  const projects = getProjects();

  projects.forEach((proyecto) => {
    proyecto.tareas.forEach((tarea) =>{
      if (tarea.id === taskId){
        tarea.hecha = !tarea.hecha;
      }
    });
  });

  saveProjects(projects);
  mostrarProjects();

}

//Editar texto  detareas
function editarTarea(taskId){
  const projects = getProjects();
  let tareaEncontrada = null;

  projects.forEach((proyecto)=>{
    proyecto.tareas.forEach((tarea) =>{
      if (tarea.id === taskId) {
        tareaEncontrada = tarea
      }
    });
  });

  if(tareaEncontrada === null) return;

  const nuevoTexto = prompt('Editar tarea:', tareaEncontrada.texto);

  if(nuevoTexto === null || nuevoTexto.trim() === ''){
    return;
  }

  tareaEncontrada.texto = nuevoTexto.trim();
  saveProjects(projects);
  mostrarProjects();
}

function addTarea(projectId){
  const texto = prompt('Nuev tarea:');

  if(texto === null || texto.trim() === ''){
    return
  }

  const projects =getProjects();

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

  saveProjects(projects);
  mostrarProjects();
}


//============ AGENDA =========
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


// Por ahora, cambio de pantalla mostrando/ocultando cada sección.
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

mostrarProjects();
mostrarEventos();