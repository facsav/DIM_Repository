const header = document.querySelector('header')
const footer = document.querySelector('footer')

function showImage(element, imageName) {
    var imageContainer = element.querySelector('.image-container');
    var imageElement = element.querySelector('img');
    imageElement.src = imageName;
    imageContainer.style.display = 'block';
}

function hideImage(element) {
    var imageContainer = element.querySelector('.image-container');
    var imageElement = element.querySelector('img');
    imageElement.src = '';
    imageContainer.style.display = 'none';
}

function highlightElement(element) {
    element.classList.add('highlighted');
    var arrowElement = element.querySelector('.highlight-arrow');
    arrowElement.style.display = 'block';
}

function unhighlightElement(element) {
    element.classList.remove('highlighted');
    var arrowElement = element.querySelector('.highlight-arrow');
    arrowElement.style.display = 'none';
}
// buscadorcito
// Acordiones
const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionContent = this.nextElementSibling;
                this.classList.toggle('active');
                if (accordionContent.style.display === 'block') {
                    accordionContent.style.display = 'none';
                } else {
                    accordionContent.style.display = 'block';
                }
            });
        });
// Buscador
document.addEventListener('click', e => {
    const buscador = document.getElementById('buscador');
    const elementosBuscador = document.querySelectorAll('.WebsTotales');
    const resultBox = document.querySelector('.result-box'); // Agregamos la referencia al div con clase result-box

    // Si el clic fue fuera del buscador y los elementos buscados, cierra los elementos
    if (!buscador.contains(e.target) && !elementosBuscador[0].contains(e.target)) {
        elementosBuscador.forEach(elemento => {
            elemento.classList.add('filtro');
            resultBox.style.display = 'none';
        });
        buscador.value = ''; // Limpiar el campo de búsqueda al cerrar
    }
    if (e.target.matches('#buscador')) {
    }
});

document.addEventListener('keyup', e => {
    const buscador = document.getElementById('buscador');
    const elementosBuscador = document.querySelectorAll('.WebsTotales');
    const resultBox = document.querySelector('.result-box'); // Agregamos la referencia al div con clase result-box

    if (e.target.matches('#buscador')) {
        const searchText = e.target.value.toLowerCase();
        let tieneCoincidencias = false; // Variable para rastrear si hay coincidencias

        elementosBuscador.forEach(elementosBuscadorito => {
            const elementosBuscadoritoText = elementosBuscadorito.textContent.toLowerCase();
            if (searchText === '') {
                elementosBuscadorito.classList.add('filtro');
            } else if (elementosBuscadoritoText.includes(searchText)) {
                elementosBuscadorito.classList.remove('filtro');
                tieneCoincidencias = true; // Hay al menos una coincidencia
            } else {
                elementosBuscadorito.classList.add('filtro');
            }
        });

        // Aplicamos el estilo al div result-box según si hay coincidencias o no
        if (tieneCoincidencias) {
            resultBox.style.display = 'block';
        } else {
            resultBox.style.display = 'none';
        }
    }
});
document.addEventListener('click', e => {
    const buscador = document.getElementById('buscador2');
    const elementosBuscador = document.querySelectorAll('.WebsTotales');
    const resultBox = document.querySelector('.result-box2'); // Agregamos la referencia al div con clase result-box

    // Si el clic fue fuera del buscador y los elementos buscados, cierra los elementos
    if (!buscador.contains(e.target) && !elementosBuscador[0].contains(e.target)) {
        elementosBuscador.forEach(elemento => {
            elemento.classList.add('filtro');
            resultBox.style.display = 'none';
        });
        buscador.value = ''; // Limpiar el campo de búsqueda al cerrar
    }
    if (e.target.matches('#buscador')) {
    }
});

document.addEventListener('keyup', e => {
    const buscador = document.getElementById('buscador2');
    const elementosBuscador = document.querySelectorAll('.WebsTotales');
    const resultBox = document.querySelector('.result-box2'); // Agregamos la referencia al div con clase result-box

    if (e.target.matches('#buscador2')) {
        const searchText = e.target.value.toLowerCase();
        let tieneCoincidencias = false; // Variable para rastrear si hay coincidencias

        elementosBuscador.forEach(elementosBuscadorito => {
            const elementosBuscadoritoText = elementosBuscadorito.textContent.toLowerCase();
            if (searchText === '') {
                elementosBuscadorito.classList.add('filtro');
            } else if (elementosBuscadoritoText.includes(searchText)) {
                elementosBuscadorito.classList.remove('filtro');
                tieneCoincidencias = true; // Hay al menos una coincidencia
            } else {
                elementosBuscadorito.classList.add('filtro');
            }
        });

        // Aplicamos el estilo al div result-box según si hay coincidencias o no
        if (tieneCoincidencias) {
            resultBox.style.display = 'block';
        } else {
            resultBox.style.display = 'none';
        }
    }
});




