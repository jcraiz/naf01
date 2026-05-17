/**
 * NAFOEM Website - Enhanced JavaScript
 * Features: Modals, Form Validation, Search/Filter, Accessibility, Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Configuration =====
    const CONFIG = {
        scrollThreshold: 50,
        animationDelay: 100,
        formStorageKey: 'nafoem_form_draft',
        toastDuration: 5000
    };

    // ===== Program Data (Detailed Information for Modals) =====
    const PROGRAMS = {
        viajes: {
            title: 'Agente de Viajes y Turismo',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-plane-departure',
            duration: '12 meses',
            schedule: 'Mañana / Tarde / Noche',
            modality: 'Presencial / Virtual',
            description: 'Formación integral para desempeñarse en el sector turístico, con enfoque en atención al cliente, gestión de reservas, logística de viajes y conocimiento de destinos nacionales e internacionales.',
            competencies: [
                'Gestión de reservas aéreas, terrestres y hoteleras',
                'Atención personalizada al cliente turístico',
                'Elaboración de itinerarios y paquetes turísticos',
                'Manejo de sistemas de reservas (GDS)',
                'Conocimiento de normativas del sector turismo',
                'Comunicación efectiva en español e inglés básico'
            ],
            career: [
                'Agente de viajes en agencias turísticas',
                'Asistente en operadores turísticos',
                'Coordinador de grupos y eventos',
                'Asesor en puntos de información turística',
                'Emprendedor en servicios de turismo',
                'Auxiliar en hoteles y resorts'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 16 años',
                'Entrevista de admisión',
                'Interés por el sector servicios'
            ],
            testimonial: {
                quote: 'Gracias a NAFOEM conseguí mi primer empleo en una agencia de viajes. La formación práctica fue clave para mi éxito.',
                author: 'María López, Egresada 2024'
            }
        },
        contable: {
            title: 'Auxiliar Contable y Financiero',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-calculator',
            duration: '12 meses',
            schedule: 'Mañana / Tarde / Noche',
            modality: 'Presencial / Virtual',
            description: 'Capacitación en procesos contables básicos, manejo de software financiero, elaboración de nómina, gestión de impuestos y soporte en la toma de decisiones financieras.',
            competencies: [
                'Registro de transacciones comerciales',
                'Elaboración de nómina y seguridad social',
                'Manejo de software contable (Siigo, Helisa, etc.)',
                'Conciliaciones bancarias y cuadres de caja',
                'Declaraciones tributarias básicas',
                'Atención a proveedores y clientes'
            ],
            career: [
                'Auxiliar contable en empresas',
                'Asistente financiero',
                'Operador de nómina',
                'Auxiliar en firmas de contadores',
                'Soporte administrativo-financiero',
                'Emprendimiento en servicios contables'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 16 años',
                'Conocimientos básicos de matemáticas',
                'Manejo básico de computador'
            ],
            testimonial: {
                quote: 'El programa me dio las herramientas para trabajar en una empresa importante. Hoy soy responsable del área contable.',
                author: 'Carlos Ramírez, Egresado 2023'
            }
        },
        admin: {
            title: 'Auxiliar Administrativo',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-briefcase',
            duration: '10 meses',
            schedule: 'Mañana / Tarde / Noche',
            modality: 'Presencial / Virtual',
            description: 'Formación en gestión administrativa, atención al usuario, manejo de oficina, organización de documentos y soporte en procesos empresariales.',
            competencies: [
                'Gestión de correspondencia y archivo',
                'Atención presencial y telefónica',
                'Manejo de paquetes ofimáticos (Office, Google Workspace)',
                'Organización de agendas y reuniones',
                'Elaboración de documentos comerciales',
                'Protocolo y relaciones interpersonales'
            ],
            career: [
                'Auxiliar administrativo en cualquier sector',
                'Recepcionista / Asistente de dirección',
                'Coordinador de servicios generales',
                'Asistente en entidades públicas',
                'Soporte en recursos humanos',
                'Emprendimiento en servicios administrativos'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 16 años',
                'Buena comunicación oral y escrita',
                'Actitud de servicio'
            ],
            testimonial: {
                quote: 'Aprendí habilidades que uso todos los días. Ahora trabajo como asistente ejecutiva en una multinacional.',
                author: 'Ana Martínez, Egresada 2025'
            }
        },
        infancia: {
            title: 'Primera Infancia',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-child',
            duration: '12 meses',
            schedule: 'Mañana / Tarde',
            modality: 'Presencial',
            description: 'Preparación para el cuidado y desarrollo integral de niños de 0 a 5 años, con enfoque en estimulación temprana, pedagogía lúdica y protección de derechos.',
            competencies: [
                'Estimulación del desarrollo infantil',
                'Diseño de actividades pedagógicas lúdicas',
                'Cuidado básico y alimentación infantil',
                'Detección de señales de alerta en desarrollo',
                'Comunicación efectiva con familias',
                'Aplicación de protocolos de protección infantil'
            ],
            career: [
                'Auxiliar en centros de desarrollo infantil',
                'Asistente en jardines infantiles',
                'Cuidador/a en hogares comunitarios',
                'Monitor en programas de primera infancia',
                'Apoyo en consultorios de pediatría',
                'Emprendimiento en cuidado infantil'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 18 años',
                'Certificado de antecedentes judiciales',
                'Vocación de servicio y paciencia',
                'Examen médico ocupacional'
            ],
            testimonial: {
                quote: 'Trabajar con niños es mi pasión. NAFOEM me preparó con amor y profesionalismo para esta hermosa labor.',
                author: 'Laura Gómez, Egresada 2024'
            }
        },
        ventas: {
            title: 'Agente de Ventas',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-hand-holding-dollar',
            duration: '8 meses',
            schedule: 'Mañana / Tarde / Noche / Fines de semana',
            modality: 'Presencial / Virtual',
            description: 'Entrenamiento en técnicas de venta, atención al cliente, manejo de objeciones, cierre de ventas y uso de herramientas digitales para el comercio.',
            competencies: [
                'Técnicas de prospección y fidelización',
                'Manejo de objeciones y cierre de ventas',
                'Atención al cliente presencial y digital',
                'Uso de CRM y herramientas de ventas',
                'Merchandising y visualización de productos',
                'Ética comercial y servicio post-venta'
            ],
            career: [
                'Vendedor en retail y comercio',
                'Asesor comercial en empresas',
                'Promotor de marcas y productos',
                'Agente de televentas',
                'Coordinador de punto de venta',
                'Emprendedor en comercio electrónico'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 16 años',
                'Habilidades de comunicación',
                'Orientación a resultados'
            ],
            testimonial: {
                quote: 'Las técnicas que aprendí me ayudaron a superar mis metas de ventas. Hoy soy supervisor de un equipo comercial.',
                author: 'Diego Fernández, Egresado 2023'
            }
        },
        judicial: {
            title: 'Investigador Judicial',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-magnifying-glass',
            duration: '14 meses',
            schedule: 'Mañana / Tarde',
            modality: 'Presencial',
            description: 'Formación en técnicas de investigación, recolección de evidencia, redacción de informes, normativa legal y ética profesional para el ámbito judicial.',
            competencies: [
                'Técnicas de investigación y entrevista',
                'Recolección y preservación de evidencia',
                'Redacción de informes técnicos',
                'Conocimiento de normativa penal y procesal',
                'Uso de tecnología en investigaciones',
                'Ética profesional y confidencialidad'
            ],
            career: [
                'Auxiliar en fiscalías y juzgados',
                'Investigador privado autorizado',
                'Asistente en consultorios jurídicos',
                'Soporte en entidades de control',
                'Analista en seguridad privada',
                'Consultor en prevención de riesgos'
            ],
            requirements: [
                'Undécimo grado aprobado',
                'Edad mínima: 18 años',
                'Certificado de antecedentes judiciales',
                'Entrevista psicológica',
                'Examen médico ocupacional'
            ],
            testimonial: {
                quote: 'La formación ética y técnica que recibí en NAFOEM fue fundamental para mi carrera en el sector judicial.',
                author: 'Roberto Silva, Egresado 2022'
            }
        },
        logistica: {
            title: 'Logística en Centros de Distribución',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-boxes-stacked',
            duration: '10 meses',
            schedule: 'Mañana / Tarde / Noche',
            modality: 'Presencial',
            description: 'Capacitación en gestión de inventarios, operaciones de bodega, manejo de montacargas, sistemas de trazabilidad y optimización de procesos logísticos.',
            competencies: [
                'Gestión de inventarios y almacenes',
                'Operación de equipos de manutención',
                'Sistemas de codificación y trazabilidad',
                'Procesos de recepción y despacho',
                'Normas de seguridad industrial',
                'Manejo de software logístico (WMS)'
            ],
            career: [
                'Auxiliar de bodega y almacén',
                'Operador de montacargas',
                'Coordinador de despacho',
                'Asistente en centros de distribución',
                'Controlador de inventarios',
                'Emprendimiento en servicios logísticos'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 18 años',
                'Licencia de conducción (para montacargas)',
                'Capacidad física para manejo de carga',
                'Examen médico ocupacional'
            ],
            testimonial: {
                quote: 'Con la certificación en logística conseguí trabajo en una empresa de e-commerce. Es un sector con gran futuro.',
                author: 'Javier Torres, Egresado 2024'
            }
        },
        sistemas: {
            title: 'Sistemas Informáticos',
            subtitle: 'Técnico Laboral por Competencias',
            icon: 'fa-computer',
            duration: '12 meses',
            schedule: 'Mañana / Tarde / Noche',
            modality: 'Presencial / Virtual',
            description: 'Formación en soporte técnico, instalación de software y hardware, redes básicas, seguridad informática y atención a usuarios en entornos tecnológicos.',
            competencies: [
                'Soporte técnico a usuarios (Help Desk)',
                'Instalación y configuración de equipos',
                'Mantenimiento preventivo y correctivo',
                'Configuración de redes básicas',
                'Seguridad informática básica',
                'Manejo de sistemas operativos y ofimática'
            ],
            career: [
                'Técnico de soporte IT',
                'Asistente en departamentos de sistemas',
                'Técnico en venta de equipos',
                'Soporte remoto para empresas',
                'Emprendimiento en servicios tecnológicos',
                'Base para estudios en ingeniería de sistemas'
            ],
            requirements: [
                'Noveno grado aprobado o superior',
                'Edad mínima: 16 años',
                'Conocimientos básicos de computación',
                'Interés por la tecnología',
                'Capacidad de resolución de problemas'
            ],
            testimonial: {
                quote: 'NAFOEM me dio las bases para trabajar en tecnología. Hoy estudio ingeniería de sistemas y trabajo medio tiempo en soporte IT.',
                author: 'Camila Rojas, Egresada 2025'
            }
        },
        ingles: {
            title: 'Niveles Académicos en Inglés',
            subtitle: 'Programa de Idiomas - Marco Común Europeo',
            icon: 'fa-language',
            duration: 'Por nivel (A1-B2): 4-6 meses c/u',
            schedule: 'Mañana / Tarde / Noche / Sábados',
            modality: 'Presencial / Virtual',
            description: 'Desarrollo de las cuatro habilidades del idioma inglés (escuchar, hablar, leer, escribir) bajo el Marco Común Europeo de Referencia (MCER), con enfoque comunicativo.',
            competencies: [
                'Comprensión auditiva y lectora',
                'Expresión oral y escrita',
                'Gramática y vocabulario contextualizado',
                'Pronunciación y entonación',
                'Comunicación intercultural',
                'Preparación para certificaciones internacionales'
            ],
            career: [
                'Mejora de perfil laboral en cualquier sector',
                'Acceso a oportunidades internacionales',
                'Soporte en empresas con clientes extranjeros',
                'Base para estudios superiores',
                'Turismo y atención al cliente internacional',
                'Preparación para exámenes TOEFL, IELTS, Cambridge'
            ],
            requirements: [
                'Prueba de nivelación inicial',
                'Edad mínima: 14 años (para menores: autorización)',
                'Compromiso con la práctica constante',
                'Asistencia mínima del 80%'
            ],
            testimonial: {
                quote: 'Pasé de no saber inglés a tener nivel B2 en 18 meses. Ahora trabajo en una empresa con clientes internacionales.',
                author: 'Sofía Vargas, Estudiante de Inglés'
            }
        }
    };

    // ===== DOM Elements =====
    const elements = {
        navbar: document.getElementById('navbar'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        navLinks: document.getElementById('navLinks'),
        programSearch: document.getElementById('programSearch'),
        clearSearch: document.getElementById('clearSearch'),
        programsGrid: document.getElementById('programsGrid'),
        noResults: document.getElementById('noResults'),
        enrollForm: document.getElementById('enrollForm'),
        programModal: document.getElementById('programModal'),
        modalBody: document.getElementById('modalBody'),
        modalClose: document.getElementById('modalClose'),
        termsModal: document.getElementById('termsModal'),
        termsModalClose: document.getElementById('termsModalClose'),
        termsLink: document.getElementById('termsLink'),
        acceptTerms: document.getElementById('acceptTerms'),
        backToTop: document.getElementById('backToTop'),
        toastContainer: document.getElementById('toastContainer')
    };

    // ===== Utility Functions =====
    const utils = {
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        showToast: (message, type = 'info', title = 'Notificación') => {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.setAttribute('role', 'alert');
            
            const icons = {
                success: 'fa-check-circle',
                error: 'fa-exclamation-circle',
                info: 'fa-info-circle'
            };

            toast.innerHTML = `
                <i class="fas ${icons[type]}" aria-hidden="true"></i>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close" aria-label="Cerrar notificación">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            `;

            elements.toastContainer.appendChild(toast);

            // Auto-remove
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100px)';
                setTimeout(() => toast.remove(), 300);
            }, CONFIG.toastDuration);

            // Close button
            toast.querySelector('.toast-close').addEventListener('click', () => {
                toast.remove();
            });
        },

        validateEmail: (email) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },

        validatePhone: (phone) => {
            if (!phone) return true; // Optional field
            return /^[\+]?[0-9\s\-\(\)]{7,15}$/.test(phone);
        },

        validateName: (name) => {
            return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,50}$/.test(name);
        },

        scrollToElement: (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    // ===== Navbar Scroll Effect =====
    const handleNavbarScroll = () => {
        if (window.scrollY > CONFIG.scrollThreshold) {
            elements.navbar.classList.add('scrolled');
            elements.backToTop?.classList.remove('hidden');
            elements.backToTop?.removeAttribute('hidden');
        } else {
            elements.navbar.classList.remove('scrolled');
            if (window.scrollY < 100) {
                elements.backToTop?.setAttribute('hidden', '');
            }
        }
    };

    window.addEventListener('scroll', utils.debounce(handleNavbarScroll, 100));
    handleNavbarScroll(); // Initial check

    // ===== Mobile Menu Toggle =====
    const toggleMobileMenu = () => {
        const isActive = elements.navLinks.classList.toggle('active');
        elements.mobileMenuBtn.setAttribute('aria-expanded', isActive);
        
        const icon = elements.mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars', !isActive);
        icon.classList.toggle('fa-times', isActive);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    elements.mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    elements.navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (elements.navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.navLinks?.classList.contains('active')) {
            toggleMobileMenu();
            elements.mobileMenuBtn?.focus();
        }
    });

    // ===== Program Search & Filter =====
    const filterPrograms = utils.debounce((query) => {
        const searchTerm = query.toLowerCase().trim();
        const cards = elements.programsGrid?.querySelectorAll('.program-card') || [];
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const matches = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
            
            if (matches) {
                card.style.display = '';
                card.setAttribute('aria-hidden', 'false');
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.setAttribute('aria-hidden', 'true');
            }
        });

        // Show/hide no results message
        if (elements.noResults) {
            elements.noResults.hidden = visibleCount > 0 || !searchTerm;
        }

        // Show/hide clear button
        if (elements.clearSearch) {
            elements.clearSearch.hidden = !searchTerm;
        }
    }, 300);

    elements.programSearch?.addEventListener('input', (e) => {
        filterPrograms(e.target.value);
    });

    elements.clearSearch?.addEventListener('click', () => {
        if (elements.programSearch) {
            elements.programSearch.value = '';
            elements.programSearch.focus();
            filterPrograms('');
        }
    });

    // ===== Program Cards Interaction =====
    const openProgramModal = (programKey) => {
        const program = PROGRAMS[programKey];
        if (!program || !elements.modalBody) return;

        const content = `
            <div class="modal-program-header">
                <div class="modal-program-icon">
                    <i class="fas ${program.icon}" aria-hidden="true"></i>
                </div>
                <div class="modal-program-title">
                    <h3>${program.title}</h3>
                    <span class="program-subtitle">${program.subtitle}</span>
                </div>
            </div>
            
            <p style="margin-bottom: 24px; color: var(--text-light);">${program.description}</p>
            
            <div class="modal-meta">
                <div class="meta-item">
                    <strong>${program.duration}</strong>
                    <span>Duración</span>
                </div>
                <div class="meta-item">
                    <strong>${program.schedule}</strong>
                    <span>Horarios</span>
                </div>
                <div class="meta-item">
                    <strong>${program.modality}</strong>
                    <span>Modalidad</span>
                </div>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-brain" aria-hidden="true"></i> Competencias a Desarrollar</h4>
                <ul>
                    ${program.competencies.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-briefcase" aria-hidden="true"></i> Salidas Laborales</h4>
                <ul>
                    ${program.career.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-clipboard-list" aria-hidden="true"></i> Requisitos de Ingreso</h4>
                <ul>
                    ${program.requirements.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>

            ${program.testimonial ? `
            <div class="modal-section" style="background: var(--surface-color); padding: 20px; border-radius: 12px; margin-top: 24px;">
                <h4><i class="fas fa-quote-left" aria-hidden="true"></i> Testimonio</h4>
                <p style="font-style: italic; margin-bottom: 8px;">"${program.testimonial.quote}"</p>
                <p style="font-weight: 600; color: var(--primary-dark);">— ${program.testimonial.author}</p>
            </div>
            ` : ''}

            <div class="modal-cta">
                <a href="#admissions" class="btn btn-primary" onclick="closeModal('programModal'); utils.scrollToElement('admissions'); return false;">
                    <i class="fas fa-user-plus" aria-hidden="true"></i> Inscribirme
                </a>
                <button class="btn btn-secondary" onclick="closeModal('programModal')" style="background: var(--surface-color); color: var(--text-color); border-color: var(--border-color);">
                    <i class="fas fa-times" aria-hidden="true"></i> Cerrar
                </button>
            </div>
        `;

        elements.modalBody.innerHTML = content;
        document.getElementById('modalTitle').textContent = program.title;
        openModal('programModal');
    };

    // Attach click/keyboard events to program cards
    document.querySelectorAll('.program-card').forEach(card => {
        const programKey = card.dataset.program;
        
        const openHandler = () => openProgramModal(programKey);
        
        card.addEventListener('click', openHandler);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openHandler();
            }
        });
    });

    // ===== Modal System =====
    let lastFocusedElement = null;

    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Store last focused element for focus restoration
        lastFocusedElement = document.activeElement;

        // Show modal
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus first focusable element
        const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusable?.focus();

        // Trap focus within modal
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        const trapFocus = (e) => {
            if (e.key !== 'Tab') return;
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        };

        modal.addEventListener('keydown', trapFocus);
        modal._trapFocusHandler = trapFocus;
    };

    window.closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Hide modal
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Remove focus trap
        if (modal._trapFocusHandler) {
            modal.removeEventListener('keydown', modal._trapFocusHandler);
            delete modal._trapFocusHandler;
        }
        
        // Restore focus
        lastFocusedElement?.focus();
    };

    // Modal close buttons
    elements.modalClose?.addEventListener('click', () => closeModal('programModal'));
    elements.termsModalClose?.addEventListener('click', () => closeModal('termsModal'));

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                const modal = overlay.closest('.modal');
                if (modal) closeModal(modal.id);
            }
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not([hidden])');
            if (openModal) closeModal(openModal.id);
        }
    });

    // Terms link opens terms modal
    elements.termsLink?.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('termsModal');
    });

    elements.acceptTerms?.addEventListener('click', () => {
        closeModal('termsModal');
    });

    // ===== Form Handling with Validation =====
    const form = elements.enrollForm;
    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        program: document.getElementById('program'),
        terms: document.getElementById('terms')
    };

    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        program: document.getElementById('programError'),
        terms: document.getElementById('termsError')
    };

    // Load saved form data
    const loadFormData = () => {
        try {
            const saved = localStorage.getItem(CONFIG.formStorageKey);
            if (saved) {
                const data = JSON.parse(saved);
                if (fields.name) fields.name.value = data.name || '';
                if (fields.email) fields.email.value = data.email || '';
                if (fields.phone) fields.phone.value = data.phone || '';
                if (fields.program) fields.program.value = data.program || '';
            }
        } catch (e) {
            console.warn('Could not load form data:', e);
        }
    };

    // Save form data on input
    const saveFormData = () => {
        try {
            const data = {
                name: fields.name?.value || '',
                email: fields.email?.value || '',
                phone: fields.phone?.value || '',
                program: fields.program?.value || ''
            };
            localStorage.setItem(CONFIG.formStorageKey, JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save form data:', e);
        }
    };

    // Real-time validation
    const validateField = (field, errorEl) => {
        if (!field || !errorEl) return true;
        
        let isValid = true;
        let message = '';

        if (field.required && !field.value.trim()) {
            isValid = false;
            message = 'Este campo es requerido';
        } else if (field.name === 'email' && field.value && !utils.validateEmail(field.value)) {
            isValid = false;
            message = 'Ingresa un correo electrónico válido';
        } else if (field.name === 'name' && field.value && !utils.validateName(field.value)) {
            isValid = false;
            message = 'Ingresa un nombre válido (3-50 caracteres, solo letras)';
        } else if (field.name === 'phone' && field.value && !utils.validatePhone(field.value)) {
            isValid = false;
            message = 'Ingresa un teléfono válido';
        }

        if (!isValid) {
            field.classList.add('error');
            errorEl.textContent = message;
            field.setAttribute('aria-invalid', 'true');
        } else {
            field.classList.remove('error');
            errorEl.textContent = '';
            field.setAttribute('aria-invalid', 'false');
        }

        return isValid;
    };

    // Attach validation events
    Object.entries(fields).forEach(([key, field]) => {
        if (!field) return;
        
        // Real-time validation on blur
        field.addEventListener('blur', () => {
            if (errors[key]) {
                validateField(field, errors[key]);
            }
        });

        // Clear error on input
        field.addEventListener('input', () => {
            if (field.classList.contains('error') && errors[key]) {
                field.classList.remove('error');
                errors[key].textContent = '';
                field.setAttribute('aria-invalid', 'false');
            }
            // Auto-save on input
            if (key !== 'terms') saveFormData();
        });
    });

    // Form submission
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all required fields
        const isNameValid = validateField(fields.name, errors.name);
        const isEmailValid = validateField(fields.email, errors.email);
        const isProgramValid = validateField(fields.program, errors.program);
        const isTermsValid = fields.terms?.checked || (validateField(fields.terms, errors.terms) && (errors.terms.textContent = 'Debes aceptar los términos', false));

        if (!fields.terms?.checked) {
            errors.terms.textContent = 'Debes aceptar los términos y condiciones';
        }

        if (!isNameValid || !isEmailValid || !isProgramValid || !fields.terms?.checked) {
            utils.showToast('Por favor corrige los errores en el formulario', 'error', 'Validación');
            
            // Focus first error field
            if (!isNameValid) fields.name?.focus();
            else if (!isEmailValid) fields.email?.focus();
            else if (!isProgramValid) fields.program?.focus();
            else fields.terms?.focus();
            
            return;
        }

        // Show loading state
        const submitBtn = document.getElementById('submitBtn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            utils.showToast('¡Solicitud enviada exitosamente! Te contactaremos pronto.', 'success', 'Éxito');
            form.reset();
            localStorage.removeItem(CONFIG.formStorageKey);

        } catch (error) {
            utils.showToast('Ocurrió un error al enviar. Por favor intenta nuevamente.', 'error', 'Error');
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    // Load saved data on page load
    loadFormData();

    // ===== Back to Top Button =====
    elements.backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Scroll Animations (Intersection Observer) =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.substring(1);
            utils.scrollToElement(targetId);
        });
    });

    // ===== Keyboard Navigation Enhancement =====
    // Make program cards focusable and accessible
    document.querySelectorAll('.program-card[tabindex="0"]').forEach(card => {
        card.addEventListener('focus', function() {
            this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });

    // ===== Performance: Lazy Load Images (if any added later) =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===== Analytics Hook (Placeholder) =====
    const trackEvent = (category, action, label) => {
        // Placeholder for analytics integration
        // Example: gtag('event', action, { event_category: category, event_label: label });
        console.log(`[Analytics] ${category}: ${action} - ${label}`);
    };

    // Track program views
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', () => {
            const programName = card.querySelector('h3')?.textContent;
            trackEvent('Program', 'View Details', programName);
        });
    });

    // Track form submissions
    form?.addEventListener('submit', () => {
        const program = fields.program?.value;
        trackEvent('Form', 'Submit', `Program: ${program}`);
    });

    // ===== Initialization Complete =====
    console.log('✅ NAFOEM Website initialized with enhanced features');
});

// Make closeModal available globally for inline onclick handlers
window.closeModal = window.closeModal || (() => {});
window.utils = window.utils || {};
