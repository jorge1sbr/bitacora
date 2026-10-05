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

//===================== DIÁLOGOS ===================
// Sustituyen a prompt(), confirm() y alert(). Usan el modal #dialog-modal del HTML

const dialogo = document.getElementById('dialog-modal');
const dialogoTitulo = document.getElementById('dialog-titulo');
const dialogoMensaje = document.getElementById('dialog-mensaje');
const dialogoCampo = document.getElementById('dialog-campo');
const dialogoInput = document.getElementById('dialog-input');
const dialogoError = document.getElementById('dialog-error');
const dialogoOk = document.getElementById('dialog-ok');
const dialogoCancel = document.getElementById('dialog-cancel');

// Guarda las funciones aceptar/cancelar del diálogo abierto (null si no hay ninguno)
let dialogoAbierto = null;

// Muestra u oculta un mensaje de error dentro de un modal. Con mensaje vacío lo oculta
function setErrorModal(elementoError, mensaje){
  elementoError.textContent = mensaje;
  elementoError.hidden = mensaje === '';
}

// Abre el diálogo genérico y devuelve una promesa que se resuelve al aceptar o cancelar.
// conInput = true: pide un texto (resuelve el texto o null). conInput = false: pide confirmación (resuelve true o false)
function openDialogo({ titulo, mensaje = '', conInput, valorInicial = '', placeholder = '', textoBoton = 'Aceptar', peligro = false }){
  // Si por lo que sea ya había uno abierto, se cancela antes de abrir el nuevo
  if (dialogoAbierto !== null) dialogoAbierto.cancelar();

  dialogoTitulo.textContent = titulo;
  dialogoMensaje.textContent = mensaje;
  dialogoMensaje.hidden = mensaje === '';
  dialogoCampo.hidden = !conInput;
  dialogoInput.value = valorInicial;
  dialogoInput.placeholder = placeholder;
  dialogoOk.textContent = textoBoton;
  dialogoOk.classList.toggle('modal-btn-danger', peligro);
  setErrorModal(dialogoError, '');

  dialogo.hidden = false;
  if (conInput) {
    dialogoInput.focus();
    dialogoInput.select();
  } else {
    dialogoOk.focus();
  }

  return new Promise((resolve) => {
    function cerrar(resultado){
      dialogo.hidden = true;
      dialogoAbierto = null;
      resolve(resultado);
    }

    dialogoAbierto = {
      aceptar(){
        if (!conInput) {
          cerrar(true);
          return;
        }
        const texto = dialogoInput.value.trim();
        if (texto === '') {
          setErrorModal(dialogoError, 'Escribe algo antes de guardar.');
          dialogoInput.focus();
          return;
        }
        cerrar(texto);
      },
      cancelar(){
        cerrar(conInput ? null : false);
      }
    };
  });
}

// Pide un texto. Devuelve el texto sin espacios sobrantes, o null si se cancela
function askTexto({ titulo, valorInicial = '', placeholder = '' }){
  return openDialogo({ titulo, valorInicial, placeholder, conInput: true, textoBoton: 'Guardar' });
}

// Pide confirmación. Devuelve true si se acepta y false si se cancela
function confirmAccion({ mensaje, textoBoton = 'Aceptar', peligro = false }){
  return openDialogo({ titulo: mensaje, conInput: false, textoBoton, peligro });
}

dialogoOk.addEventListener('click', () => {
  if (dialogoAbierto !== null) dialogoAbierto.aceptar();
});

dialogoCancel.addEventListener('click', () => {
  if (dialogoAbierto !== null) dialogoAbierto.cancelar();
});

// Clic en el fondo oscuro (fuera de la caja) = cancelar
dialogo.addEventListener('click', (event) => {
  if (event.target === dialogo && dialogoAbierto !== null) dialogoAbierto.cancelar();
});

// Al escribir, se quita el aviso de campo vacío
dialogoInput.addEventListener('input', () => setErrorModal(dialogoError, ''));

//===================== MENÚS ⋯ ===================
// Mismo menú Editar / Borrar para proyectos, carpetas, tareas y eventos

