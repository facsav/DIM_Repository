// Buscador
document.addEventListener('keyup', e => {
    const searchText = e.target.value.toLowerCase(); // Convertir el valor a minúsculas
    const acordeones = document.querySelectorAll('.accordion-content');
    
    if (searchText === '') {
        acordeones.forEach(acordeon => {
            acordeon.style.display = 'block'; // Mostrar el acordeón
            const elementosAcordeon = acordeon.querySelectorAll('li');
            elementosAcordeon.forEach(estudios => {
                estudios.classList.remove('filtro'); // Remover la clase filtro
            });
        });
        return; // Salir de la función si no hay texto de búsqueda
    }
    
    acordeones.forEach(acordeon => {
        const elementosAcordeon = acordeon.querySelectorAll('li');
        const acordeonHeader = acordeon.previousElementSibling;
        const acordeonHeaderText = acordeonHeader.textContent.toLowerCase();
        let acordeonHasMatches = false;
        
        elementosAcordeon.forEach(estudios => {
            const estudiosText = estudios.textContent.toLowerCase();
            if (estudiosText.includes(searchText)) {
                estudios.classList.remove('filtro'); // Remover la clase filtro
                acordeon.style.display = 'block'; // Mostrar el acordeón
                acordeonHasMatches = true;
            } else {
                estudios.classList.add('filtro');
            }
        });
        
        if (acordeonHeaderText.includes(searchText) || acordeonHasMatches) {
            acordeonHeader.style.display = 'block'; // Mostrar el encabezado del acordeón
            acordeon.style.display = 'block'; // Mostrar el acordeón
        } else {
            acordeonHeader.style.display = 'none'; // Ocultar el encabezado del acordeón
            acordeon.style.display = 'none'; // Ocultar el acordeón
        }
    });
});