header.innerHTML=`
<div id="ante-nav">
    <img src="./assets/alerta.svg" alt="Exclamacion" style="margin-right: 5px;">
    <a href="./../w29 laboratorio/index.html">Turnos para Laboratorio</a><a href="./../w24 resonancia magnetica/index.html">/ Turnos para resonancia magnética</a>
    <img src="./assets/flecha.png" alt=">" style="margin-left: 5px;">
</div>
<nav class="navbar navbar-expand-lg">
    <div class="container">
    <a class="navbar-brand" href="https://www.dim.com.ar/">
        <img src="./img/dimLogo.svg" alt="">
    </a>
<!-- BUSCADOR CELU -->
    <div class="socioButtonBuscador d-lg-none" >
        <div class="row">
            <div class="input_container">
                <input type="search" class="buscador  form-control mb-3" id="buscador2" name="buscador2" placeholder="Buscador" style="font-size:12px;margin-top:2px; ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>

        </div>
        <div class="result-box2 filtro">
            <div class="container" id="elementos-buscador">
                <div class="row">
                    <div class="col-12" style="z-index: 1000;">
                        <ul>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w3 Comite de etica/index.html">Normas Operativas</a>
                                </div>
                            </li>
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w5 Educacion/index.html">Docencia</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./prguntaaaaaaaaaaaa">Preguntas Frecuentes</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w7 Est Medicos y preparaciones/index.html">Estudios Medicos y Preparaciones</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w8 Esp Medicas/index.html">Consultas y Especialidades Medicas</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w9 Odontologia/index.html">Odontologias</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w10 Cirugia/index.html">Cirugia</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w11 Cirujias esteticas/index.html">Medicina estética y cirugía</a> <p style="display: none;">Cirujia estetica</p>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w12 Oncologia/index.html">Oncologia</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w13 Medicina nuclear/index.html">Medicina Nuclear</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w14 Novedades/index.html">Novedades</a> 
                                <p style="display: none;">Viaje de Egresados - Chequeo de Salud Sexual - Expo de Salud - Nuevo estudio: Doppler Oftalmologico - Esteatosis hepatica - 
                                    Tratamiento de deglucion atipica en adultos - Dengue: Reforcemos los cuidados - Pie Scan - Nuevo tratamiento de Kinesiologia: MEP</p>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w15 Notas de salud/index.html">Notas de Salud</a> 
                                <p style="display: none;">DIM en los Medios - Cancer: controles y consejos para prevenir - 
                                El Instituto Alexander Fleming ahora en DIM Alta Complejidad - Orgasmo femenino: 10 claves para entenderlo mejor -
                                Paralisis de sueño, un episodio angustiante y frecuente: que es y cuando consultar - Dia de Prevencion del Suicidio - Cinco tipos de siesta y cual es la duracion ideal para que sea "energetica" 
                                Vitiligo: qué es, como se trata y el rol del impacto psicologico - Por la falta de uso de metodos de cuidado, hay mas casos de sifilis y herpes en los adolescentes</p>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w16 Pacientes Prioritarios/index.html">Servicio de Pacientes Prioritarios</a>
                                <p style="display: none;">
                                    Pacientes con diagnósticos que no pueden esperar como
                                    insuficiencia renal, insuficiencia cardíaca y/o insuficiencia
                                    hepática, enfermedades oncológicas, pacientes con
                                    discapacidad, entre otros
                                </p>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w17 Atencion sin turno previo/index.html">Atencion Sin Turno Previo</a>
                                </div>
                            </li>

                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w18 Coberturas Medicas/index.html">Coberturas medicas y validez de ordenes</a>
                                <p style="display: none;">Obras Sociales - Obra Social</p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w19 Mutual Amedim/index.html">Asociate a nuestro programa de beneficios</a>
                                <p style="display: none;">Contamos con un un programa de beneficios para que puedas acceder a los servicios de nuestros centros y a un paquete de descuentos exclusivos en los mejores comercios de la zona.
                                Beneficio plata - Beneficio oro - Beneficio platino - Descuentos - Descuento</p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w20 Nuestros centros y horarios/index.html">Nuestros Centros</a>
                                <p style="display: none;">DIM SEDE CENTRAL Belgrano 136, Ramos Mejia, Buenos Aires, Argentina - DIM ALTA COMPLEJIDAD Espora 18, Ramos Mejia, Buenos Aires, Argentina
                                    DIM ODONTOLOGIA Av. Rivadavia 14230, Ramos Mejia, Buenos Aires, Argentina - DIM KINESIOLOGIA Avellaneda 40, Ramos Mejia, Buenos Aires, Argentina
                                    DIM CARDIOVASCULAR Belgrano 139, Ramos Mejia, Buenos Aires, Argentina - DIM TRAUMATOLOGIA Monteagudo 50, Ramos Mejia, Buenos Aires, Argentina
                                    DIM RIVADAVIA Av. Rivadavia 14252, Ramos Mejia, Buenos Aires, Argentina - DIM CEPEM Machado 750, Moron, Buenos Aires, Argentina
                                    DIM MUJER Av. Rivadavia 14282, Ramos Mejia, Buenos Aires, Argentina - DIM MORON Av. Rivadavia 17624, Moron, Buenos Aires, Argentina
                                    DIM MORON TRAUMATOLOGIA Av. Rivadavia 17601, Moron, Buenos Aires, Argentina - DIM RAMOS NORTE Ardoino 640 (2da Rivadavia), Ramos Mejia, Buenos Aires, Argentina.
                                    Horarios de Atencion
                                </p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w21 Video consultas - Teleconsultas/index.html">Video Consulta - Teleconsultas</a>
                                <p style="display: none;">Tu médico de siempre, ahora en tu hogar. - Control tratamientos en curso. - sin salir de tu casa y a distancia
                                    Requisitos video consulta - Consulta remota - coberturas video consultas - especialidades para video consulta - 
                                    Servicio de médicos clínicos sin turno previo: - Servicio ginecología sin turno previo: - Servicio de traumatología sin turno previo:    
                                </p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w22 Receta digital/index.html">Receta Digital</a>
                                <p style="display: none;">Obtené tu orden médica sin salir de tu casa - formulario receta digital -
                                validez - tiempo de validez - </p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w23 Formulario/index.html">Formulario</a>
                                <p style="display: none;">Órdenes médicas digitales - Teleconsultas - Te pedimos por favor que completes este formulario para poder coordinar tu teleconsulta con un profesional,
                                    quien será el responsable de extender tu orden médica. La enviaremos dentro de las 72 horas hábiles desde que se realizó el pedido.
                                </p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w24 resonancia magnetica/index.html">Resonancia Magnética</a> 
                                <p style="display: none;">Resonancia Magnetica - Turno para resonancia magnetica </p>
                                </div>
                            </li>
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="#">Home</a> 
                                <p style="display: none;">home - inicio</p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w25 ver mas info/">Mas información</a>
                                <p style="display: none;">Mas informacion de resonancia magnetica - </p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w26 Est Medicos y prepaparciones/index.html">Estudios y preparaciones</a>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w29 laboratorio/index.html">Laboratorio</a>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w30 Estudios y preparaciones de laboratorio/index.html">Estudios y preparaciones de laboratorio</a>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w31 Medicina Laboral/index.html">Medicina Laboral</a>
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w32 contacto/index.html">Contactanos</a>
                                <p style="display: none;">Contactar - Consultas frecuentes</p>                                                
                                </div>
                            </li>
                            
                            <li>
                                <div class="cont-buscadorito filtro WebsTotales"><a href="./w33 Recursos humanos/index.html">Recursos humanos</a>
                                <p style="display: none;">Trabaja en DIM y cambiá vidas - Sumate a nuestro equipo - Trabajar en DIM                     
                                </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
        <div id="navbar-pc" class="d-lg-flex d-none align-items-center ">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <!-- PORTAL DE TURNOS -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portal de turnos
                    </a>
                    <ul class="dropdown-menu" style="margin-top: 28px;">
                        <li onmouseover="showImage(this, './img/dropdown/portal.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="https://portal.dim.com.ar/">Ingresar al Portal Online</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/estudios-med.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href='./w7 Est Medicos y preparaciones/index.html'>Estudios Médicos</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/labo.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href='./w30 Estudios y preparaciones de laboratorio/index.html'>Turnos de Laboratorio</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/video-consultas.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href='./w21 Video consultas - Teleconsultas/index.html'>Video consultas</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/recetas.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScNOlUwItS20X3NHwUCNknXgeaDv5yz2qeOga916vCCrLEZIw/viewform">Recetas digitales</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/turnos-med.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="https://portal.dim.com.ar/">Turnos Médicos</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/atencion-sin.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w17 Atencion sin turno previo/index.html">Atención sin turno previo</a>
                            <div class="image-container" style="height:258px; padding-top:1em;">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                    </ul>
                </li>

                <!-- ESPECIALIDADES -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Especialidades
                    </a>
                    <ul class="dropdown-menu" style="margin-top: 28px;">
                        <li onmouseover="showImage(this, './img/dropdown/est-prep.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w26 Est Medicos y prepaparciones/index.html">Estudios y especialidades</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/odontologia.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w9 Odontologia/index.html">Odontología</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/cirujias.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w10 Cirugia/index.html">Cirugías</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/oncologia.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w12 Oncologia/index.html">Oncología</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/nuclear.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w13 Medicina nuclear/index.html">Medicina nuclear</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/resonancia.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w24 resonancia magnetica/index.html">Resonancia magnética</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/tomografia.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w27 tomografia multicorte/index.html">Tomografía computada</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/laboratorio.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w29 laboratorio/index.html">Laboratorio</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                    </ul>
                </li>

                <!-- SOBRE DIM -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sobre DIM
                    </a>
                    <ul class="dropdown-menu" style="margin-top: 28px;">
                        <li onmouseover="showImage(this, './img/dropdown/centro.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w20 Nuestros centros y horarios/index.html">Centros de Salud DIM</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/coberturas.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./../w18 Coberturas Medicas/index.html">Coberturas que atendemos</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/preguntas.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w25 ver mas info/index.html">Preguntas frecuentes</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/novedades.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w14 Novedades/index.html">Novedades</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/nosotros.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w2 Conocenos/index.html">Sobre nosotros</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/laburar.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w33 Recursos humanos/index.html">Quiero trabajar en DIM </a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/socio.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w19 Mutual Amedim/index.html">Quiero hacerme socio</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                        <li onmouseover="showImage(this, './img/dropdown/contacto.png'); highlightElement(this)" onmouseout="hideImage(this); unhighlightElement(this)">
                            <a class="dropdown-item" href="./w32 contacto/index.html">Contacto</a>
                            <div class="image-container">
                                <img class="image-hidden" src="" alt="">
                            </div>
                            <div class="highlight-arrow"></div>
                        </li>
                    </ul>
                    
                </li>
            </ul>

            <div id="buttons">
                <!-- Botones  -->
<!-- BUSCADOR HOME LG -->
                <div class="socioButtonBuscador" >
                    <div class="row">
                        <div class="input_container">
                            <input type="search" class="buscador  form-control mb-3" id="buscador" name="buscador" placeholder="Buscador" style="font-size:12px;margin-top:2px; ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>

                    </div>
                    <div class="result-box filtro" >
                        <div class="container" id="elementos-buscador">
                            <div class="row">
                                <div class="col-12" >
                                    <ul>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w3 Comite de etica/index.html">Normas Operativas</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w5 Educacion/index.html">Docencia</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./prguntaaaaaaaaaaaa">Preguntas Frecuentes</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w7 Est Medicos y preparaciones/index.html">Estudios Medicos y Preparaciones</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w8 Esp Medicas/index.html">Consultas y Especialidades Medicas</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w9 Odontologia/index.html">Odontologias</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w10 Cirugia/index.html">Cirugia</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w11 Cirujias esteticas/index.html">Medicina estética y cirugía</a> <p style="display: none;">Cirujia estetica</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w12 Oncologia/index.html">Oncologia</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w13 Medicina nuclear/index.html">Medicina Nuclear</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w14 Novedades/index.html">Novedades</a> 
                                            <p style="display: none;">Viaje de Egresados - Chequeo de Salud Sexual - Expo de Salud - Nuevo estudio: Doppler Oftalmologico - Esteatosis hepatica - 
                                                Tratamiento de deglucion atipica en adultos - Dengue: Reforcemos los cuidados - Pie Scan - Nuevo tratamiento de Kinesiologia: MEP</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w15 Notas de salud/index.html">Notas de Salud</a> 
                                            <p style="display: none;">DIM en los Medios - Cancer: controles y consejos para prevenir - 
                                            El Instituto Alexander Fleming ahora en DIM Alta Complejidad - Orgasmo femenino: 10 claves para entenderlo mejor -
                                            Paralisis de sueño, un episodio angustiante y frecuente: que es y cuando consultar - Dia de Prevencion del Suicidio - Cinco tipos de siesta y cual es la duracion ideal para que sea "energetica" 
                                            Vitiligo: qué es, como se trata y el rol del impacto psicologico - Por la falta de uso de metodos de cuidado, hay mas casos de sifilis y herpes en los adolescentes</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w16 Pacientes Prioritarios/index.html">Servicio de Pacientes Prioritarios</a>
                                            <p style="display: none;">
                                                Pacientes con diagnósticos que no pueden esperar como
                                                insuficiencia renal, insuficiencia cardíaca y/o insuficiencia
                                                hepática, enfermedades oncológicas, pacientes con
                                                discapacidad, entre otros
                                            </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w17 Atencion sin turno previo/index.html">Atencion Sin Turno Previo</a>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w18 Coberturas Medicas/index.html">Coberturas medicas y validez de ordenes</a>
                                            <p style="display: none;">Obras Sociales - Obra Social</p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w19 Mutual Amedim/index.html">Asociate a nuestro programa de beneficios</a>
                                            <p style="display: none;">Contamos con un un programa de beneficios para que puedas acceder a los servicios de nuestros centros y a un paquete de descuentos exclusivos en los mejores comercios de la zona.
                                            Beneficio plata - Beneficio oro - Beneficio platino - Descuentos - Descuento</p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w20 Nuestros centros y horarios/index.html">Nuestros Centros</a>
                                            <p style="display: none;">DIM SEDE CENTRAL Belgrano 136, Ramos Mejia, Buenos Aires, Argentina - DIM ALTA COMPLEJIDAD Espora 18, Ramos Mejia, Buenos Aires, Argentina
                                                DIM ODONTOLOGIA Av. Rivadavia 14230, Ramos Mejia, Buenos Aires, Argentina - DIM KINESIOLOGIA Avellaneda 40, Ramos Mejia, Buenos Aires, Argentina
                                                DIM CARDIOVASCULAR Belgrano 139, Ramos Mejia, Buenos Aires, Argentina - DIM TRAUMATOLOGIA Monteagudo 50, Ramos Mejia, Buenos Aires, Argentina
                                                DIM RIVADAVIA Av. Rivadavia 14252, Ramos Mejia, Buenos Aires, Argentina - DIM CEPEM Machado 750, Moron, Buenos Aires, Argentina
                                                DIM MUJER Av. Rivadavia 14282, Ramos Mejia, Buenos Aires, Argentina - DIM MORON Av. Rivadavia 17624, Moron, Buenos Aires, Argentina
                                                DIM MORON TRAUMATOLOGIA Av. Rivadavia 17601, Moron, Buenos Aires, Argentina - DIM RAMOS NORTE Ardoino 640 (2da Rivadavia), Ramos Mejia, Buenos Aires, Argentina.
                                                Horarios de Atencion
                                            </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w21 Video consultas - Teleconsultas/index.html">Video Consulta - Teleconsultas</a>
                                            <p style="display: none;">Tu médico de siempre, ahora en tu hogar. - Control tratamientos en curso. - sin salir de tu casa y a distancia
                                                Requisitos video consulta - Consulta remota - coberturas video consultas - especialidades para video consulta - 
                                                Servicio de médicos clínicos sin turno previo: - Servicio ginecología sin turno previo: - Servicio de traumatología sin turno previo:    
                                            </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w22 Receta digital/index.html">Receta Digital</a>
                                            <p style="display: none;">Obtené tu orden médica sin salir de tu casa - formulario receta digital -
                                            validez - tiempo de validez - </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w23 Formulario/index.html">Formulario</a>
                                            <p style="display: none;">Órdenes médicas digitales - Teleconsultas - Te pedimos por favor que completes este formulario para poder coordinar tu teleconsulta con un profesional,
                                                quien será el responsable de extender tu orden médica. La enviaremos dentro de las 72 horas hábiles desde que se realizó el pedido.
                                            </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w24 resonancia magnetica/index.html">Resonancia Magnética</a> 
                                            <p style="display: none;">Resonancia Magnetica - Turno para resonancia magnetica </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w25 ver mas info/">Mas información</a>
                                            <p style="display: none;">Mas informacion de resonancia magnetica - </p>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w26 Est Medicos y prepaparciones/index.html">Estudios y preparaciones</a>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w29 laboratorio/index.html">Laboratorio</a>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w30 Estudios y preparaciones de laboratorio/index.html">Estudios y preparaciones de laboratorio</a>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w31 Medicina Laboral/index.html">Medicina Laboral</a>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w32 contacto/index.html">Contactanos</a>
                                            <p style="display: none;">Contactar - Consultas frecuentes</p>                                                
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div class="cont-buscadorito filtro WebsTotales"><a href="./w33 Recursos humanos/index.html">Recursos humanos</a>
                                            <p style="display: none;">Trabaja en DIM y cambiá vidas - Sumate a nuestro equipo - Trabajar en DIM                     
                                            </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




                <button class="turnos" type="button"> 
                    <a href="https://portal.dim.com.ar/">
                        <span>
                            <img src="./img/portalTurnos.svg" alt="">
                        </span> 
                        Portal de Turnos</a>
                </button>

            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">


            <div class="d-lg-none">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <br>
                    <!-- Lo mas buscado -->
                    <li class="nav-item dropdown hoverA-Stroke">

                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="display: inline-block;">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="hover-path" d="M15.8965 6.966L16.0048 7.31963H16.3746H22.2492C22.7569 7.35862 23.1193 7.49031 23.3725 7.67905C23.6223 7.86528 23.8041 8.1352 23.9039 8.52426C24.0907 9.25274 23.8592 9.97086 23.0087 10.7222L18.5575 13.9973L18.2766 14.204L18.3735 14.539L20.2467 21.0142L20.2507 21.0282L20.2556 21.042C20.4127 21.4861 20.423 21.8513 20.3308 22.1591C20.2385 22.4673 20.0275 22.7707 19.6481 23.0626L19.6478 23.0629C19.2761 23.3493 18.9108 23.4816 18.5445 23.493C18.1785 23.5044 17.7682 23.3963 17.3055 23.1285L12.7554 19.9425L12.4695 19.7423L12.183 19.9417L7.52652 23.1829C6.43726 23.6686 5.69003 23.5664 5.13708 23.0826L5.13674 23.0823C4.8181 22.804 4.62846 22.5085 4.53848 22.1971C4.44829 21.8849 4.44785 21.5204 4.56587 21.0887C4.56606 21.088 4.56625 21.0874 4.56644 21.0867L6.42523 14.5366L6.51839 14.2083L6.24662 14.0019L1.9321 10.7253C1.09296 9.97887 0.846729 9.25344 1.01507 8.51053L1.01517 8.51009C1.10328 8.11962 1.27496 7.85385 1.51249 7.67219C1.75412 7.48738 2.10704 7.35696 2.61171 7.31963H8.44862H8.8164L8.92593 6.96853L10.5935 1.62302C10.7628 1.23331 10.9948 0.964469 11.2805 0.787892C11.5748 0.606018 11.9621 0.5 12.4686 0.5C12.9753 0.5 13.3509 0.606926 13.6278 0.785539C13.8976 0.959649 14.1125 1.22681 14.2604 1.62191L15.8965 6.966ZM2.91303 8.71364H1.421L2.61175 9.61267L8.2562 13.8743L5.99209 21.4253L5.5714 22.8283L6.76217 21.9754L12.5172 17.8532L18.2435 22.0049L19.4638 22.8896L19.0142 21.451L16.6466 13.8737L22.3545 9.61312L23.5611 8.71243H22.0554H15.2572L12.9713 2.23365L12.5018 0.902783L12.0287 2.23242L9.72299 8.71364H2.91543H2.91303Z" fill="white" stroke="white"/>
                            </svg>
                        </span>
                            Lo más buscado          
                        </a>
                        <ul class="dropdown-menu backgroundNav-Phone">
                            <li><a class="dropdown-item" href="https://portal.dim.com.ar/">Portal de turnos online</a></li>
                            <li><a class="dropdown-item" href="./w22 Receta digital/index.html">Receta digital</a></li>
                            <li><a class="dropdown-item" href="https://apps.apple.com/ar/app/dim-salud-turnos-y-resultados/id1627335644">Aplicación móvil Iphone</a></li>
                            <li><a class="dropdown-item" href="https://play.google.com/store/apps/details?id=ar.com.dim.portalturnos">Aplicación móvil Android</a></li>
                            <li><a class="dropdown-item" href="https://portal.dim.com.ar/">Buscar un médico</a></li>
                            <li><a class="dropdown-item" href="./w19 Mutual Amedim/index.html">Quiero ser socio</a></li>
                            <li><a class="dropdown-item" href="./w19 Mutual Amedim/index.html">Programas de Beneficios DIM</a></li>
                        </ul>
                    </li>

                    <hr>

                    <!-- Nuestros servicios -->
                    <li class="nav-item dropdown hoverA-noStroke">

                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="display: inline-block;">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="hover-path" fill-rule="evenodd" clip-rule="evenodd" d="M20.8648 7.2C21.5368 7.2 22.0648 7.716 22.0648 8.4C22.0648 8.71826 21.9384 9.02348 21.7134 9.24853C21.4883 9.47357 21.1831 9.6 20.8648 9.6C20.1808 9.6 19.6648 9.06 19.6648 8.4C19.6648 7.716 20.1808 7.2 20.8648 7.2ZM2.86484 0C1.26524 0 0.464844 0.8004 0.464844 2.4V10.8C0.464844 14.352 3.09284 17.4 6.63284 17.892C7.37684 21.504 10.5688 24 14.2648 24C15.2892 24 16.3034 23.7982 17.2498 23.4063C18.1961 23.0143 19.056 22.4397 19.7803 21.7154C20.5046 20.9911 21.0791 20.1313 21.4711 19.1849C21.8631 18.2386 22.0648 17.2243 22.0648 16.2V11.772C23.4568 11.268 24.4648 9.948 24.4648 8.4C24.4648 7.44522 24.0856 6.52955 23.4104 5.85442C22.7353 5.17929 21.8196 4.8 20.8648 4.8C19.9101 4.8 18.9944 5.17929 18.3193 5.85442C17.6441 6.52955 17.2648 7.44522 17.2648 8.4C17.2648 9.948 18.2728 11.28 19.6648 11.772V16.092C19.6648 19.092 17.2648 21.492 14.2648 21.492C11.8648 21.492 9.84884 20.04 9.12884 17.88C12.4648 17.16 14.8648 14.16 14.8648 10.8V2.4C14.8648 0.8004 14.0644 0 12.4648 0H11.2648C10.4644 0 10.0648 0.3996 10.0648 1.2C10.0648 2.0004 10.4644 2.4 11.2648 2.4H12.4648V10.8C12.4648 12.073 11.9591 13.2939 11.059 14.1941C10.1588 15.0943 8.93788 15.6 7.66484 15.6C6.3918 15.6 5.17091 15.0943 4.27073 14.1941C3.37056 13.2939 2.86484 12.073 2.86484 10.8V2.4H4.06484C4.86524 2.4 5.26484 2.0004 5.26484 1.2C5.26484 0.3996 4.86524 0 4.06484 0H2.86484Z" fill="white"/>
                            </svg>                                        
                        </span>
                            Nuestros servicios
                        </a>
                        <ul class="dropdown-menu backgroundNav-Phone">
                            <li><a class="dropdown-item" href="./w8 Esp Medicas/index.html">Especialidades médicas</a></li>
                            <li><a class="dropdown-item" href="./w7 Est Medicos y preparaciones/index.html">Estudios médicos</a></li>
                            <li><a class="dropdown-item" href="https://portal.dim.com.ar/">Turnos médicos</a></li>
                            <li><a class="dropdown-item" href="./w13 Medicina nuclear/index.html">Medicina Nuclear</a></li>
                            <li><a class="dropdown-item" href="./w24 resonancia magnetica/index.html">Resonancia Magnética</a></li>
                            <li><a class="dropdown-item" href="./w27 tomografia multicorte/index.html">Tomografía Computada</a></li>
                            <li><a class="dropdown-item" href="./w29 laboratorio/index.html">Laboratorio</a></li>
                            <li><a class="dropdown-item" href="./w11 Cirujias esteticas/index.html">Cirugía y Medicina estética</a></li>
                            <li><a class="dropdown-item" href="./w17 Atencion sin turno previo/index.html">Atención sin turno previo</a></li>
                            <li><a class="dropdown-item" href="./w21 Video consultas - Teleconsultas/index.html">Video consultas</a></li>
                        </ul>
                    </li>

                    <hr>
                    <!-- Sobre nosotros -->
                    <li class="nav-item dropdown hoverA-noStroke">

                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="display: inline-block;margin-bottom:-8px">
                        <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.85639 25.8288C-4.34726 14.8727 15.1238 14.8943 9.53397 0C10.3994 11.4502 -3.74314 22.5434 5.51554 4.10766C3.90403 5.65108 2.50145 7.42423 1.34778 9.37657C-2.99308 17.2024 4.03917 22.4388 9.86658 25.8144L9.85639 25.8288ZM10.0974 25.7603C13.5388 21.5697 20.7577 18.14 15.7279 5.20399C23.1505 14.0648 19.3866 21.2415 10.0974 25.7567V25.7603ZM9.37785 23.9355C3.26875 16.3621 14.8896 15.0097 13.1825 3.15918C18.1546 15.8464 7.31772 13.7042 9.37785 23.9319V23.9355Z" fill="white"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.3364 0.573266L17.2617 0.432617C17.9711 0.584085 18.7449 1.19356 19.2981 1.64796L22.8617 5.88545L23.2011 6.52378L23.4149 6.96375L23.6186 7.41455L23.812 7.87617L23.9919 8.3486L24.1582 8.83185C24.2363 9.07709 24.3075 9.32232 24.3788 9.55313L24.5383 10.1879L24.6503 10.7216L24.7657 11.3275L24.8506 11.9405L24.9117 12.55L24.9456 13.1198C24.9456 13.3579 24.9456 13.5959 24.9456 13.8411L24.9354 14.2811V14.3027C24.9354 14.1476 24.9354 13.989 24.9354 13.8339V13.3074V13.0008L24.9117 12.6799L24.8811 12.3517L24.8438 12.0271L24.7657 11.7133L24.7216 11.4176L22.7294 6.19199L22.5766 6.05134L22.5325 6.00807L22.4816 5.95758L22.4239 5.89266C22.2406 5.67989 22.0845 5.45269 21.908 5.22909L21.4295 4.58716L21.2021 4.29865L20.9543 3.99211L20.693 3.67835L20.4181 3.3682L20.1432 3.07248L17.4111 0.645393L17.3364 0.573266Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.1626 1.84933L19.0947 1.70508C19.5156 1.77721 20.0722 2.36144 20.3776 2.64634L22.8892 5.87044L23.2285 6.50876L23.5679 7.18676L23.8734 7.90804L24.1517 8.65456L24.3995 9.43353L24.6099 10.2414L24.766 11.0708L24.9086 11.9003L24.9832 12.6216L25.0002 12.8704V13.1337V13.4078C25.0002 13.5496 25.0002 13.6915 25.0002 13.8333V14.5546C24.9714 15.1991 24.9045 15.8411 24.7999 16.4768L24.7422 16.7509V16.6571C24.8675 15.724 24.9333 14.783 24.9391 13.8405V13.8405L23.7478 8.29392C23.4945 7.9533 23.2675 7.59149 23.069 7.21201L22.4785 6.1301L21.613 4.78131L19.2373 1.93589L19.1626 1.84933Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.5319 2.30455L19.7694 2.48126L20.0715 2.73731L20.4312 3.07631L20.8351 3.49826L21.2729 4.00315L21.7108 4.59099L22.1757 5.26177L22.6373 6.0155L23.0683 6.8053L23.462 7.66001L23.8184 8.57963L24.1273 9.55335L24.3818 10.574L24.5719 11.6342L24.694 12.7161L24.7382 13.8269V14.3715L24.7144 14.9124L24.6737 15.4498L24.616 15.9799L24.5413 16.5028L24.4497 17.0185L24.3411 17.527L24.2189 18.0319L23.9508 18.6811L24.0865 18.2591L24.2766 17.4766L24.4157 16.7553L24.5142 16.0773L24.5786 15.4498L24.616 14.8691V14.3354V13.8341L24.5481 12.7522L24.4259 11.865C24.1191 10.3607 23.6416 8.90145 23.0039 7.51936L22.3251 6.20664L22.1859 5.96141L22.0502 5.71257L21.8974 5.46734L21.7413 5.22571L21.5852 4.9913C21.4426 4.7701 21.2922 4.54891 21.1338 4.32772L20.0138 2.9537C19.7942 2.73125 19.5921 2.49001 19.4097 2.23242L19.5285 2.30094L19.5319 2.30455ZM23.944 18.6811L22.8308 21.3967L23.5096 19.9866L23.6826 19.5358L23.8354 19.0922L23.9576 18.6847L23.944 18.6811ZM22.8308 21.3967L22.6475 21.8439L22.5626 21.9629L22.8308 21.3967Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M21.0891 3.92444L21.218 4.05427L21.3707 4.22017L21.5472 4.42573L21.7441 4.66736L21.9545 4.94865L22.1785 5.26601L22.4127 5.62665L22.6537 6.01975L23.6108 7.93473L23.9501 8.85796L24.2522 9.85692L24.5 10.9388C24.595 11.5122 24.6731 12.0676 24.7409 12.6483L24.7986 13.842V14.6822L24.7341 15.5081L24.6357 16.3412L24.4932 17.167L24.3099 17.9749L24.0859 18.7755L23.828 19.5436L23.5395 20.2866L23.4377 20.521L23.3155 20.7914L23.1729 21.0908L23.0134 21.4081L22.8403 21.7363L22.6571 22.0645L22.467 22.3855L22.2735 22.6956L21.3877 23.9073L21.3606 23.9326L21.4149 23.8496C21.7101 23.4421 21.9715 23.0815 22.2328 22.6631L23.01 21.2783L23.6209 19.8718L24.0384 18.6132L24.3133 17.5024L24.483 16.5395C24.5968 15.6445 24.6388 14.7409 24.6086 13.8384L24.5746 13.3443L24.5271 12.8971C24.4243 12.1494 24.285 11.4079 24.1097 10.6756L23.8246 9.64054L23.7228 9.31236L23.5938 8.91927L23.4377 8.47929L23.2544 8.01046L23.0541 7.53081L22.8369 7.05838L22.6163 6.60758L22.3889 6.20006L21.4726 4.6349C21.2866 4.38454 21.1208 4.11792 20.9771 3.83789L21.0891 3.92444Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M21.597 4.8286L21.7497 5.03056L21.8549 5.17842L21.9635 5.33349L22.0721 5.49578L22.2384 5.75544L22.3504 5.93936L22.4658 6.1305L23.4093 8.03466L23.7487 8.94347L24.044 9.92801L24.2816 10.9775C24.3732 11.5401 24.4479 12.0882 24.5124 12.658L24.5667 13.8301L24.5327 15.0166L24.4105 16.1995L24.2001 17.3643L23.9082 18.5004L23.5417 19.5823L23.1073 20.6245L22.605 21.6379L22.0517 22.5395L21.6003 23.2031L21.0845 23.7584L21.2576 23.5385L21.9805 22.489L22.8052 21.0032L23.4093 19.6544L23.7996 18.4499L24.0576 17.368L24.2205 16.4014C24.3151 15.5458 24.3548 14.6843 24.3393 13.8229L24.0542 11.2984L23.9456 10.7647C23.8777 10.4762 23.8064 10.1877 23.7317 9.89916L23.2328 8.34842L23.036 7.84713L22.8256 7.34945C22.6525 6.98881 22.4862 6.60654 22.2859 6.23869L22.2622 6.19181L22.2384 6.14853L21.5596 4.97646C21.4429 4.82359 21.3522 4.6503 21.2915 4.46436L21.6037 4.82499L21.597 4.8286ZM21.098 23.762L20.2292 24.6997L20.9962 23.8883L21.098 23.7584V23.762ZM20.2292 24.6997L19.2483 25.76H19.2212L20.2292 24.6997Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M22.7883 6.75412L23.07 7.3095L23.3754 7.96947C23.5349 8.36256 23.6809 8.74845 23.8234 9.14875L24.0916 10.054L24.3189 11.0421L24.4886 12.124C24.5429 12.7046 24.5803 13.2636 24.604 13.8442L24.5769 14.9839L24.4683 16.1343L24.2748 17.2847L23.9965 18.4207L23.6469 19.5243L23.2125 20.6062L22.7068 21.6376L22.14 22.6077L21.9194 22.9431L21.6954 23.2713L21.4646 23.5887L21.2271 23.8988L20.9861 24.1981L20.7417 24.4867L20.494 24.7643L20.2428 25.0312L19.676 25.4748L19.8593 25.2981L20.1987 24.9374L20.5381 24.5768C21.0904 23.938 21.5964 23.2556 22.0518 22.5356L22.8052 21.1688C23.8487 18.885 24.3697 16.3717 24.3257 13.8334L24.1968 12.142L24.0169 10.9952L23.9049 10.4579L23.7725 9.9097L23.6232 9.37595C23.501 8.97204 23.3686 8.57173 23.2261 8.17143L22.7306 6.90559C22.6354 6.73645 22.5688 6.55093 22.5337 6.35742L22.7951 6.75773L22.7883 6.75412ZM19.676 25.4748L18.2098 26.6469L19.3774 25.7525L19.676 25.4748ZM18.2098 26.6469L17.5311 27.195H17.5039L18.2098 26.6469Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M22.6314 6.78283L22.9708 7.47165L23.3102 8.22538L23.6055 9.04042L23.8668 9.90955L24.0705 10.8184L24.2334 11.7849L24.3386 12.791L24.3793 13.8261L24.342 14.9909L24.2164 16.1522L24.006 17.3098L23.7175 18.4278L23.351 19.5097L22.9165 20.5411L22.4244 21.5149L21.8814 22.4237L21.5827 22.8672L21.2773 23.2928L20.965 23.6967L20.646 24.079L20.3066 24.4396L19.9672 24.7822L19.6278 25.1032L19.2884 25.4025L18.053 26.3762C17.7853 26.5818 17.4974 26.7559 17.1943 26.8956L17.2758 26.8234L18.1446 26.214L18.4162 26.012L18.6945 25.7956L18.9762 25.5648L19.4004 25.2042L19.7669 24.8435L20.1063 24.4829L20.4254 24.1223L20.724 23.7616C21.0804 23.3108 21.4028 22.8492 21.7422 22.3624L22.3973 21.2155L22.9063 20.1336L23.2966 19.0806L23.6428 18.0311L23.8634 17.0213L24.0162 16.0007L24.0874 14.9477L24.1078 13.8333V13.4726L24.0908 13.112L24.0637 12.7514L24.0263 12.3907L23.9822 12.0049L23.9245 11.6118L23.8634 11.179L23.7854 10.7643L23.5682 9.83382L23.4086 9.32893L23.2423 8.79518L23.0693 8.27226C22.8996 7.82146 22.7299 7.37788 22.5194 6.9379L22.2106 6.27794L22.0714 5.975C22.0542 5.94464 22.0459 5.90945 22.0477 5.87402L22.1291 5.96058C22.1936 6.04352 22.2479 6.13368 22.3056 6.22384L22.6314 6.78283Z" fill="#ED6F00"/>
                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M23.5513 8.85383L23.7278 9.37676L23.8907 9.93214L24.04 10.5164L24.169 11.1295L24.2776 11.7714L24.3591 12.4386L24.4269 13.1274L24.4507 13.8487L24.4269 14.9558L24.3149 16.0918L24.1215 17.2242L23.8432 18.3458L23.4868 19.4277L23.0354 20.5024L22.5331 21.5158L21.9697 22.4751L21.4912 23.1964L20.9855 23.8599L20.456 24.4802L19.9096 25.0537L19.336 25.5622L18.7896 26.0382L18.2296 26.4637L17.673 26.846L15.433 27.9784L15.3481 28.0001L15.3753 27.982L15.4398 27.946L16.2577 27.5529L16.5564 27.4014L16.8618 27.2355L17.1741 27.0552L17.4897 26.8604L17.8088 26.6513L18.5249 26.1284L19.1697 25.591L19.7467 25.05L20.266 24.5091L20.7309 23.9717L21.145 23.4416L21.5183 22.9187L21.8577 22.403L22.4245 21.4004L22.8861 20.4195L23.2628 19.4421L23.5717 18.454L23.8194 17.4262L24.0095 16.3443L24.1317 15.147L24.169 13.8414L24.1419 13.0372L24.0876 12.316L24.0265 11.7858L23.945 11.2304L23.8466 10.6751L23.7312 10.1341C23.6395 9.74821 23.5377 9.36594 23.4257 8.98366L23.161 8.11813C23.1259 8.0328 23.1074 7.94079 23.1067 7.84766L23.256 8.10371C23.3646 8.35615 23.4563 8.60499 23.5513 8.85383Z" fill="#ED6F00"/>
                        </svg>
                        </span>
                            Sobre nosotros
                        </a>
                        <ul class="dropdown-menu backgroundNav-Phone">
                            <li><a class="dropdown-item" href="./w20 Nuestros centros y horarios/index.html">Nuestros centros</a></li>
                            <li><a class="dropdown-item" href="./w2 Conocenos/index.html">Conocenos</a></li>
                            <li><a class="dropdown-item" href="./w14 Novedades/index.html">Novedades</a></li>
                            <li><a class="dropdown-item" href="https://www.dim.com.ar/cedim.php">Centros de Investigaciones Médicas</a></li>
                            <li><a class="dropdown-item" href="./w3 Comite de etica/index.html">Comité Ética</a></li>
                            <li><a class="dropdown-item" href="./w5 Educacion/index.html">Docencia</a></li>
                            <li><a class="dropdown-item" href="https://www.fundaciondim.com.ar/">Fundación</a></li>
                            <li><a class="dropdown-item" href="./w33 Recursos humanos/index.html">Quiero trabajar en DIM</a></li>
                            <li><a class="dropdown-item" href="./../comiteTica.pdf">Política de privacidad</a></li>
                            <li><a class="dropdown-item" href="./../comiteTica.pdf">Términos y condiciones</a></li>

                        </ul>
                    </li>

                    <hr>
                    <!-- DIM Centros de salud -->
                    <li class="nav-item dropdown hoverA-noStroke">

                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="display: inline-block;">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="hover-path" d="M6.17913 10.4844C6.17913 10.7852 6.40234 11 6.71484 11H8.50056C8.76842 11 9.03627 10.7852 9.03627 10.4844V8.76562C9.03627 8.50781 8.76842 8.25 8.50056 8.25H6.71484C6.40234 8.25 6.17913 8.50781 6.17913 8.76562V10.4844ZM12.4291 11H14.2148C14.4827 11 14.7506 10.7852 14.7506 10.4844V8.76562C14.7506 8.50781 14.4827 8.25 14.2148 8.25H12.4291C12.1166 8.25 11.8934 8.50781 11.8934 8.76562V10.4844C11.8934 10.7852 12.1166 11 12.4291 11ZM9.03627 14.6094V12.8906C9.03627 12.6328 8.76842 12.375 8.50056 12.375H6.71484C6.40234 12.375 6.17913 12.6328 6.17913 12.8906V14.6094C6.17913 14.9102 6.40234 15.125 6.71484 15.125H8.50056C8.76842 15.125 9.03627 14.9102 9.03627 14.6094ZM12.4291 15.125H14.2148C14.4827 15.125 14.7506 14.9102 14.7506 14.6094V12.8906C14.7506 12.6328 14.4827 12.375 14.2148 12.375H12.4291C12.1166 12.375 11.8934 12.6328 11.8934 12.8906V14.6094C11.8934 14.9102 12.1166 15.125 12.4291 15.125ZM20.4648 20.4531C20.4648 20.1953 20.197 19.9375 19.9291 19.9375H19.0363V3.69531C19.0363 3.17969 18.5452 2.75 17.9648 2.75H14.0363V1.03125C14.0363 0.472656 13.5452 0 12.9648 0H7.96484C7.33984 0 6.89342 0.472656 6.89342 1.03125V2.75H2.9202C2.33984 2.75 1.84877 3.17969 1.84877 3.69531V19.9375H1.00056C0.688058 19.9375 0.464844 20.1953 0.464844 20.4531V22H20.4648V20.4531ZM3.99163 19.8945V4.8125H6.89342V5.84375C6.89342 6.44531 7.33984 6.875 7.96484 6.875H12.9648C13.5452 6.875 14.0363 6.44531 14.0363 5.84375V4.8125H16.8934V19.8945H11.8934V17.0156C11.8934 16.7578 11.6256 16.5 11.3577 16.5H9.57199C9.25949 16.5 9.03627 16.7578 9.03627 17.0156V19.8945H3.99163ZM12.3398 2.75C12.4738 2.75 12.6077 2.87891 12.6077 3.00781V3.86719C12.6077 4.03906 12.4738 4.125 12.3398 4.125H11.1791V5.24219C11.1791 5.41406 11.0452 5.5 10.9113 5.5H10.0184C9.83984 5.5 9.75056 5.41406 9.75056 5.24219V4.125H8.58984C8.41127 4.125 8.32199 4.03906 8.32199 3.86719V3.00781C8.32199 2.87891 8.41127 2.75 8.58984 2.75H9.75056V1.63281C9.75056 1.50391 9.83984 1.375 10.0184 1.375H10.9113C11.0452 1.375 11.1791 1.50391 11.1791 1.63281V2.75H12.3398Z" fill="white"/>
                            </svg>                                       
                        </span>
                            DIM Centros de salud
                        </a>
                        <ul class="dropdown-menu backgroundNav-Phone">
                            <li><a class="dropdown-item" href="../w20 Nuestros centros y horarios/index.html">Centros y horarios</a></li>
                            <li><a class="dropdown-item" href="../w29 laboratorio/index.html">Laboratorios</a></li>

                        </ul>
                    </li>

                    <hr>
                    <!-- Ayuda -->
                    <li class="nav-item dropdown hoverA-noStroke">

                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="display: inline-block;">
                            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="hover-path" d="M11.6323 21.0912C11.0076 20.9009 10.3924 20.6323 9.78657 20.2857L9.71975 20.2471C7.63587 19.0334 5.66417 16.8928 3.80465 13.8253C3.41422 13.1812 3.06344 12.5535 2.75232 11.9422C1.1384 8.77129 0.591722 6.04136 1.11213 3.75293C1.35315 2.69309 2.113 1.84374 3.13751 1.46637L3.42329 1.37535L4.59658 1.05817C5.6132 0.78335 6.70818 1.23801 7.25445 2.13125L7.37049 2.34504L8.35931 4.41483C8.65115 5.02572 8.64981 5.7032 8.38829 6.2738C8.33621 6.38747 8.2738 6.4969 8.20133 6.60071C8.15254 6.6706 8.09919 6.73794 8.04136 6.80232L7.87364 6.96933L5.98916 8.64844C6.13256 9.83546 6.51617 10.9777 7.14 12.0751C7.67472 13.0157 8.31506 13.7987 9.06101 14.4241L9.44278 14.7237L12.067 13.9347C12.9314 13.6748 13.8851 13.9497 14.5017 14.616L14.6612 14.8073L16.0423 16.6504C16.6901 17.5149 16.6493 18.666 15.9719 19.427L15.8171 19.5838L14.9388 20.3864C14.068 21.182 12.8102 21.4502 11.6323 21.0912Z" fill="#F5F5F5"/>
                            </svg>                                       
                        </span>
                            Ayuda
                        </a>
                        <ul class="dropdown-menu backgroundNav-Phone">
                        <li><a class="dropdown-item" href="./w6 Preguntas frecuentes/index.html">Preguntas frecuentes</a></li>
                        <li><a class="dropdown-item" href="./w7 Est Medicos y preparaciones/index.html">Estudios y preparaciones</a></li>
                            <li><a class="dropdown-item" href="./w18 Coberturas Medicas/index.html">Coberturas que atendemos</a></li>
                            <li><a class="dropdown-item" href="./w32 contacto/index.html">¿Tenés dudas? Escribinos</a></li>
                            <li>
                                <div class="text-start">
                                    <ul id="footer-mid-contacto">
                                        <li class="wpp">
                                            Whatsapp Oficial 
                                            <a href="https://wa.link/4di2gk" style="color:var(--orange);">11-6648-5555</a>
                                        </li>
                                        <li class="central">
                                            Central de Turnos <a href="tel:+5491555548888" style="color:var(--orange);">5554-8888</a> 
                                            Lun-Vie 8 a 20 h y Sáb 8 a 13 h
                                        </li>
                                        <li class="horarios">
                                            <a href="../w20 Nuestros centros y horarios/index.html" style="color:var(--orange);">Ver horarios de nuestras sedes</a>
                                        </li>
                                        <li class="mails">
                                            <a href="mailto:turnos@dim.com.ar" style="color:var(--orange);">turnos@dim.com.ar</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                
                <div class="d-flex flex-column align-items-center">

                    <div id="collapse-buttons">
                        <button class="turnos" type="button"> 
                            <a href="https://portal.dim.com.ar/">
                                <span>
                                    <img src="./img/portalTurnos.svg" alt="">
                                </span> 
                                Portal de Turnos</a>
                        </button>
                    </div>

                    <div id="collapse-tiendas">
                        <a style="color: transparent;" href="https://apps.apple.com/ar/app/dim-salud-turnos-y-resultados/id1627335644">
                            <img src="./img/appStore.svg" alt="">
                        </a>
                        <a style="color: transparent;" href="https://play.google.com/store/apps/details?id=ar.com.dim.portalturnos">

                            <img src="./img/gPlay.svg" alt="">
                        </a>
                    </div>

                    <h5>© DIM Salud todos los derechos reservados desde 1964.</h5>

    
                </div>
            </div>


        </div>

    </div>
</nav>
<div id="message">
    <a href="https://wa.link/4di2gk">
        <svg class="d-none d-lg-block" width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30.0767" cy="30.0767" r="30.0767" fill="#FF6600"/>
            <path class="paaa" d="M22.6114 31.8688L17.0586 36.3578V18.4016C17.0586 18.1039 17.1768 17.8185 17.3873 17.608C17.5978 17.3975 17.8832 17.2793 18.1809 17.2793H36.1371C36.4348 17.2793 36.7202 17.3975 36.9307 17.608C37.1411 17.8185 37.2594 18.1039 37.2594 18.4016V30.7465C37.2594 31.0441 37.1411 31.3296 36.9307 31.54C36.7202 31.7505 36.4348 31.8688 36.1371 31.8688H22.6114Z" stroke="white" stroke-width="3.3668" stroke-linecap="round" stroke-linejoin="round"/>
            <path  class="paaa" d="M23.793 31.8734V37.4848C23.793 37.7824 23.9112 38.0679 24.1217 38.2783C24.3321 38.4888 24.6176 38.607 24.9152 38.607H38.4409L43.9938 43.0961V25.1398C43.9938 24.8422 43.8755 24.5567 43.6651 24.3463C43.4546 24.1358 43.1691 24.0176 42.8715 24.0176H37.2602" stroke="white" stroke-width="3.3668" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="paaa" d="M51.424 61.1782L35.815 56.6096C35.1097 56.4032 34.9376 55.4831 35.5205 55.0357L51.891 42.4723C52.4963 42.0078 53.3685 42.4622 53.3346 43.2244L52.5732 60.3564C52.5473 60.9381 51.983 61.3417 51.424 61.1782Z" fill="#FF6600"/>
        </svg>                                
    </a>
    <a href="https://wa.link/4di2gk">
        <svg class="d-lg-none" width="96" height="101" viewBox="0 0 96 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_5502_22510)">
            <path d="M37.3879 70.5418L38.2692 71.0639C41.9704 73.2606 46.2139 74.4223 50.5416 74.4245H50.5509C63.841 74.4245 74.6572 63.6109 74.6627 50.3197C74.665 43.879 72.1595 37.8224 67.6069 33.2664C63.0542 28.7105 57.0009 26.2003 50.5601 26.1976C37.2597 26.1976 26.4434 37.0101 26.4385 50.3002C26.4365 54.8544 27.711 59.2903 30.1245 63.1284L30.6983 64.0402L28.262 72.9346L37.3879 70.5418ZM21.2969 79.8247L25.4127 64.797C22.8742 60.3992 21.5387 55.4097 21.5403 50.2985C21.5468 34.308 34.5598 21.2988 50.5509 21.2988C58.3109 21.3026 65.5943 24.3225 71.0723 29.8043C76.5486 35.286 79.5642 42.5722 79.5614 50.3219C79.5544 66.3113 66.5392 79.3227 50.5509 79.3227C50.5497 79.3227 50.5521 79.3227 50.5509 79.3227H50.5384C45.6836 79.3207 40.9131 78.1029 36.6756 75.7921L21.2969 79.8247Z" fill="#B3B3B3"/>
            </g>
            <path d="M21 79.5259L25.1158 64.4982C22.5773 60.1004 21.2418 55.1109 21.2434 49.9997C21.2499 34.0092 34.2629 21 50.254 21C58.014 21.0038 65.2975 24.0237 70.7754 29.5055C76.2518 34.9872 79.2673 42.2734 79.2646 50.0231C79.2575 66.0125 66.2423 79.0239 50.254 79.0239C50.2528 79.0239 50.2552 79.0239 50.254 79.0239H50.2415C45.3867 79.0219 40.6162 77.8041 36.3787 75.4932L21 79.5259Z" fill="white"/>
            <path d="M50.2662 25.9004C36.9658 25.9004 26.1494 36.7128 26.1445 50.0029C26.1426 54.5572 27.4171 58.993 29.8306 62.8312L30.4044 63.743L27.9679 72.6374L37.094 70.2445L37.9752 70.7667C41.6765 72.9635 45.92 74.125 50.2477 74.1272H50.2568C63.5469 74.1272 74.3633 63.3137 74.3687 50.0225C74.3711 43.5817 71.8656 37.5251 67.313 32.9692C62.7603 28.4133 56.707 25.9031 50.2662 25.9004Z" fill="url(#paint0_linear_5502_22510)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0061 37.8767C42.4628 36.6699 41.8912 36.6455 41.375 36.6243C40.9523 36.6063 40.4687 36.6074 39.9857 36.6074C39.5021 36.6074 38.717 36.7889 38.053 37.5143C37.3885 38.2396 35.5156 39.993 35.5156 43.5595C35.5156 47.126 38.1133 50.5718 38.4752 51.0559C38.8376 51.5395 43.4897 59.0919 50.8579 61.9972C56.9808 64.4118 58.2267 63.9315 59.5563 63.8109C60.8853 63.6902 63.8449 62.0575 64.4485 60.365C65.0527 58.6725 65.0527 57.2223 64.8718 56.9191C64.6903 56.6165 64.2073 56.4356 63.4819 56.0731C62.7571 55.7107 59.1933 53.9568 58.5288 53.715C57.8643 53.4733 57.3813 53.3526 56.8977 54.078C56.4147 54.8034 55.0264 56.4356 54.6032 56.9191C54.1805 57.4032 53.7577 57.4636 53.0324 57.1011C52.3076 56.7377 49.9728 55.9732 47.2034 53.5037C45.0485 51.5824 43.594 49.2097 43.1707 48.4843C42.748 47.759 43.1256 47.3667 43.4891 47.0053C43.8146 46.6804 44.214 46.1588 44.5769 45.7356C44.9382 45.3123 45.0594 45.0102 45.3006 44.5272C45.5424 44.043 45.4218 43.6198 45.2403 43.2574C45.0594 42.895 43.6505 39.31 43.0061 37.8767Z" fill="white"/>
            <defs>
            <filter id="filter0_f_5502_22510" x="0.901201" y="0.903154" width="99.057" height="99.3167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="10.1978" result="effect1_foregroundBlur_5502_22510"/>
            </filter>
            <linearGradient id="paint0_linear_5502_22510" x1="49.7657" y1="28.7945" x2="50.0103" y2="70.0071" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57D163"/>
            <stop offset="1" stop-color="#23B33A"/>
            </linearGradient>
            </defs>
        </svg>
    </a>
</div>
<div class="valorizacion">
    <a id="cerrarValorizacion">Envía tu valorización!</a>
    <h4>¿Te a resultado de utilidad nuestra pagina web?</h4>
    <div class="form-group">
      <div class="custom-container">
        <input type="range" class="form-range" min="0" max="10" step="1" id="customRange2">
        <div class="custom-labels">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
    </div>
  </div>
<style>

.valorizacion{
    display: block;
    width: 320px;
    height: 200px;
    position: absolute;
    top: 60vh;
    right: 3vw;
    z-index: 100;
    background: #f6f6f6;
    transform: scaleX(0%);
    transform-origin: right;
    animation: aparicion 350ms linear;
    /* -------Cuando aparece la ventana de valoracion------ */
    animation-delay: 18s;
    animation-fill-mode: forwards;
    padding: 1.5em 1em;
    border: 1px solid rgba(61, 61, 61, 1);
    border-radius: 16px;
  }
.valorizacion::before{
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  background-color: #f6f6f6;
  top: 10px;
  border-top: 1px solid rgba(61,61,61,1);
  right: -24px;
  display: block;
}
@media(max-width:800px){
  .valorizacion{
    right: 4vw;
  }
}
@media(max-width:550px){
  .valorizacion{
    right: 2em;
  }
}
@media(max-width:414px){
  .valorizacion{
    right: 30px;
  }
}
.valorizacion a{
    font-size: 16px;
    font-weight: 500;
    color: black;
    text-decoration: none;
}
.valorizacion h4{
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

@keyframes aparicion{
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
.valorizacion .form-group {
    position: relative;
}
.valorizacion .custom-container {
    position: absolute;
    left: 0;
    right: 0;
}
.valorizacion .form-range {
    width: 100%;
}
.valorizacion .custom-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 10px;
    font-weight: bold;
    color: black;
}
.valorizacion .custom-labels span {
    position: relative;
    transform: translateX(15%);
}
.valorizacion a:active .valorizacion{
    display: none;
}
/* color del deslizante */
.valorizacion .form-range::-webkit-slider-thumb {
    background-color: var(--orange);
}
.valorizacion .form-range::-moz-range-thumb {
    background-color: var(--orange);
}
.valorizacion .form-range::-ms-thumb {
    background-color: var(--orange);
}
.valorizacion .form-range::-webkit-slider-thumb:active {
  background-color: #fdc6a1;
}
.valorizacion .form-range::-moz-range-thumb:active {
  background-color: #fdc6a1;
}
.valorizacion .form-range::-ms-thumb:active {
  background-color: #fdc6a1;
}
/* color barra */
.valorizacion .form-range::-webkit-slider-runnable-track {
    background-color: rgba( 1, 1, 1, 0.1);
}
.valorizacion .form-range::-moz-range-track {
    background-color: rgba( 1, 1, 1, 0.1);
}
.valorizacion .form-range::-ms-track {
    background-color: rgba( 1, 1, 1, 0.1);
}
/* -----------Buscador-------- */
.socioButtonBuscador{
    border-radius: 7px;
    border: solid 2px;
    border-color: var(--blue);
    background-color: white;
    color: var(--blue);
    height: 47px;
    width: 200px;
    font-weight: 500;
    transition: background 0.2s ease;

}

.socioButtonBuscador svg{
    margin-top: 5%;
    margin-left: 5%;
}
.socioButtonBuscador .row{
    display: flex;
    align-items: center;
    padding: 5px 10px;
    display: grid;
    place-items: center;
    width: 210px;
}
@media(max-width:415px){
    .socioButtonBuscador{
        width: 180px;
    }
    .socioButtonBuscador .row{
        width:190px;
    }
}
@media(max-width:395px){
    .socioButtonBuscador{
        width: 160px;
    }
    .socioButtonBuscador .row{
        width:170px;
    }
}
@media(max-width:375px){
    .socioButtonBuscador{
        width: 150px;
    }
    .socioButtonBuscador .row{
        width:160px;
    }
}
@media(max-width:365px){
    .socioButtonBuscador{
        width: 140px;
    }
    .socioButtonBuscador .row{
        width:150px;
    }
}
@media(max-width:355px){
    .socioButtonBuscador{
        width: 130px;
    }
    .socioButtonBuscador .row{
        width:140px;
    }
}

.socioButtonBuscador .row .input_container{
    display: flex;
}

.socioButtonBuscador input{ 
    flex: 1;
    height: 30px;
    background: transparent;
    border: 0;
    outline: 0;
    color: #333;
}



.result-box{
    background-color: white;
    border-radius: 8px;
    border: 1px solid var(--bgformstroke);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    max-height: 300px ;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
}
.result-box ul {
    width: 120%;
}
.result-box ul li{
    list-style: none;
    margin-left: -50px ;
    max-width: 100% ;
}
.result-box2{
    background-color: white;
    border-radius: 8px;
    border: 1px solid var(--bgformstroke);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    max-height: 300px ;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
}

.result-box2 ul {
    width: 120%;
}
.result-box2 ul li{
    list-style: none;
    margin-left: -50px ;
    max-width: 100% ;
}


#elementos-buscador a{
    color: #001019;
    text-decoration: none;
    font-size: 12px;

}
@media (max-width:992px){
#elementos-buscador{
    left: 25%;
}
}
@media (max-width:767px){
#elementos-buscador{
    left: 35%;
}
}
@media (max-width:441px){
#elementos-buscador{
    left: 15%;
}
}
@media (max-width:353px){
#elementos-buscador{
    left: 0%;
}
}
.filtro{
    display: none;

}

/**----------Acordion----------**/
#buscadorito{
    background-color: var(--bgprimary);
}
.cont-buscadorito {
    background-color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 15px;
    color: var(--darkblue);
    border-radius: 8px;
    border: 1px solid var(--bgformstroke);
    margin: .7em 0 0 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 20;
    transition: all 0.3s ease;
}
.cont-buscadorito.active {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: transparent;
}
/* -----------Fin Buscador-------- */
#message svg{
position: absolute;
position: fixed;
top: 75%;
left: 90%;
fill: var(--orange);
transition: fill 0.2s ease;
}

#message svg:hover{
fill: var(--orangeHover);
}

.paaa{
fill: inherit;
}

#message circle{
fill: inherit;
}
/*------------------------------------- NAV ------------------------------------- */
header{
position: fixed;
z-index: 50;
}

header a:hover{
color: var(--orangeHover) !important;
}

nav{
background: linear-gradient(257.94deg, #014E7A 18.65%, #001019 86.55%);
width: 100vw;

}

.navbar-brand{
margin-right: 60px;
}

.nav-link{
color:white;
font-family: Rubik;
font-weight:500;   
font-size: 18px;
}


/* Buttons */

.socioButton{
border-radius: 7px;
border: solid 2px;
border-color: var(--blue);
background-color: white;
color: var(--blue);
height: 45px;
width: 176px;
font-weight: 500;
transition: background 0.2s ease;
}

.turnos{
border-radius: 7px;
border: none;
background-color: var(--orange);
height: 45px;
width: 176px;
font-weight: 500;
transition: background 0.2s ease;
}

.turnos a{
color: white;
text-decoration: none;
}

.socioButton a{
color:var(--blue);
text-decoration: none;
}

.socioButton a:hover{
color:inherit !important;
}

.turnos a:hover{
color:white !important;
}

.socioButton:hover{
background:rgb(219, 219, 219);
transition: background 0.2s ease;
}

.turnos:hover{
background:var(--orangeHover);
transition: background 0.2s ease;
}


@media (max-width: 460px) {

.socioButton{
    height: 40px;
    width: 141px;
}

.navbar-brand{
    margin-right: 15px;
}

}


#buttons{
    display: flex;
    align-items: center;
    margin-right: 0px;
    margin-left: 100px;
}

#buttons button{
margin: 11.5px;

}

nav li{
margin: 0px 27px 0px 27px;
list-style: none;
}

#navbar-pc{
width: 100vw;

}

/* Dropdown */




#navbarSupportedContent li{
color: white;
font-weight: 500;
}

.hoverA-noStroke,.hoverA-Stroke{
color:white ;
fill: white;

}
.hoverA-noStroke a:hover,.hoverA-Stroke a:hover{
color: var(--orangeHover);
fill: var(--orangeHover);

}

.hoverA-noStroke svg,.hoverA-Stroke svg{
display: block;
margin-right: 22px;
fill: inherit;
}


.hoverA-noStroke svg .hover-path, .hoverA-Stroke svg .hover-path{
fill: inherit;
}
.hoverA-Stroke{
stroke: white;
}
.hoverA-Stroke a:hover{
stroke: var(--orangeHover);
}

.hoverA-Stroke svg{
stroke: inherit;
}
.hoverA-Stroke svg .hover-path{
fill: inherit;
stroke: inherit;
}

header #footer-mid-contacto li{
font-size: 12px;
height: 25px;
margin: 25px 0 0 0;
}

.collapse h5{
font-size: 12px;
font-weight: 400;
color: white;
}

#collapse-tiendas{
margin: 20px;
}

#collapse-tiendas img{
margin: 10px;
}
header hr{
color: white;
}
/* -------------Antes del nav-------------- */
#ante-nav{
background-color: var(--blue);
display: flex;
align-items: center;
justify-content: center;
padding: 3px 0;
}
#ante-nav a{
color: white;
font-size: 14px;
line-height: 21px;
font-family: Rubik;
font-weight: 300;
}
#ante-nav a:hover{
cursor: pointer;
}
@media(max-width:555px){
#ante-nav{
    display: none;
}
}
/* -------------Desplegables actualizados------------ */

.dropdown-menu{
background-color: white;
padding-top: 1em;
padding-bottom: 1em;
border-radius: 0%;
border: none;
border-top: 2px solid rgba(0, 0, 0, 0.3);
border-bottom-left-radius: 16px;
}
#navbar-pc ul li ul li{
position: relative;
font-size: 16px;
line-height: 19px;
font-weight: 300;
}
.image-container {
display: none;
position: absolute;
right: -375px;
bottom: 0px;
background: white;
padding: 1.7em 2em 1.7em 0;
border: none;
border-top: 2px solid rgba(0, 0, 0, 0.3);
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;
}
.image-container img {
display: inline-block;
width: 347px;
height: 234px;
}
.highlighted {
font-weight: bold;
}

.highlight-arrow {
position: absolute;
left: 7px;
transform: translateY(-200%);
width: 10px;
height: 10px;
background-color: var(--orange);
clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
display: none;
}
/* --------------------FOOTER----------------- */


footer{
height: 50vh;
background-color: rgb(68, 59, 59);
}

/* TOP */

#footer-top{
background: linear-gradient(180deg, #1D5B92 3.49%, #022747 96.51%);
}

#footer-top .container{
height: 16.4vh;
}

#footer-top .col{
z-index:40;
}

#footer-top #left img{
height: 71px;

}

#footer-top #center img{
margin-top: -8rem;
}

/* ON PC */

@media (max-width: 1399px) {

.socioButton{
    height: 40px;
    width: 160px;
    font-size: 13px;
}
.turnos{
    height: 40px;
    width: 160px;
    font-size: 13px;
}

#buttons button{
    margin: 6.5px;
}

#buttons{
    width: 100%;
    margin-left: 10px;
}

nav li{
    margin: 0px 10px 0px 10px;
}

.nav-link{
    font-weight:500;   
    font-size: 13px;
}


#footer-top #left img{
    height: 50px;
}

#footer-top #center img{
    margin-top: -8rem;
    height: 220px;
}

#collapse-tiendas{
    margin: 2px;
}
}


/* ON PHONE */


#footer-top-phone{
background: linear-gradient(180deg, #1D5B92 3.49%, #022747 96.51%);

}

#footer-top-phone .container{
height: 30vh;
width: 100vw;
}

#footer-top-phone .col{
height:8.5vh;
margin:.5rem 0 1rem 0;


}

#footer-top-phone #p1 img{
margin-top:-15rem;
margin-left: -4rem;
}

#footer-top-phone #p2 img{
margin: 10px ;
}

#footer-top-phone #p3 img{
height:3.4rem;
}

/* MID */

#footer-mid {
padding: 8rem 0 8rem 0;
background: linear-gradient(180deg, #050B12 3.49%, #013766 96.51%);
height: 77vh auto;
display: grid;
place-items: center;
}

#footer-mid h5{
color: white;
font-weight: 700;
font-size: 18px;
margin-bottom: 18px;
}

#footer-mid ul{
list-style: none;
color: white;
margin:1rem 0 1rem 0;
}

#footer-mid li{
line-height: 32px;
font-size: 16px;
}

#footer-mid a{
color: white;
text-decoration: none;
font-weight: 400;
font-size: 16px;
}   

#footer-mid a:hover{
color: var(--orange);
}

#footer-mid-contacto li{
margin: 9px 0 9px 0;
}

#footer-mid-contacto a{
color: #5BC4E3;
}

#footer-mid-contacto .wpp{
background-image: url(./img/footer/wpp.svg);
background-repeat: no-repeat;
padding-left: 30px;
}

#footer-mid-contacto .central{
background-image: url(./img/footer/phone.svg);
background-repeat: no-repeat;
padding-left: 30px;
}
#footer-mid-contacto .horarios{
background-image: url(./img/footer/clock.svg);
background-repeat: no-repeat;
padding-left: 30px;
}
#footer-mid-contacto .mails{
background-image: url(./img/footer/mail.svg);
background-repeat: no-repeat;
padding-left: 30px;
}

/* ON phone */


#footer-mid-phone{
margin-top:70px;
}
#footer-mid-phone button{
margin:8.5px;
}
#footer-mid-phone li{
margin:83px 12.5px 0px 12.5px;
}
#footer-mid-phone .quieroAsociarme{
border-radius: 7px;
border: solid 2px;
border-color: white;
background-color: transparent;
color: white;
height: 45px;
width: 176px;
font-family: Rubik;
font-weight: 500;
}

/* BOTTOM */

/* ON PHONE */

#footer-bottom-phone div{
margin: 10px;
}
#footer-bottom{
height: auto;
background: #002133;
}

#redes li {
list-style: none;
margin:8px;
}

#footer-bottom h5{
color: white;
font-size: 12px;
font-weight: 200;
}

#footer-bottom .container{

padding-top: 20px;

}

/* FIN FOOTER Y NAV */


@media (max-width: 991px) {
.backgroundNav-Phone{
    background: transparent;
    border: none;
    color: white;
}
.backgroundNav-Phone a{
    color: white;
}
.backgroundNav-Phone a:hover{
    color:var(--orangeHover);
}
.socioButton{
    height: 40px;
    width: 140px;
    font-size: 16px;
}
.turnos{
    height: 40px;
    width: 160px;
    font-size: 16px;
}
#buttons button{
    margin: 5px;
}
#buttons{
    width: 100%;
}
nav li{
    margin: 0px 25px 0px 25px;
}
.nav-link{
    font-weight:500;   
    font-size: 16px;
}
#footer-top #left img{
    height: 50px;
}
#footer-top #center img{
    margin-top: -8rem;
    height: 220px;
}
#collapse-tiendas{
    margin: 2px;
}
#navbarSupportedContent{
    min-height: 60vh;
    max-height: 80vh;
    overflow-y: scroll;
}
#message svg{
    position: absolute;
    position: fixed;
    top: 85%;
    left: 75%;
    fill: var(--orange);
    transition: fill 0.2s ease;
}
}
</style>

`

