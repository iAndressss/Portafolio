// Abre y cierra modales de los proyectos
function openModal(proyecto) {
    const modal = document.getElementById(`modal-${proyecto}`);
    modal.style.display = "block";
}

function closeModal(proyecto) {
    const modal = document.getElementById(`modal-${proyecto}`);
    modal.style.display = "none";
}
