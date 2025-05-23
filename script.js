// Menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Búsqueda funcional
document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = this.querySelector('input').value;
    if(query.trim() !== '') {
        alert(`Cercant: ${query}`); // En un caso real, harías una petición AJAX o redirección
        // window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
});

// Efecto de carga
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);
});