function buildMenuHtml(tipo, id){
  return `
    <div class="item-menu-wrapper">
      <button class="item-menu-btn" aria-label="Opciones" aria-haspopup="true">⋯</button>
      <div class="item-menu" hidden>
        <button class="item-menu-option" data-action="editar" data-tipo="${tipo}" data-id="${id}">Editar</button>
        <button class="item-menu-option item-menu-option-danger" data-action="borrar" data-tipo="${tipo}" data-id="${id}">Borrar</button>
      </div>
    </div>
  `;
}

// Qué función se ejecuta según el tipo de elemento y la opción elegida
const ACCIONES_MENU = {
  proyecto: { editar: editProyecto, borrar: deleteProyecto },
  carpeta:  { editar: editCarpeta,  borrar: deleteCarpeta },
  tarea:    { editar: editTarea,    borrar: deleteTarea },
  evento:   { editar: editEvento,   borrar: deleteEvento }
};

// Cierra todos los menús (⋯ y +) menos el que se indique
function closeMenus(excepto = null){
  document.querySelectorAll('.item-menu, .add-item-menu').forEach((menu) => {
    if (menu !== excepto) menu.hidden = true;
  });
}

// Un solo escuchador para todos los menús ⋯ de la app (delegación de eventos)
document.addEventListener('click', (event) => {
  const boton = event.target.closest('.item-menu-btn');
  const opcion = event.target.closest('.item-menu-option');

  if (boton !== null) {
    const menu = boton.nextElementSibling;
    closeMenus(menu);
    menu.hidden = !menu.hidden;
    return;
  }

  // Cualquier otro clic (en una opción o fuera) cierra los menús ⋯
  document.querySelectorAll('.item-menu').forEach((menu) => { menu.hidden = true; });

  if (opcion !== null) {
    const { tipo, action, id } = opcion.dataset;
    ACCIONES_MENU[tipo][action](id);
  }
});

// Teclado: Enter confirma y Esc cancela el diálogo; Esc también cierra menús y el modal de evento
document.addEventListener('keydown', (event) => {
  if (dialogoAbierto !== null) {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialogoAbierto.cancelar();
    } else if (event.key === 'Enter' && document.activeElement !== dialogoCancel) {
      // preventDefault evita que el Enter haga además "clic" en el botón que tenga el foco
      event.preventDefault();
      dialogoAbierto.aceptar();
    }
    return;
  }

  if (event.key === 'Escape') {
    closeMenus();
    if (!modal.hidden) closeModalEvento();
  }
});

//===================== PROYECTOS ===================

//Proyectos guardados como texto en localStorage
function saveProyectos(projects){
  const texto = JSON.stringify(projects);
  localStorage.setItem('bitacora_projects', texto)

}

//Texto a json de nuevo
function getProyectos() {
  const texto = localStorage.getItem('bitacora_projects');

  if (texto == null){
    //Si no hay nada guardado todavía
    // Se devuelve una copia para no modificar nunca los datos de ejemplo
    saveProyectos(PROYECTOS_RAIZ);
    return structuredClone(PROYECTOS_RAIZ);
  }

  const projects = JSON.parse(texto)
  return projects;
}

// Fecha del primer uso de la app. La primera vez que se pide se guarda la fecha actual
function getFechaInicio() {
  let texto = localStorage.getItem('bitacora_desde');
  if (texto == null) {
    texto = new Date().toISOString();
    localStorage.setItem('bitacora_desde', texto);
  }
  return new Date(texto);
}

// true si la fecha (texto ISO) cae en el día de hoy, según la hora local
function isHoy(fechaIso) {
  if (!fechaIso) return false;
  return new Date(fechaIso).toDateString() === new Date().toDateString();
}

// Devuelve "1 tarea" / "3 tareas": número + palabra en singular o plural
function formatCantidad(numero, singular, plural) {
  return `${numero} ${numero === 1 ? singular : plural}`;
}

// Ids de proyectos y carpetas plegados (clave aparte, se mantiene al recargar)
function getPlegados() {
  const texto = localStorage.getItem('bitacora_plegados');
  if (texto == null) return [];
  return JSON.parse(texto);
}

function savePlegados() {
  localStorage.setItem('bitacora_plegados', JSON.stringify([...proyectosColapsados]));
}

// Guarda qué proyectos y carpetas están plegados. Se rellena con lo guardado al cargar
const proyectosColapsados = new Set(getPlegados());

