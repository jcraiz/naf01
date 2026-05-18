const programsData = {
    "recursos-humanos": {
        title: "Técnico Laboral por Competencias en Auxiliar de Recurso Humano y Riesgo Laboral",
        profile: ["Auxiliar de contratación", "Auxiliar personal", "Auxiliar recursos humanos", "Auxiliar relaciones laborales", "Asistentes administrativos"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Técnicas de Estudio", "Servicio al Cliente", "Organización de Archivos", "Gestión de Residuos Solidos", "Implementación de Sistemas de Gestión I", "Implementación de Sistemas de Gestión II", "Higiene Industrial I", "Higiene Industrial II", "Nomina"],
        modulesTitle: "Módulos del Programa"
    },
    "turismo": {
        title: "Organización y Comercialización, Productos y Servicios Turísticos",
        profile: ["El educando del programa Técnico Laboral por Competencias en Agente de Viajes y turismo, tendrá una amplia cobertura en las ofertas laborales de las diferentes empresas del sector, debido a su multitudinario desarrollo de competencias laborales específicas, podrá ejercer diversos cargos y funciones dentro de las ramas de los asistentes administrativos, lo que a su vez le permitirá un mayor y más rápido acceso a la oferta laboral."],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Técnicas de Estudio", "Venta de Productos y Servicios Turísticos", "Control de calidad en ventas", "Técnicas de Reserva", "Diseño de Paquetes Turísticos", "Fideliza tu viaje", "Competencias comunicativas", "Contexto social, Natural y civismo", "Matemáticas Básica"],
        modulesTitle: "Módulos del Programa"
    },
    "contable": {
        title: "Auxiliar Contable y Financiero",
        profile: ["Realiza actividades administrativas de archivo", "Control y elaboración de correspondencia", "Digitar y registrar las transacciones con tablas de las operaciones de la compañía y verificar su adecuada contabilización", "Elaborar nómina y liquidación de seguridad social"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Recurso Financiero", "Informe Financiero I", "Informe Financiero II", "Costos de Operaciones", "Gestión Documental", "Recuperación de Cartera", "Técnicas de Estudio", "Procesos Contables y Financieros", "Nomina"],
        modulesTitle: "Módulos del Programa"
    },
    "administrativo": {
        title: "Auxiliar Administrativo",
        profile: ["Realiza actividades administrativas de archivo", "Control y elaboración de correspondencia", "Digitar y registrar las transacciones con tablas de las operaciones de la compañía y verificar su adecuada contabilización", "Elaborar nómina y liquidación de seguridad social"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Control de Recurso Monetario", "Informe Financiero I", "Informe Financiero II", "Procesamiento de Datos", "Gestión Documental", "Recurso Financiero", "Técnicas de Estudio", "Planeación y Organización de Reuniones Administrativas", "Nomina anexar"],
        modulesTitle: "Módulos del Programa"
    },
    "primera-infancia": {
        title: "Auxiliar de Educación para la Primera Infancia",
        profile: ["Prestar servicios de dirección y cuidado en centros y hogares infantiles barriales.", "Auxiliar docente en niveles de Jardín, pre-jardín y preescolar.", "Tallerista de creatividad y artes para niños.", "Asistente en áreas de crecimiento y desarrollo infantil.", "Asistente en instituciones de educación preescolar y primaria.", "Asistente de las áreas de pediatría en centros médicos y de crecimiento infantil.", "Montar su propio centro de desarrollo infantil."],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Técnicas de Estudio", "Promoción derechos", "Promoción de la salud I", "Promoción Salud II", "Acompañamiento I", "Acompañamiento II", "Promoción y Estimulación de lectura y Escritura", "Cuidar niños y niñas de acuerdo al grado de autonomía"],
        modulesTitle: "Módulos del Programa"
    },
    "ventas": {
        title: "Agente de Ventas",
        profile: ["Supervisores, empleados de información y servicio al cliente.", "Auxiliar de información y servicio al cliente.", "Supervisores de ventas", "Vendedores", "Ventas técnicas", "Mercaderistas e impulsadores."],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Informática I", "Informática II", "Emprendimiento", "Técnicas de Estudio", "Legislación Laboral", "Servicio al cliente", "Organización de reuniones administrativas", "Prospección del cliente", "Costos de Operaciones", "Mercadeo", "Negociación de ventas y productos y servicios", "Administrar clientes"],
        modulesTitle: "Módulos del Programa"
    },
    "judicial": {
        title: "Investigador Judicial",
        profile: ["Peritos judiciales", "Técnicos investigadores criminalísticas y judiciales", "Técnico investigador privado"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Inducción a la institución Educativa", "Técnicas de estudio", "Tecnologías de la información de la comunicación I", "Tecnologías de la información de la comunicación II", "Inspección del lugar de los hechos I", "Inspección del lugar de los hechos II", "Registro de información I", "Registro de información II", "Grafología y Documentología I", "Grafología y Documentología II", "Estructuración de los hechos I", "Estructuración de los hechos II", "Sustento de informe Parcial"],
        modulesTitle: "Módulos del Programa"
    },
    "logistica": {
        title: "Auxiliar de Logística en Centros de Distribución",
        profile: ["Auxiliar bodega", "Auxiliar de almacén", "Auxiliar de cargue y descargue", "Auxiliar de despacho", "Auxiliar de empaque de almacén", "Auxiliar entregas", "Auxiliar recibo y despacho", "Recepción mercancía"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Inducción a la institución educativa", "Técnicas de Estudio", "Tecnologías de información de la comunicación.", "Despacho de Mercancías I", "Despacho de Mercancías II", "Almacenamiento y manejo I", "Almacenamiento y manejo II", "Recepción de Mercancías I", "Recepción de Mercancías II", "Programación de rutas I", "Programación de rutas II", "Preparación de la carga I", "Preparación de la carga II"],
        modulesTitle: "Módulos del Programa"
    },
    "sistemas": {
        title: "Auxiliar en Sistemas Informáticos",
        profile: ["Atender requerimientos de los usuarios de acuerdo con procedimientos técnicos", "Instalar y ensamblar equipos de cómputo, mantener y reparar equipos.", "Instruir en el uso de herramientas informáticas de acuerdo con las necesidades de manejo de información.", "Manejar herramientas informáticas."],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Herramientas ofimáticas I", "Herramientas ofimáticas II", "Emprendimiento", "Técnicas de estudio", "Procesamiento de datos", "Arquitectura, componentes y mantenimiento de equipos de cómputo I", "Arquitectura, componentes y mantenimiento de equipos de cómputo II", "Clasificación y consolidación de información", "Determinación, corrección de fallas y desensamble de hardware I", "Determinación, corrección de fallas y desensamble de hardware II", "Planeación de proyectos de software I", "Planeación de proyectos de software II"],
        modulesTitle: "Módulos del Programa"
    },
    "ingles": {
        title: "Inglés",
        profile: ["Nivel A1 del M.C.E.R", "Nivel A2 del M.C.E.R", "Nivel B1 del M.C.E.R", "Nivel B2 del M.C.E.R"],
        requirements: ["Diligenciar el Formulario", "Dos fotos 3*4 fondo blanco", "Dos fotocopias del documento de identidad", "Fotocopia de certificado de (noveno) o ultimo grado realizado o fotocopia del acta de grado", "Asistir a la entrevista"],
        modules: ["Habilidad oral", "Habilidad auditiva", "Habilidad escrita", "Habilidad lectora"],
        modulesTitle: "Habilidades que Construye"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link[data-link], .logo[data-link]');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Modal Elements
    const modalOverlay = document.getElementById('program-modal');
    const modalClose = document.querySelector('.modal-close');
    
    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Router functionality
    const navigateTo = (pageId) => {
        // Find template
        const template = document.getElementById(`tpl-${pageId}`);
        if (!template) return;

        // Animate out current content
        appContent.style.opacity = 0;
        
        setTimeout(() => {
            // Clear and inject new content
            appContent.innerHTML = '';
            appContent.appendChild(template.content.cloneNode(true));
            
            // Fade in
            appContent.style.opacity = 1;
            appContent.style.transition = 'opacity 0.3s ease';
            
            // Update active state in nav (ignore logo and buttons for active underline)
            navLinks.forEach(link => {
                if(link.classList.contains('logo') || link.classList.contains('btn-outline')) return;
                
                if (link.dataset.link === pageId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                mobileToggle.click();
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Re-bind internal links and buttons in the newly injected content
            bindInternalLinks();
            
            // Handle specific page logic
            if (pageId === 'contact') {
                handleContactForm();
            } else if (pageId === 'programs') {
                bindProgramModals();
            }

            // Re-trigger animations
            const animatedElements = appContent.querySelectorAll('.animate-up');
            animatedElements.forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animation = null; 
            });

        }, 300); // Match transition time
    };

    const bindInternalLinks = () => {
        const internalLinks = appContent.querySelectorAll('a[data-link]');
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.dataset.link;
                history.pushState({ pageId }, '', `#${pageId}`);
                navigateTo(pageId);
            });
        });
        
        // Handle normal hrefs in injected content if they map to #page
        const hrefLinks = appContent.querySelectorAll('a[href^="#"]');
        hrefLinks.forEach(link => {
            if(!link.dataset.link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Si el link es del modal y cierra el modal para ir a la página
                    if(link.classList.contains('btn-modal-apply')) {
                        closeModal();
                        setTimeout(() => {
                            history.pushState({ pageId: 'admissions' }, '', `#admissions`);
                            navigateTo('admissions');
                        }, 300);
                        return;
                    }

                    const targetId = link.getAttribute('href').replace('#', '');
                    const targetElement = document.getElementById(targetId);
                    if(targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        });
    };

    // Modal Logic
    const bindProgramModals = () => {
        const verMasBtns = appContent.querySelectorAll('.btn-ver-mas');
        verMasBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const programId = e.target.dataset.program;
                openModal(programId);
            });
        });
    };

    const openModal = (programId) => {
        const data = programsData[programId];
        if(!data) return;

        document.getElementById('modal-title').textContent = data.title;
        
        // Populate lists
        document.getElementById('modal-profile').innerHTML = data.profile.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('');
        document.getElementById('modal-requirements').innerHTML = data.requirements.map(item => `<li><i class="fa-solid fa-check"></i> ${item}</li>`).join('');
        
        const modulesTitle = document.getElementById('modal-modules-title');
        modulesTitle.innerHTML = `<i class="fa-solid fa-book text-accent"></i> ${data.modulesTitle}`;
        
        document.getElementById('modal-modules').innerHTML = data.modules.map(item => `<li>${item}</li>`).join('');

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    if(modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if(modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    const handleContactForm = () => {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
                btn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    form.innerHTML = `
                        <div class="text-center py-4 animate-up">
                            <i class="fa-solid fa-circle-check fa-4x text-blue mb-3" style="color: #003366;"></i>
                            <h3 style="color: #003366;">¡Mensaje Enviado con Éxito!</h3>
                            <p>Gracias por contactar al Politécnico Nafoem. Nuestro equipo de admisiones se comunicará contigo pronto.</p>
                            <button class="btn btn-outline mt-4" onclick="window.location.reload()">Enviar Otro Mensaje</button>
                        </div>
                    `;
                }, 1500);
            });
        }
    };

    // Global navigation event listeners
    navLinks.forEach(link => {
        if (!link) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.link;
            history.pushState({ pageId }, '', `#${pageId}`);
            navigateTo(pageId);
        });
    });

    // Enlace en el modal para aplicar
    const modalApplyBtn = document.querySelector('.btn-modal-apply');
    if (modalApplyBtn) {
        modalApplyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
            setTimeout(() => {
                history.pushState({ pageId: 'admissions' }, '', `#admissions`);
                navigateTo('admissions');
            }, 300);
        });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.pageId) {
            navigateTo(e.state.pageId);
        } else {
            // Default to home or hash
            const hash = window.location.hash.replace('#', '');
            navigateTo(hash || 'home');
        }
    });

    // Initial load handling
    const initApp = () => {
        const hash = window.location.hash.replace('#', '');
        const initialPage = hash || 'home';
        // Initialize history state
        history.replaceState({ pageId: initialPage }, '', window.location.hash || '#home');
        navigateTo(initialPage);
    };

    // Start App
    initApp();
});