footer.innerHTML=`
<div id="footer-top" class="d-none d-lg-block">

    <div class="container d-flex align-items-center justify-content-center text-center">
        <div class="row d-flex justify-content-center text-center align-items-center">
            <div id="left" class="col">
                <img src="./img/footer/dimLogoFooter.svg" alt="">
            </div>

            <div style="height: 2rem;" id="center" class="col">
                <img src="./img/footer/phoneFooter.svg" alt="">
            </div>

            <div class="col">

                <div id="collapse-tiendas" class="d-flex">
                    <a style="color: transparent;" href="https://apps.apple.com/ar/app/dim-salud-turnos-y-resultados/id1627335644">
                        <img src="./img/appStore.svg" alt="">
                    </a>
                    <a style="color: transparent;" href="https://play.google.com/store/apps/details?id=ar.com.dim.portalturnos">

                        <img src="./img/gPlay.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>

<div id="footer-top-phone" class="d-lg-none">
    <div class="container text-center">
        
        <div class="row d-flex flex-column">
            <div id="p1" class="col">
                <img src="./img/footer/phoneFooter.svg" alt="">
            </div>
            
            
            <div id="p2" class="col">

                <div id="collapse-tiendas" class="d-flex justify-content-center">
                    <a style="color: transparent;" href="https://apps.apple.com/ar/app/dim-salud-turnos-y-resultados/id1627335644">
                        <img src="./img/appStore.svg" alt="">
                    </a>
                    <a style="color: transparent;" href="https://play.google.com/store/apps/details?id=ar.com.dim.portalturnos">

                        <img src="./img/gPlay.svg" alt="">
                    </a>
                </div>
            </div>

            <div id="p3" class="col">
                <img src="./img/footer/dimLogoFooter.svg" alt="">
            </div>

        </div>

    </div>
</div>


<div id="footer-mid">

    <div class="container">
        <div class="row justify-content-center text-center">

            <!-- ONLY ON PHONE -->

            <div class="d-xs d-md-none text-start">
                <ul id="footer-mid-contacto">
                    <li class="wpp">
                        Whatsapp Oficial
                        <a href="http://wa.link/gp4rnn">11-6648-5555</a>
                    </li>
                    <li class="central">
                        Central de Turnos <a href="tel:+5491555548888">5554-8888</a> 
                        Lun-Vie 8 a 20 h y Sáb 8 a 13 h
                    </li>
                    <li class="horarios">
                        <a href="../w20 Nuestros centros y horarios/index.html">Ver horarios de nuestras sedes</a>
                    </li>
                    <li class="mails">
                        <a href="mailto:turnos@dim.com.ar">turnos@dim.com.ar</a>
                    </li>
                </ul>
            </div>

            <!-- END OF ONLY ON PHONE -->

            <div class="col-12 col-lg-3 col text-start">
                <ul>
                    <li><h5>Lo más buscado</h5></li>
                    <li><a href="https://portal.dim.com.ar/">Portal de turnos online</a></li>
                    <li><a href="../w22 Receta digital/index.html">Receta digital</a></li>
                    <li><a href="https://apps.apple.com/ar/app/dim-salud-turnos-y-resultados/id1627335644">Aplicación móvil Iphone</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=ar.com.dim.portalturnos">Aplicación móvil Android</a></li>
                    <li><a href="#?">Buscar un médico</a></li>
                    <li><a href="#?">Quiero ser socio</a></li>
                    <li><a href="#?">Programas de Beneficios DIM</a></li>

                </ul>
            </div>
            
            <div class="col-12 col-lg-3 text-start">
                <ul>
                    <h5 class="h5Reu">
                      Nuestros servicios
                    </h5>
                    <li><a href="../w8 Esp Medicas/index.html">Especialidades médicas</a></li>
                    <li><a href="../w7 Est Medicos y preparaciones/index.html">Estudios médicos</a></li>
                    <li><a href="https://portal.dim.com.ar/">Turnos médicos</a></li>
                    <li><a href="../w13 Medicina nuclear/index.html">Medicina Nuclear</a></li>
                    <li><a href="../w24 resonancia magnetica/index.html">Resonancia Magnética</a></li>
                    <li><a href="../w27 tomografia multicorte/index.html">Tomografía Computada</a></li>
                    <li><a href="../w29 laboratorio/index.html">Laboratorio</a></li>
                    <li><a href="../w11 Cirujias esteticas/index.html">Cirugía y Medicina estética</a></li>
                    <li><a href="../w17 Atencion sin turno previo/index.html">Atención sin turno previo</a></li>
                    <li><a href="../w21 Video consultas - Teleconsultas/index.html">Video consultas</a></li>
                  </ul>
            </div>
            
            <div class="col-12 col-lg-3  text-start">
                <ul>
                    <li>
                        <h5>DIM Centros de Salud</h5>
                    </li>
                    
                    <li><a href="../w20 Nuestros centros y horarios/index.html">Nuestros centros</a></li>
                    <li><a href="../w2 Conocenos/index.html">Conocenos</a></li>
                    <li><a href="../w14 Novedades/index.html">Novedades</a></li>
                    <li><a href="#?">Centros de Investigaciones Médicas</a></li>
                    <li><a href="../w3 Comite de etica/index.html">Comité Ética</a></li>
                    <li><a href="../w5 Educacion/index.html">Docencia</a></li>
                    <li><a href="https://www.fundaciondim.com.ar/">Fundación</a></li>
                    <li><a href="../w33 Recursos humanos/index.html">Quiero trabajar en DIM</a></li>
                    <li><a href="../comiteTica.pdf">Política de privacidad</a></li>
                    <li><a href="../comiteTica.pdf">Términos y condiciones</a></li>
                    

                </ul>
            </div>

            <div class="col-12 col-lg-3  text-start">
                <ul>
                    <li>
                        <h5>Ayuda</h5>
                    </li>
                    <li><a href="#???">Preguntas frecuentes</a></li>
                    <li><a href="../w7 Est Medicos y preparaciones/index.html">Estudios y preparaciones</a></li>
                    <li><a href="../w18 Coberturas Medicas/index.html">Coberturas que atendemos</a></li>
                    <li><a href="../w32 contacto/index.html">¿Tenés dudas?</a>

                </ul>

                <ul class="d-md-grid d-none" id="footer-mid-contacto">
                    <li class="wpp">
                        Whatsapp Oficial
                        <a href="http://wa.link/gp4rnn">11-6648-5555</a>
                    </li>
                    <li class="central">
                        Central de Turnos <a href="tel:+5491555548888">5554-8888</a> 
                        Lun-Vie 8 a 20 h y Sáb 8 a 13 h
                    </li>
                    <li class="horarios">
                        <a href="../w20 Nuestros centros y horarios/index.html">Ver horarios de nuestras sedes</a>
                    </li>
                    <li class="mails">
                        <a href="mailto:turnos@dim.com.ar">turnos@dim.com.ar</a>
                    </li>
                </ul>

            </div>
        </div>

        <div class="row d-none d-md-grid text-end">
            <div style="padding-right: 40px;" class="col">
                <img style="height: 44px;" src="./img/footer/qvb.svg" alt="" srcset="">
            </div>
        </div>


        <!-- ONLY ON PHONE -->

        <div id="footer-mid-phone" class="d d-lg-none">

            <div class="row d d-lg-none">
                <div class="col d-flex flex-column align-items-center ">

                    <!-- Botones  -->
                    <button class="socioButton" type="button">
                        <a style="color: #006299;" href="../w19 Mutual Amedim/index.html">Quiero ser socio</a>
                    </button>
                    <button class="turnos" type="button"> 
                        <a href="https://portal.dim.com.ar/">
                            <span>
                                <img src="./img/portalTurnos.svg" alt="">
                            </span> 
                            Portal de Turnos</a>
                    </button>
        


                    <div>
                        <ul style="padding: 0px;" class="d-flex align-items-center justify-content-center">
                            <li>
                                <a href="https://www.instagram.com/dimcentrosdesalud/?hl=es">
                                    <img src="./img/redes/ig.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/dimcentrosdesalud/?locale=es_LA">
                                    <img src="./img/redes/fb.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/c/dimcentrosdesalud">
                                    <img src="./img/redes/yt.svg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="https://ar.linkedin.com/company/dimcentrosdesalud">
                                    <img src="./img/redes/in.svg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>

    </div>

</div>


<div id="footer-bottom">



    <div class="container">

        <div id="footer-bottom-phone" class="d-lg-none">
            <div class="row text-center">
                <div class="col">
                    <img src="./img/footer/datafiscal.png" alt="">
                </div>
            </div>

            <div class="row text-center">
                <div class="col">
                    <img height="58px" src="./img/footer/mp.svg" alt="">
                </div>
            </div>
        </div>

        <div style="width: 100%;" class="row d-none d-lg-flex align-items-center">
            <div class="col">
                <h5> © DIM Salud todos los derechos reservados desde 1964.</h5>
            </div>
            <div class="col">
                <img style="height: 4rem;" src="./img/footer/datafiscal.png" alt="">
            </div>
            <div class="col">
                <img src="./img/footer/mp.svg" alt="">
            </div>
            <div class="col">
                    <!-- Botones  -->
                    <button style="margin: 0px; width: 160px;" class="turnos" type="button"> 
                        <a href="https://portal.dim.com.ar/">
                            <span>
                                <img src="./img/portalTurnos.svg" alt="">
                            </span> 
                            Portal de Turnos</a>
                    </button>
            </div>
            <div class="col">
                <div id="redes">
                    <ul style="padding: 0px;" class="d-flex align-items-center justify-content-center">
                        <li>
                            <a href="https://www.instagram.com/dimcentrosdesalud/?hl=es">
                                <img src="./img/redes/ig.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/dimcentrosdesalud/?locale=es_LA">
                                <img src="./img/redes/fb.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/c/dimcentrosdesalud">
                                <img src="./img/redes/yt.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://ar.linkedin.com/company/dimcentrosdesalud">
                                <img src="./img/redes/in.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>

`
const cerrarValorizacion = document.getElementById('cerrarValorizacion');
    const valorizacion = document.querySelector('.valorizacion');
    
    cerrarValorizacion.addEventListener('click', () => {
      valorizacion.style.display = 'none';
    });