// Ids de los proyectos de ejemplo que ya se añadieron alguna vez (clave aparte para no tocar bitacora_projects)
function getSemillas() {
  const texto = localStorage.getItem('bitacora_semillas');
  if (texto == null) return [];
  return JSON.parse(texto);
}

function saveSemillas(ids) {
  localStorage.setItem('bitacora_semillas', JSON.stringify(ids));
}

// Añade proyectos de PROYECTOS_RAIZ que nunca se hayan añadido, sin tocar ni borrar nada de lo que el usuario ya tenga.
// Si el usuario borra un proyecto de ejemplo, no vuelve a aparecer porque su id queda apuntado en bitacora_semillas
function migrateProyectosNuevos() {
  const proyectosGuardados = getProyectos();
  const idsGuardados = proyectosGuardados.map((p) => p.id);
  const semillasAplicadas = getSemillas();

  let huboNovedades = false;

  PROYECTOS_RAIZ.forEach((proyectoSemilla) => {
    const yaAplicada = semillasAplicadas.includes(proyectoSemilla.id);
    const yaExiste = idsGuardados.includes(proyectoSemilla.id);

    if (!yaAplicada && !yaExiste) {
      proyectosGuardados.push(structuredClone(proyectoSemilla));
      huboNovedades = true;
    }
    if (!yaAplicada) {
      semillasAplicadas.push(proyectoSemilla.id);
    }
  });

  if (huboNovedades) {
    saveProyectos(proyectosGuardados);
  }
  saveSemillas(semillasAplicadas);
}

// Cuenta tareas totales, hechas y completadas hoy de una lista, incluyendo las que están dentro de carpetas
function countTareas(items){
  let total = 0;
  let hechas = 0;
  let hoy = 0;

  items.forEach((item) =>{
    if(item.tipo === 'tarea'){
      total++;
      if(item.hecha){
        hechas++;
        // Las tareas antiguas no tienen fechaCompletada: cuentan como hechas pero no como "de hoy"
        if (isHoy(item.fechaCompletada)) hoy++;
      }
    } else if (item.tipo === 'carpeta'){
      const resultado = countTareas(item.tareas); // se llama a sí misma con las tareas de dentro de la carpeta
      total += resultado.total;
      hechas += resultado.hechas;
      hoy += resultado.hoy;
    }
  });
  return { total, hechas, hoy };
}

// Busca un item por id a cualquier profundidad.
// Sirve para la lista de proyectos o para cualquier lista de tareas: entra en todo lo que tenga "tareas" (proyectos y carpetas).
// Devuelve { item, lista } (el item y la lista que lo contiene) o null si no existe
function findItem(items, id){
  for (const item of items){
    if (item.id === id){
      return { item, lista: items };
    }
    if (Array.isArray(item.tareas)){
      const encontrado = findItem(item.tareas, id); // se llama a sí misma con lo que hay dentro
      if (encontrado !== null) return encontrado;
    }
  }
  return null;
}

// Quita un item por id a cualquier profundidad. Devuelve true si lo ha borrado
function removeItem(items, id){
  const encontrado = findItem(items, id);
  if (encontrado === null) return false;

  const posicion = encontrado.lista.indexOf(encontrado.item);
  encontrado.lista.splice(posicion, 1);
  return true;
}

