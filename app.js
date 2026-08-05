// Fase 1: todavía sin lógica de datos (localStorage vendrá en el siguiente paso).
// Por ahora solo dejamos la navegación preparada para cuando existan
// las pantallas de Agenda y Perfil.

document.querySelectorAll('.nav-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const screen = btn.dataset.screen;
    if (screen !== 'proyectos') {
      console.log(`Pantalla "${screen}" aún no está construida.`);
    }
  });
});
