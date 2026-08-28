const PROYECTOS_RAIZ = [
  {
    "id": "ia",
    "nombre": "IA",
    "tareas": [
      {
        "id": "t2",
        "tipo": "tarea",
        "texto": "Crear Agentes Claude",
        "hecha": true
      }
    ]
  },
  {
    "id": "python",
    "nombre": "Python",
    "tareas": [
      {
        "id": "t3",
        "tipo": "tarea",
        "texto": "Estudiar Python — fundamentos",
        "hecha": false
      },
      {
        "id": "c1",
        "tipo": "carpeta",
        "nombre": "Data with Baraa",
        "tareas": [
          {
            "id": "t4",
            "tipo": "tarea",
            "texto": "Módulo 1",
            "hecha": true
          },
          {
            "id": "t5",
            "tipo": "tarea",
            "texto": "Módulo 2",
            "hecha": false
          }
        ]
      }
    ]
  },
  {
    "id": "app",
    "nombre": "App",
    "tareas": []
  },
  {
    "id": "dp900",
    "nombre": "DP-900",
    "tareas": [
      {
        "id": "dp900-1",
        "tipo": "carpeta",
        "nombre": "Introducción a los conceptos de datos principales de Microsoft Azure",
        "tareas": [
          {
            "id": "dp900-1a",
            "tipo": "carpeta",
            "nombre": "Exploración de los conceptos de los datos principales",
            "tareas": [
              { "id": "dp900-1a-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-1a-t2", "tipo": "tarea", "texto": "Identificación de los formatos de datos", "hecha": false },
              { "id": "dp900-1a-t3", "tipo": "tarea", "texto": "Exploración del almacenamiento de datos", "hecha": false },
              { "id": "dp900-1a-t4", "tipo": "tarea", "texto": "Exploración de bases de datos", "hecha": false },
              { "id": "dp900-1a-t5", "tipo": "tarea", "texto": "Exploración del procesamiento de datos transaccionales", "hecha": false },
              { "id": "dp900-1a-t6", "tipo": "tarea", "texto": "Exploración del procesamiento de datos analíticos", "hecha": false },
              { "id": "dp900-1a-t7", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-1a-t8", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          },
          {
            "id": "dp900-1b",
            "tipo": "carpeta",
            "nombre": "Exploración de roles y servicio de datos",
            "tareas": [
              { "id": "dp900-1b-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-1b-t2", "tipo": "tarea", "texto": "Exploración de roles de trabajo del mundo de los datos", "hecha": false },
              { "id": "dp900-1b-t3", "tipo": "tarea", "texto": "Identificación de los servicios de datos", "hecha": false },
              { "id": "dp900-1b-t4", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-1b-t5", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          }
        ]
      },
      {
        "id": "dp900-2",
        "tipo": "carpeta",
        "nombre": "Introducción a los datos relacionales de datos de Microsoft Azure en Azure",
        "tareas": [
          {
            "id": "dp900-2a",
            "tipo": "carpeta",
            "nombre": "Exploración de los conceptos fundamentales de datos relacionales",
            "tareas": [
              { "id": "dp900-2a-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-2a-t2", "tipo": "tarea", "texto": "Comprender los datos relacionales", "hecha": false },
              { "id": "dp900-2a-t3", "tipo": "tarea", "texto": "Compresión de la normalización", "hecha": false },
              { "id": "dp900-2a-t4", "tipo": "tarea", "texto": "Exploración de SQL", "hecha": false },
              { "id": "dp900-2a-t5", "tipo": "tarea", "texto": "Descripción de objetos de base de datos", "hecha": false },
              { "id": "dp900-2a-t6", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-2a-t7", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          },
          {
            "id": "dp900-2b",
            "tipo": "carpeta",
            "nombre": "Exploración de los servicios de bases de datos relacionales en Azure",
            "tareas": [
              { "id": "dp900-2b-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-2b-t2", "tipo": "tarea", "texto": "Descripción de los servicios de Azure para bases de datos de código abierto", "hecha": false },
              { "id": "dp900-2b-t3", "tipo": "tarea", "texto": "Ejercicio: exploración de servicios de base de datos relacionales de Azure", "hecha": false },
              { "id": "dp900-2b-t4", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-2b-t5", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          }
        ]
      },
      {
        "id": "dp900-3",
        "tipo": "carpeta",
        "nombre": "Introducción a los datos no relacionales de Microsoft Azure",
        "tareas": [
          {
            "id": "dp900-3a",
            "tipo": "carpeta",
            "nombre": "Explorar Azure Storage para datos no relacionales",
            "tareas": [
              { "id": "dp900-3a-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-3a-t2", "tipo": "tarea", "texto": "Exploración de Azure Blob Storage", "hecha": false },
              { "id": "dp900-3a-t3", "tipo": "tarea", "texto": "Exploración de Azure Data Lake Storage Gen2", "hecha": false },
              { "id": "dp900-3a-t4", "tipo": "tarea", "texto": "Explorar Microsoft OneLake en Fabric", "hecha": false },
              { "id": "dp900-3a-t5", "tipo": "tarea", "texto": "Explorar Azure Files", "hecha": false },
              { "id": "dp900-3a-t6", "tipo": "tarea", "texto": "Exploración de tablas de Azure", "hecha": false },
              { "id": "dp900-3a-t7", "tipo": "tarea", "texto": "Ejercicio: Exploración de Azure Storage", "hecha": false },
              { "id": "dp900-3a-t8", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-3a-t9", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          },
          {
            "id": "dp900-3b",
            "tipo": "carpeta",
            "nombre": "Exploración de los aspectos básicos de Azure Cosmos DB",
            "tareas": [
              { "id": "dp900-3b-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-3b-t2", "tipo": "tarea", "texto": "Descripción de Azure Cosmos DB", "hecha": false },
              { "id": "dp900-3b-t3", "tipo": "tarea", "texto": "Identificación de las API de Azure Cosmos DB", "hecha": false },
              { "id": "dp900-3b-t4", "tipo": "tarea", "texto": "Ejercicio: Exploración de Cosmos DB", "hecha": false },
              { "id": "dp900-3b-t5", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-3b-t6", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          }
        ]
      },
      {
        "id": "dp900-4",
        "tipo": "carpeta",
        "nombre": "Introducción al análisis de datos de Microsoft Azure en Azure",
        "tareas": [
          {
            "id": "dp900-4a",
            "tipo": "carpeta",
            "nombre": "Exploración de los aspectos básicos del análisis a gran escala",
            "tareas": [
              { "id": "dp900-4a-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-4a-t2", "tipo": "tarea", "texto": "Descripción de la arquitectura de un almacenamiento de datos", "hecha": false },
              { "id": "dp900-4a-t3", "tipo": "tarea", "texto": "Exploración de canalizaciones de ingesta de datos", "hecha": false }
            ]
          },
          {
            "id": "dp900-4b",
            "tipo": "carpeta",
            "nombre": "Exploración de los aspectos básicos del análisis en tiempo real",
            "tareas": [
              { "id": "dp900-4b-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-4b-t2", "tipo": "tarea", "texto": "Comprensión del procesamiento de flujos y por lotes", "hecha": false },
              { "id": "dp900-4b-t3", "tipo": "tarea", "texto": "Exploración de elementos comunes de la arquitectura del procesamiento de flujos", "hecha": false },
              { "id": "dp900-4b-t4", "tipo": "tarea", "texto": "Explorar la inteligencia en tiempo real de Microsoft Fabric", "hecha": false },
              { "id": "dp900-4b-t5", "tipo": "tarea", "texto": "Explorar el streaming estructurado de Apache Spark", "hecha": false },
              { "id": "dp900-4b-t6", "tipo": "tarea", "texto": "Ejercicio: Explorar la inteligencia en tiempo real de Microsoft Fabric", "hecha": false },
              { "id": "dp900-4b-t7", "tipo": "tarea", "texto": "Evaluación del módulo", "hecha": false },
              { "id": "dp900-4b-t8", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          },
          {
            "id": "dp900-4c",
            "tipo": "carpeta",
            "nombre": "Exploración de los aspectos básicos de la visualización de datos",
            "tareas": [
              { "id": "dp900-4c-t1", "tipo": "tarea", "texto": "Introducción", "hecha": false },
              { "id": "dp900-4c-t2", "tipo": "tarea", "texto": "Descripción de las herramientas y el flujo de trabajo de Power BI", "hecha": false },
              { "id": "dp900-4c-t3", "tipo": "tarea", "texto": "Descripción de los conceptos básicos del modelado de datos", "hecha": false },
              { "id": "dp900-4c-t4", "tipo": "tarea", "texto": "Descripción de consideraciones para la visualización de datos", "hecha": false },
              { "id": "dp900-4c-t5", "tipo": "tarea", "texto": "Ejercicio: Exploración de aspectos básicos de visualización de datos con Power BI", "hecha": false },
              { "id": "dp900-4c-t6", "tipo": "tarea", "texto": "Evaluación de módulos", "hecha": false },
              { "id": "dp900-4c-t7", "tipo": "tarea", "texto": "Resumen", "hecha": false }
            ]
          }
        ]
      }
    ]
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

// Añade proyectos nuevos definidos en PROYECTOS_RAIZ que aún no existan en lo guardado sin tocar ni borrar nada de lo que el usuario ya tenga
function migrarProyectosNuevos() {
  const proyectosGuardados = getProyectos();
  const idsGuardados = proyectosGuardados.map((p) => p.id);

  let huboNovedades = false;

  PROYECTOS_RAIZ.forEach((proyectoSemilla) => {
    if (!idsGuardados.includes(proyectoSemilla.id)) {
      proyectosGuardados.push(proyectoSemilla);
      huboNovedades = true;
    }
  });

  if (huboNovedades) {
    guardarProyectos(proyectosGuardados);
  }
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

//Mostrar perfil
function mostrarPerfil() {
  const proyectos = getProyectos();

  const proyectosTotales = proyectos.length;
  const proyectosActivos = proyectos.filter((p) => p.tareas.length > 0).length;

  let tareasTotales = 0;
  let tareasHechas = 0;

  proyectos.forEach((proyecto) => {
    const conteo = contarTareas(proyecto.tareas);
    tareasTotales += conteo.total;
    tareasHechas += conteo.hechas;
  });

  const tareasPendientes = tareasTotales - tareasHechas;
  const porcentaje = tareasTotales === 0 ? 0 : Math.round((tareasHechas / tareasTotales) * 100);

  document.getElementById('profile-percent').textContent = `${porcentaje}%`;

  const contenedorStats = document.getElementById('profile-stats');
  contenedorStats.innerHTML = `
    <div class="stat-card">
      <span class="stat-value">${proyectosTotales}</span>
      <span class="stat-label">Proyectos totales</span>
    </div>
    <div class="stat-card">
      <span class="stat-value">${proyectosActivos}</span>
      <span class="stat-label">Proyectos activos</span>
    </div>
    <div class="stat-card">
      <span class="stat-value">${tareasPendientes}</span>
      <span class="stat-label">Tareas pendientes</span>
    </div>
  `;

  const contenedorProgreso = document.getElementById('profile-project-progress');
  contenedorProgreso.innerHTML = proyectos.map((proyecto) => {
    const conteo = contarTareas(proyecto.tareas);
    const pct = conteo.total === 0 ? 0 : Math.round((conteo.hechas / conteo.total) * 100);

    return `
      <div class="project-progress-row">
        <span class="project-progress-name">${proyecto.nombre}</span>
        <div class="project-progress-bar">
          <div class="project-progress-fill" style="width: ${pct}%"></div>
        </div>
        <span class="project-progress-percent">${pct}%</span>
      </div>
    `;
  }).join('');
}

//Generar las cards 
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
    const colapsado = proyectosColapsados.has(item.id);
    const flechaClase = colapsado ? 'collapsed' : '';

    const subitemsHtml = item.tareas.map(generarItemHtml).join('');

    return `
      <li class="task task-folder ${claseHecha}" data-folder-id="${item.id}">
        <span class="task-text">
          ${item.nombre} <span class="folder-count">${conteo.hechas}/${conteo.total}</span>
          <span class="folder-meta">
            <svg class="folder-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
            </svg>
            <span class="add-item-wrapper">
              <button class="add-item-btn" data-folder-id="${item.id}">+</button>
              <div class="add-item-menu" data-folder-id="${item.id}" hidden>
                <button class="add-item-option" data-action="tarea" data-folder-id="${item.id}">Añadir tarea</button>
                <button class="add-item-option" data-action="carpeta" data-folder-id="${item.id}">Añadir subcarpeta</button>
              </div>
            </span>
            <button class="collapse-btn ${flechaClase}" data-folder-id="${item.id}">▾</button>
          </span>
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
      <ul class="subtask-list-new" ${colapsado ? 'hidden' : ''}>
        ${subitemsHtml}
      </ul>
    `;
  }
}

//Pintar los proyectos en pantaalla
function mostrarProyectos(){
  const projects = getProyectos();
  const contenedor = document.getElementById('project-list');

  contenedor.innerHTML = '';

  projects.forEach((proyecto) => {
    const conteo = contarTareas(proyecto.tareas);
    const porcentaje = conteo.total === 0 ? 0 : (conteo.hechas / conteo.total) * 100;
    const colapsado = proyectosColapsados.has(proyecto.id);
    const flechaClase = colapsado ? 'collapsed' : '';

    const listaTareasHtml = proyecto.tareas.map(generarItemHtml).join('');

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
            <button class="collapse-btn ${flechaClase}" data-project-id="${proyecto.id}">▾</button>
          </div>
          <div class="project-header-actions">
            <span class="project-count">${conteo.hechas} / ${conteo.total} tareas</span>
            <button class="project-menu-btn" data-project-id="${proyecto.id}">⋯</button>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill progress-green" style="width: ${porcentaje}%"></div>
        </div>
        <ul class="task-list" ${colapsado ? 'hidden' : ''}>
          ${listaTareasHtml}
        </ul>
      </article>
    `;

    contenedor.innerHTML += html;
  });
}

// ===== Funcionamiento de botones y =====
document.getElementById('project-list').addEventListener('click',(event) =>{

  const dentroDelMenuAdd = event.target.closest('.add-item-wrapper');
  if (dentroDelMenuAdd !== null) return;

  const botonCollapse = event.target.closest('.collapse-btn');
  if (botonCollapse !== null) return;

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

//Colapsar / abrir los proyectos
document.getElementById('project-list').addEventListener('click', (event) => {
  const boton = event.target.closest('.collapse-btn');
  if (boton === null) return;

  const id = boton.dataset.projectId || boton.dataset.folderId;
  if (proyectosColapsados.has(id)) {
    proyectosColapsados.delete(id);
  } else {
    proyectosColapsados.add(id);
  }

  mostrarProyectos();
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

function addSubcarpeta(folderId) {
  const nombre = prompt('Nombre de la subcarpeta:');

  if (nombre === null || nombre.trim() === '') {
    return;
  }

  const projects = getProyectos();

  function buscarCarpetaYAnadir(items) {
    items.forEach((item) => {
      if (item.tipo === 'carpeta' && item.id === folderId) {
        item.tareas.push({
          id: crypto.randomUUID(),
          tipo: 'carpeta',
          nombre: nombre.trim(),
          tareas: []
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
  const opcion = event.target.closest('.add-item-option');

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

  if (opcion !== null) {
    const accion = opcion.dataset.action;
    const projectId = opcion.dataset.projectId;
    const folderId = opcion.dataset.folderId;

    if (folderId) {
      if (accion === 'tarea') {
        addTareaEnCarpeta(folderId);
      } else if (accion === 'carpeta') {
        addSubcarpeta(folderId);
      }
    } else {
      if (accion === 'tarea') {
        addTarea(projectId);
      } else if (accion === 'carpeta') {
        addCarpeta(projectId);
      }
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

//Pintar eventos
function mostrarEventos(){
  const eventos = getEventos();
  const contenedor = document.getElementById('agenda-list');

  const eventosOrdenados = [...eventos].sort((a, b) => {
    if (a.hora === null) return 1;
    if (b.hora === null) return -1;
    return a.hora.localeCompare(b.hora);
  });

  contenedor.innerHTML = '';

  //Ordenar los eventos en función de la hora y 2 cards si hay o no hora definida
  eventosOrdenados.forEach((evento) => {
  const tieneAlarma = evento.alarma !== null;
  const iconoAlarma = tieneAlarma ? `<span class="alarm-icon">🔔</span>` : '';
  const estiloColor = evento.color ? `style="border-left-color: ${evento.color}"` : '';

  const menuHtml = `
    <div class="event-menu-wrapper">
      <button class="event-menu-btn" data-event-id="${evento.id}">⋯</button>
      <div class="event-menu" data-event-id="${evento.id}" hidden>
        <button class="event-menu-option" data-action="editar" data-event-id="${evento.id}">Editar</button>
        <button class="event-menu-option event-menu-option-danger" data-action="borrar" data-event-id="${evento.id}">Borrar</button>
      </div>
    </div>
  `;

  let html;

  if (evento.hora === null) {
    // Tarjeta sin fila de hora
    html = `
      <article class="event-card event-card-compact" data-event-id="${evento.id}" ${estiloColor}>
        <p class="event-title">${evento.titulo}</p>
        <div class="event-header-actions">
          ${iconoAlarma}
          ${menuHtml}
        </div>
      </article>
    `;
  } else {
    const textoDuracion = evento.duracion !== null ? evento.duracion : '';
    // Tarjeta con hora
    html = `
      <article class="event-card" data-event-id="${evento.id}" ${estiloColor}>
        <div class="event-card-header">
          <span class="event-time-group">
            <span class="event-time">${evento.hora}</span>
            <span class="event-duration">${textoDuracion}</span>
          </span>
          <div class="event-header-actions">
            ${iconoAlarma}
            ${menuHtml}
          </div>
        </div>
        <p class="event-title">${evento.titulo}</p>
      </article>
    `;
  }

  contenedor.innerHTML += html;
});

} 

document.getElementById('agenda-list').addEventListener('click', (event) => {
  const botonMenu = event.target.closest('.event-menu-btn');
  const opcion = event.target.closest('.event-menu-option');

  //Cerrar otros menús abiertos
  document.querySelectorAll('.event-menu').forEach((menu) => {
    if (!botonMenu || menu !== botonMenu.nextElementSibling) {
      menu.hidden = true;
    }
  });

  //Abrir menú interno se se pulso
  if (botonMenu !== null) {
    const menu = botonMenu.nextElementSibling;
    menu.hidden = !menu.hidden;
    return;
  }

  if (opcion !== null) {
    const accion = opcion.dataset.action;
    const eventId = opcion.dataset.eventId;
    if (accion === 'editar') {
      editarEvento(eventId);
    } else if (accion === 'borrar') {
      borrarEvento(eventId);
    }
  }
});

//Escuchador sobre todo el doc
document.addEventListener('click', (event) => {
  const dentroDelMenu = event.target.closest('.event-menu-wrapper');

  //Cerrar menú si el click fue fuera 
  if (dentroDelMenu === null) {
    document.querySelectorAll('.event-menu').forEach((menu) => {
      menu.hidden = true;
    });
  }
});

function borrarEvento(eventId) {
  const confirmado = confirm('¿Borrar este evento?');
  if (!confirmado) return;

  let eventos = getEventos();
  eventos = eventos.filter((evento) => evento.id !== eventId);

  saveEventos(eventos);
  mostrarEventos();
}

function editarEvento(eventId) {
  abrirModalEventoEditar(eventId);
}

const modal = document.getElementById('event-modal');
const inputSinHora = document.getElementById('event-sin-hora');
const campoHora = document.getElementById('event-hora-field');
const inputTieneAlarma = document.getElementById('event-tiene-alarma');
const campoAlarma = document.getElementById('event-alarma-field');
let eventoEditandoId = null;
const proyectosColapsados = new Set();

function abrirModalEventoNuevo(){
  document.getElementById('event-titulo').value = '';
  document.getElementById('event-hora').value = '';
  document.getElementById('event-duracion').value = '';
  document.getElementById('event-alarma').value = '';

  inputSinHora.checked = false;
  inputTieneAlarma.checked = false;
  campoHora.hidden = false;
  campoAlarma.hidden = true;

  document.querySelectorAll('.color-borde-evento').forEach((c) => c.classList.remove('selected'));
  document.querySelector('.color-borde-evento-vacio').classList.add('selected');

  eventoEditandoId = null;
  document.getElementById('event-modal-title').textContent = 'Nuevo evento';

  modal.hidden = false;
}

function abrirModalEventoEditar(eventId) {
  const eventos = getEventos();
  const evento = eventos.find((e) => e.id === eventId);

  if (evento === undefined) return;

  eventoEditandoId = eventId;
  document.getElementById('event-modal-title').textContent = 'Editar evento';

  document.getElementById('event-titulo').value = evento.titulo;
  document.getElementById('event-duracion').value = evento.duracion || '';

  const sinHora = evento.hora === null;
  inputSinHora.checked = sinHora;
  campoHora.hidden = sinHora;
  document.getElementById('event-hora').value = evento.hora || '';

  const tieneAlarma = evento.alarma !== null;
  inputTieneAlarma.checked = tieneAlarma;
  campoAlarma.hidden = !tieneAlarma;
  document.getElementById('event-alarma').value = evento.alarma || '';

  const colorGuardado = evento.color || '';
  document.querySelectorAll('.color-borde-evento').forEach((c) => {
    if (c.dataset.color === colorGuardado) {
      c.classList.add('selected');
    } else {
      c.classList.remove('selected');
    }
  });

  modal.hidden = false;
}

function cerrarModalEvento(){
  modal.hidden = true;
}

document.getElementById('add-event-btn').addEventListener('click', abrirModalEventoNuevo);
document.getElementById('event-modal-cancel').addEventListener('click', cerrarModalEvento);

//Cierra el modal si se hace clickfuera de el
modal.addEventListener('click',(event) =>{
  if (event.target === modal){
    cerrarModalEvento();
  }
});

//Mostar/ocultar el campo de hora
inputSinHora.addEventListener('change', ()=>{
  campoHora.hidden = inputSinHora.checked;
});

//Mostrar/ocultar el campo de alarma 
inputTieneAlarma.addEventListener('change', ()=>{
  campoAlarma.hidden = !inputTieneAlarma.checked;
});

//Elegir colores del evento
document.getElementById('event-color-swatches').addEventListener('click', (event) => {
  const colorBorde = event.target.closest('.color-borde-evento');
  if (colorBorde === null) return;

  document.querySelectorAll('.color-borde-evento').forEach((c) => c.classList.remove('selected'));
  colorBorde.classList.add('selected');
});

//escuchador guardar 
document.getElementById('event-modal-save').addEventListener('click', () =>{
  const titulo = document.getElementById('event-titulo').value.trim();

  if (titulo === ''){
    alert('El evento necesita un título')
    return;
  }

  const sinHora = inputSinHora.checked;
  const horaValor = document.getElementById('event-hora').value;

  if(!sinHora && horaValor === ''){
    alert('Pon una hora o marca "Sin hora fija"');
    return;
  }

  const hora = sinHora ? null :horaValor;

  const duracionTexto = document.getElementById('event-duracion').value.trim();
  const duracion = duracionTexto === '' ? null : duracionTexto;

  const tieneAlarma = inputTieneAlarma.checked;
  const alarmaValor = document.getElementById('event-alarma').value ;

  if (tieneAlarma && alarmaValor === '') {
    alert('Pon una hora para la alarma, o desmarca "Poner alarma".');
    return;
  }

  const alarma = tieneAlarma ? alarmaValor : null;
  const colorBordeSeleccionado = document.querySelector('.color-borde-evento.selected');
  const color = colorBordeSeleccionado ? colorBordeSeleccionado.dataset.color || null : null;

  const eventos = getEventos();

  if (eventoEditandoId === null) {
  eventos.push({
    id: crypto.randomUUID(),
    hora: hora,
    titulo: titulo,
    duracion: duracion,
    alarma: alarma,
    color: color
  });
} else {
  const evento = eventos.find((e) => e.id === eventoEditandoId);
  if (evento !== undefined) {
    evento.hora = hora;
    evento.titulo = titulo;
    evento.duracion = duracion;
    evento.alarma = alarma;
    evento.color = color;
  }
}

  saveEventos(eventos);
  mostrarEventos();
  cerrarModalEvento();
});


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
mostrarPerfil();