//Mostrar perfil
function showPerfil() {
  const proyectos = getProyectos();

  const proyectosTotales = proyectos.length;
  const proyectosActivos = proyectos.filter((p) => p.tareas.length > 0).length;

  let tareasTotales = 0;
  let tareasHechas = 0;
  let tareasHoy = 0;

  proyectos.forEach((proyecto) => {
    const conteo = countTareas(proyecto.tareas);
    tareasTotales += conteo.total;
    tareasHechas += conteo.hechas;
    tareasHoy += conteo.hoy;
  });

  const tareasPendientes = tareasTotales - tareasHechas;
  const porcentaje = tareasTotales === 0 ? 0 : Math.round((tareasHechas / tareasTotales) * 100);

  // "Desde agosto 2026": mes en letra + año de la fecha del primer uso
  const fechaInicio = getFechaInicio();
  const mes = fechaInicio.toLocaleDateString('es-ES', { month: 'long' });
  document.getElementById('perfil-desde').textContent = `Desde ${mes} ${fechaInicio.getFullYear()}`;

  document.getElementById('profile-completadas-hoy').textContent =
    `${formatCantidad(tareasHoy, 'tarea completada', 'tareas completadas')} hoy`;
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
    const conteo = countTareas(proyecto.tareas);
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
function buildItemHtml(item){
  if(item.tipo === 'tarea'){
    const claseHecha = item.hecha ? 'done' : '';
    return `
      <li class="task ${claseHecha}" data-task-id="${item.id}">
        <span class="task-text">${item.texto}</span>
        <span class="task-actions">
          <span class="task-checkbox"></span>
          ${buildMenuHtml('tarea', item.id)}
        </span>
      </li>
    `;
  }

  if (item.tipo === 'carpeta'){
    const conteo = countTareas(item.tareas);
    const todoHecho = conteo.total > 0 && conteo.hechas == conteo.total;
    const claseHecha = todoHecho ? 'done' : '';
    const colapsado = proyectosColapsados.has(item.id);
    const flechaClase = colapsado ? 'collapsed' : '';

    const subitemsHtml = item.tareas.map(buildItemHtml).join('');

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
          ${buildMenuHtml('carpeta', item.id)}
        </span>
      </li>
      <ul class="subtask-list-new" ${colapsado ? 'hidden' : ''}>
        ${subitemsHtml}
      </ul>
    `;
  }
}

//Pintar los proyectos en pantaalla
function showProyectos(){
  const projects = getProyectos();
  const contenedor = document.getElementById('project-list');

  contenedor.innerHTML = '';

  // Subtítulo: tareas sin hacer de todos los proyectos
  let pendientes = 0;
  projects.forEach((proyecto) => {
    const conteo = countTareas(proyecto.tareas);
    pendientes += conteo.total - conteo.hechas;
  });
  document.getElementById('proyectos-pendientes').textContent =
    formatCantidad(pendientes, 'pendiente', 'pendientes');

  projects.forEach((proyecto) => {
    const conteo = countTareas(proyecto.tareas);
    const porcentaje = conteo.total === 0 ? 0 : (conteo.hechas / conteo.total) * 100;
    const colapsado = proyectosColapsados.has(proyecto.id);
    const flechaClase = colapsado ? 'collapsed' : '';

    const listaTareasHtml = proyecto.tareas.map(buildItemHtml).join('');

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
            ${buildMenuHtml('proyecto', proyecto.id)}
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
      toggleTarea(li.dataset.taskId);
    }
    // si es carpeta su estado se calcula solo
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

  savePlegados();
  showProyectos();
});

//Detectar clic en "+ Proyecto"
document.getElementById('add-project-btn').addEventListener('click', () => {

  addProyecto();
});

// Marca/desmarca una tarea como hecha
function toggleTarea(taskId){
  const projects = getProyectos();
  const encontrado = findItem(projects, taskId);
  if (encontrado === null || encontrado.item.tipo !== 'tarea') return;

  const tarea = encontrado.item;
  tarea.hecha = !tarea.hecha;

  // Al marcar se guarda cuándo; al desmarcar se borra la fecha
  if (tarea.hecha) {
    tarea.fechaCompletada = new Date().toISOString();
  } else {
    delete tarea.fechaCompletada;
  }

  saveProyectos(projects);
  showTodo();
}

//Editar texto de tareas
async function editTarea(taskId){
  const projects = getProyectos();
  const encontrado = findItem(projects, taskId);
  if (encontrado === null || encontrado.item.tipo !== 'tarea') return;

  const tarea = encontrado.item;
  const nuevoTexto = await askTexto({ titulo: 'Editar tarea', valorInicial: tarea.texto });
  if (nuevoTexto === null) return;

  tarea.texto = nuevoTexto;
  saveProyectos(projects);
  showTodo();
}

async function addTarea(projectId){
  const texto = await askTexto({ titulo: 'Nueva tarea', placeholder: 'ej. Repasar el módulo 3' });
  if (texto === null) return;

  const projects = getProyectos();

  projects.forEach((proyecto) => {
    if(proyecto.id === projectId){
      proyecto.tareas.push({
        id: crypto.randomUUID(),
        tipo: 'tarea',
        texto: texto,
        hecha: false
      });
    }
  });

  saveProyectos(projects);
  showTodo();
}

async function addTareaEnCarpeta(folderId) {
  const texto = await askTexto({ titulo: 'Nueva tarea', placeholder: 'ej. Repasar el módulo 3' });
  if (texto === null) return;

  const projects = getProyectos();
  const encontrado = findItem(projects, folderId);
  if (encontrado === null || encontrado.item.tipo !== 'carpeta') return;

  encontrado.item.tareas.push({
    id: crypto.randomUUID(),
    tipo: 'tarea',
    texto: texto,
    hecha: false
  });

  saveProyectos(projects);
  showTodo();
}

async function deleteTarea(taskId){
  const confirmado = await confirmAccion({ mensaje: '¿Borrar esta tarea?', textoBoton: 'Borrar', peligro: true });
  if(!confirmado) return;

  const projects = getProyectos();
  const borrado = removeItem(projects, taskId);
  if (!borrado) return;

  // Se guarda y se repinta una sola vez, fuera de cualquier bucle
  saveProyectos(projects);
  showTodo();
}

async function addCarpeta(projectId) {
  const nombre = await askTexto({ titulo: 'Nueva carpeta', placeholder: 'Nombre de la carpeta' });
  if (nombre === null) return;

  const projects = getProyectos();

  projects.forEach((proyecto) => {
    if (proyecto.id === projectId) {
      proyecto.tareas.push({
        id: crypto.randomUUID(),
        tipo: 'carpeta',
        nombre: nombre,
        tareas: []
      });
    }
  });

  saveProyectos(projects);
  showTodo();
}

async function addSubcarpeta(folderId) {
  const nombre = await askTexto({ titulo: 'Nueva subcarpeta', placeholder: 'Nombre de la subcarpeta' });
  if (nombre === null) return;

  const projects = getProyectos();
  const encontrado = findItem(projects, folderId);
  if (encontrado === null || encontrado.item.tipo !== 'carpeta') return;

  encontrado.item.tareas.push({
    id: crypto.randomUUID(),
    tipo: 'carpeta',
    nombre: nombre,
    tareas: []
  });

  saveProyectos(projects);
  showTodo();
}

async function deleteCarpeta(folderId) {
  const confirmado = await confirmAccion({ mensaje: '¿Borrar esta carpeta y todo lo que tiene dentro?', textoBoton: 'Borrar', peligro: true });
  if (!confirmado) return;

  const projects = getProyectos();
  const borrado = removeItem(projects, folderId);
  if (!borrado) return;

  saveProyectos(projects);
  showTodo();
}

async function addProyecto(){
  const nombre = await askTexto({ titulo: 'Nuevo proyecto', placeholder: 'Nombre del proyecto' });
  if (nombre === null) return;

  const projects = getProyectos();

  projects.push({
    id: crypto.randomUUID(),
    nombre: nombre,
    tareas: []
  });
  saveProyectos(projects);
  showTodo();
}

async function editProyecto(projectId){
  const proyectos = getProyectos();
  let proyectoEncontrado = null;

  proyectos.forEach((proyecto) =>{
    if(proyecto.id === projectId){
      proyectoEncontrado = proyecto;
    }
  });

  if (proyectoEncontrado === null) return;

  const nuevoNombre = await askTexto({ titulo: 'Renombrar proyecto', valorInicial: proyectoEncontrado.nombre });
  if (nuevoNombre === null) return;

  proyectoEncontrado.nombre = nuevoNombre;
  saveProyectos(proyectos);
  showTodo();
}

async function deleteProyecto(projectId){
  const confirmado = await confirmAccion({ mensaje: '¿Borrar este proyecto y todas sus tareas?', textoBoton: 'Borrar', peligro: true });
  if(!confirmado) return;

  let proyectos = getProyectos();
  proyectos = proyectos.filter((proyecto) => proyecto.id !== projectId);

  saveProyectos(proyectos);
  showTodo();
}

async function editCarpeta(folderId){
  const proyectos = getProyectos();
  const encontrado = findItem(proyectos, folderId);
  if (encontrado === null || encontrado.item.tipo !== 'carpeta') return;

  const carpetaEncontrada = encontrado.item;
  const nuevoNombre = await askTexto({ titulo: 'Renombrar carpeta', valorInicial: carpetaEncontrada.nombre });
  if (nuevoNombre === null) return;

  carpetaEncontrada.nombre = nuevoNombre;
  saveProyectos(proyectos);
  showTodo();
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
    return structuredClone(EVENTOS_RAIZ);
  }

  const eventos = JSON.parse(texto);
  return eventos;
}

//Pintar eventos
function showEventos(){
  const eventos = getEventos();
  const contenedor = document.getElementById('agenda-list');

  const eventosOrdenados = [...eventos].sort((a, b) => {
    if (a.hora === null) return 1;
    if (b.hora === null) return -1;
    return a.hora.localeCompare(b.hora);
  });

  contenedor.innerHTML = '';

  // Cabecera: "Hoy, 5 de agosto" y número real de eventos
  const fechaHoy = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
  document.getElementById('agenda-fecha').textContent = `Hoy, ${fechaHoy}`;
  document.getElementById('agenda-contador').textContent = formatCantidad(eventos.length, 'evento', 'eventos');

  //Ordenar los eventos en función de la hora y 2 cards si hay o no hora definida
  eventosOrdenados.forEach((evento) => {
  const tieneAlarma = evento.alarma !== null;
  const iconoAlarma = tieneAlarma ? `<span class="alarm-icon">🔔</span>` : '';
  const estiloColor = evento.color ? `style="border-left-color: ${evento.color}"` : '';

  const menuHtml = buildMenuHtml('evento', evento.id);

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

async function deleteEvento(eventId) {
  const confirmado = await confirmAccion({ mensaje: '¿Borrar este evento?', textoBoton: 'Borrar', peligro: true });
  if (!confirmado) return;

  let eventos = getEventos();
  eventos = eventos.filter((evento) => evento.id !== eventId);

  saveEventos(eventos);
  showTodo();
}

function editEvento(eventId) {
  openModalEventoEditar(eventId);
}

const modal = document.getElementById('event-modal');
const inputSinHora = document.getElementById('event-sin-hora');
const campoHora = document.getElementById('event-hora-field');
const inputTieneAlarma = document.getElementById('event-tiene-alarma');
const campoAlarma = document.getElementById('event-alarma-field');
const errorEvento = document.getElementById('event-modal-error');
let eventoEditandoId = null;

function openModalEventoNuevo(){
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
  setErrorModal(errorEvento, '');

  modal.hidden = false;
  document.getElementById('event-titulo').focus();
}

function openModalEventoEditar(eventId) {
  const eventos = getEventos();
  const evento = eventos.find((e) => e.id === eventId);

  if (evento === undefined) return;

  eventoEditandoId = eventId;
  document.getElementById('event-modal-title').textContent = 'Editar evento';
  setErrorModal(errorEvento, '');

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

function closeModalEvento(){
  modal.hidden = true;
}

document.getElementById('add-event-btn').addEventListener('click', openModalEventoNuevo);
document.getElementById('event-modal-cancel').addEventListener('click', closeModalEvento);

//Cierra el modal si se hace clickfuera de el
modal.addEventListener('click',(event) =>{
  if (event.target === modal){
    closeModalEvento();
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
    setErrorModal(errorEvento, 'El evento necesita un título.');
    document.getElementById('event-titulo').focus();
    return;
  }

  const sinHora = inputSinHora.checked;
  const horaValor = document.getElementById('event-hora').value;

  if(!sinHora && horaValor === ''){
    setErrorModal(errorEvento, 'Pon una hora o marca "Sin hora fija".');
    return;
  }

  const hora = sinHora ? null :horaValor;

  const duracionTexto = document.getElementById('event-duracion').value.trim();
  const duracion = duracionTexto === '' ? null : duracionTexto;

  const tieneAlarma = inputTieneAlarma.checked;
  const alarmaValor = document.getElementById('event-alarma').value ;

  if (tieneAlarma && alarmaValor === '') {
    setErrorModal(errorEvento, 'Pon una hora para la alarma o desmarca "Poner alarma".');
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
  showTodo();
  closeModalEvento();
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

// Repinta todas las pantallas desde los datos guardados. Se llama después de cualquier cambio,
// así Perfil y las cabeceras siempre están al día
function showTodo(){
  showProyectos();
  showEventos();
  showPerfil();
}

// Primero se añaden los proyectos de ejemplo que falten y después se pinta
migrateProyectosNuevos();
showTodo();