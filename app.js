const PROYECTOS_RAIZ = [
  {
    id: 'ia',
    nombre: 'IA',
    tareas: [
      { id: 't1', texto: 'Video Benj. Cordero', hecha: true },
      { id: 't2', texto: 'Crear Agentes Claude', hecha: true }
    ]
  },
  {
    id: 'python',
    nombre: 'Python',
    tareas: [
      { id: 't3', texto: 'Estudiar Python — fundamentos', hecha: true },
      { id: 't4', texto: 'Data with Baraa — Módulo 1', hecha: true },
      { id: 't5', texto: 'Data with Baraa — Módulo 2', hecha: false }
    ]
  },
  {
    id: 'app',
    nombre: 'App',
    tareas: []
  }
];

//Guardo los proyectos como texto en localStorage
function saveProjects(projects){
  const texto = JSON.stringify(projects);
  localStorage.setItem('bitacora_projects', texto)

}

//Convierto el  textoen json de nuevo 
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

//Pintar los proyectos en pantaalla
function mostrarProjects(){
  const projects = getProjects();
  const contenedor = document.getElementById('project-list');
  
  contenedor.innerHTML = ''; // vaciamos el HTML fijo de antes

  projects.forEach((proyecto) => {
    const totalTareas = proyecto.tareas.length; 
    const tareasHechas = proyecto.tareas.filter((tarea) => tarea.hecha).length;
    const porcentje = totalTareas === 0 ? 0 : (tareasHechas / totalTareas) * 100; // si es 0--> 0, si es !0 --> ()*100

  const listaTareasHtml = proyecto.tareas.map((tarea) => {
    const claseHecha = tarea.hecha ? 'done' : '';
    return `
      <li class="task ${claseHecha}" data-task-id="${tarea.id}">
        <span class="task-checkbox"></span>
        <span class="task-text">${tarea.texto}</span>
      </li>
    `;
  })
  .join('');


  const html = `
  <article class="project-card">
    <div class="project-card-header">
      <span class="project-name">${proyecto.nombre}</span>
      <span class="project-count">${tareasHechas} / ${totalTareas} tareas</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill progress-green" style="width: ${porcentje}%"></div>
    </div>
    <ul class="task-list">
      ${listaTareasHtml}
    </ul>
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