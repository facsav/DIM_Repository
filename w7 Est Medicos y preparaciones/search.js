// Buscador
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscadorito')) {
        const searchText = e.target.value.toLowerCase(); // Convertir el valor a minúsculas
        document.querySelectorAll('.estudios').forEach(estudios => {
            const estudiosText = estudios.textContent.toLowerCase(); // Convertir el texto del elemento a minúsculas
            estudiosText.includes(searchText)
                ? estudios.classList.remove('filtro')
                : estudios.classList.add('filtro');
        });
    }
});
