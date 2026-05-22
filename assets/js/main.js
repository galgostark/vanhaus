/* ==========================================================================
   VANHAUS CUSTOM JS - RESPONSIVE NAV, SCROLL REVEAL, FILTERS & MODALS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. ACTIVE PAGE MENU HIGHLIGHTING ---
  highlightActiveLink();

  // --- 2. HEADER SCROLL BEHAVIOR ---
  const header = document.querySelector('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run initially in case page loaded already scrolled

  // --- 3. MOBILE HAMBURGER MENU ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.classList.contains('menu-open');
      if (isOpen) {
        // Close menu
        mobileMenuBtn.classList.remove('menu-open');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        document.body.style.overflow = '';
      } else {
        // Open menu
        mobileMenuBtn.classList.add('menu-open');
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu on clicking any navigation link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('menu-open');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 4. SCROLL REVEAL ENGINE ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to track it anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before coming into view
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // --- 5. PORTFOLIO FILTER SYSTEM (on portafolio.html) ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('bg-brand-red', 'text-white');
          btn.classList.add('bg-transparent', 'text-black', 'border-black');
        });

        // Add active class to clicked button
        button.classList.remove('bg-transparent', 'text-black', 'border-black');
        button.classList.add('bg-brand-red', 'text-white');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          // Add transition effect
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          
          setTimeout(() => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.classList.remove('hidden');
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 50);
            } else {
              item.classList.add('hidden');
            }
          }, 300);
        });
      });
    });
  }

  // --- 6. PORTFOLIO DETAIL MODAL SYSTEM ---
  const projectDetails = {
    'mineria-1': {
      title: 'Campaña Minera Horizonte Verde',
      category: 'Minería / Estrategia',
      desc: 'Desarrollamos una estrategia integral de comunicación y branding sostenible para el consorcio minero internacional. El reto consistía en posicionar las prácticas de minería responsable e innovación tecnológica ante inversionistas institucionales y comunidades locales.',
      results: 'Aumento del 42% en la percepción positiva local, 100% de cumplimiento en metas informativas del EIA y producción audiovisual de nivel cinematográfico que ganó premios sectoriales.',
      img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      client: 'Corporación Minera del Norte',
      year: '2025'
    },
    'branding-1': {
      title: 'Rebranding Corporativo Apex',
      category: 'Branding',
      desc: 'Rediseñamos la identidad de marca de la consultora tecnológica Apex. Creamos un sistema visual dinámico, un logotipo geométrico modular y un manual de marca digital enfocado en la simplicidad y el impacto cromático, uniendo tecnología con humanidad.',
      results: 'Implementación exitosa en 6 sucursales internacionales, incremento de tráfico web del 65% posterior al lanzamiento y posicionamiento premium consistente en todos los canales digitales.',
      img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
      client: 'Apex Global Consulting',
      year: '2025'
    },
    'audio-1': {
      title: 'Spot Audiovisual "El Futuro del Cacao"',
      category: 'Producción Audiovisual',
      desc: 'Dirección, producción y postproducción de un documental corporativo y spot de campaña en alta definición para una marca chocolatera gourmet. Capturamos la belleza natural de las plantaciones y la dedicación de los agricultores mediante tomas aéreas con drones y sonido envolvente.',
      results: 'Más de 1.2 millones de reproducciones orgánicas en plataformas digitales, incremento del 30% en ventas retail del producto promocionado y una pieza de arte audiovisual duradera.',
      img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      client: 'Cacao Real Co.',
      year: '2024'
    },
    'estrategia-1': {
      title: 'Estrategia de Transformación Digital',
      category: 'Estrategia Digital',
      desc: 'Planificación de la hoja de ruta y desarrollo de ecosistemas digitales completos para el gigante logístico Transmeridian. Rediseño de flujos UX de clientes, automatización de marketing y desarrollo de una app de rastreo de marca blanca.',
      results: 'Reducción del costo de adquisición de clientes en un 28%, aumento del NPS en 18 puntos y digitalización del 90% de las cotizaciones comerciales.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      client: 'Transmeridian Logistics',
      year: '2025'
    },
    'mineria-2': {
      title: 'Video Inducción de Seguridad Minera',
      category: 'Minería / Audiovisual',
      desc: 'Producción de una serie de videos en formato interactivo e inmersivo 3D y real para capacitación en seguridad ocupacional en minas subterráneas. El proyecto incluyó animaciones de maquinaria pesada e infografías animadas altamente comprensibles.',
      results: 'Reducción del 95% en tiempos de inducción física de personal, y certificación de excelencia por el Ministerio de Energía y Minas.',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      client: 'Compañía de Oro Los Andes',
      year: '2024'
    },
    'branding-2': {
      title: 'Identidad Visual Vanhaus Premium',
      category: 'Branding',
      desc: 'Nuestra propia identidad. Diseñamos un sistema visual sólido, enérgico e innovador que representa nuestro enfoque tecnológico y cinematográfico. La flecha de 4 puntas roja simboliza el camino hacia adelante, la precisión técnica y la excelencia en el norte digital.',
      results: 'Creación de un activo de marca altamente reconocible, que resalta con gran autoridad en entornos competitivos de marketing digital y diseño corporativo.',
      img: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=1200&q=80',
      client: 'Vanhaus Labs',
      year: '2026'
    }
  };

  const projectCards = document.querySelectorAll('[data-project-id]');
  const modal = document.getElementById('project-modal');
  
  if (projectCards.length > 0 && modal) {
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');
    const modalResults = document.getElementById('modal-results');
    const modalClient = document.getElementById('modal-client');
    const modalYear = document.getElementById('modal-year');
    const modalClose = document.getElementById('modal-close');

    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = card.getAttribute('data-project-id');
        const data = projectDetails[projectId];

        if (data) {
          // Set Modal content
          modalImg.src = data.img;
          modalImg.alt = data.title;
          modalTitle.textContent = data.title;
          modalCategory.textContent = data.category;
          modalDesc.textContent = data.desc;
          modalResults.textContent = data.results;
          modalClient.textContent = data.client;
          modalYear.textContent = data.year;

          // Open Modal
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          document.body.style.overflow = 'hidden'; // Lock scrolling
        }
      });
    });

    // Close function
    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = ''; // Unlock scrolling
    };

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Close on click outside modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  // --- 7. CONTACT FORM VALIDATION & SIMULATION (on contacto.html) ---
  const contactForm = document.getElementById('vanhaus-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Select fields
      const nameInput = document.getElementById('nombre');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('telefono');
      const serviceInput = document.getElementById('servicio');
      const messageInput = document.getElementById('mensaje');
      
      let isValid = true;

      // Simple Validation helper
      const setError = (input, message) => {
        isValid = false;
        const group = input.parentElement;
        let errorEl = group.querySelector('.error-msg');
        
        if (!errorEl) {
          errorEl = document.createElement('p');
          errorEl.className = 'error-msg text-brand-red text-xs mt-1 font-semibold';
          group.appendChild(errorEl);
        }
        errorEl.textContent = message;
        input.classList.add('border-brand-red');
        input.classList.remove('border-gray-300', 'border-black');
      };

      const clearError = (input) => {
        const group = input.parentElement;
        const errorEl = group.querySelector('.error-msg');
        if (errorEl) {
          errorEl.remove();
        }
        input.classList.remove('border-brand-red');
        input.classList.add('border-gray-300');
      };

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, 'El nombre es obligatorio.');
      } else {
        clearError(nameInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        setError(emailInput, 'El correo electrónico es obligatorio.');
      } else if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Introduce un formato de correo electrónico válido.');
      } else {
        clearError(emailInput);
      }

      // Validate Phone (optional but must be numbers if filled)
      const phoneRegex = /^[0-9+\s-]{7,15}$/;
      if (phoneInput.value.trim() && !phoneRegex.test(phoneInput.value.trim())) {
        setError(phoneInput, 'Introduce un número de teléfono válido (solo números y signos + o -).');
      } else {
        clearError(phoneInput);
      }

      // Validate Service dropdown
      if (!serviceInput.value) {
        setError(serviceInput, 'Selecciona un servicio de tu interés.');
      } else {
        clearError(serviceInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setError(messageInput, 'El mensaje debe tener al menos 10 caracteres.');
      } else {
        clearError(messageInput);
      }

      // Submission simulation
      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Procesando...
        `;

        setTimeout(() => {
          // Trigger Success notification
          showToast('¡Mensaje enviado con éxito! Nos pondremos en contacto muy pronto.');
          
          // Reset form
          contactForm.reset();
          
          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 1800);
      }
    });
  }

  // --- 8. SUCCESS TOAST ALERT NOTIFICATION ---
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full p-4 md:p-0';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-success bg-brand-black text-white p-4 rounded-lg shadow-2xl border-l-4 border-brand-red flex items-start gap-3';
    toast.innerHTML = `
      <svg class="w-6 h-6 text-brand-red shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div>
        <p class="font-bold text-sm tracking-tight font-title">Enviado Correctamente</p>
        <p class="text-xs text-gray-400 mt-0.5">${message}</p>
      </div>
    `;

    container.appendChild(toast);

    // Auto remove after animation completes
    setTimeout(() => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    }, 4000);
  }

  // --- 9. HELPERS ---
  function highlightActiveLink() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop() || 'index.html';
    
    const desktopLinks = document.querySelectorAll('header nav a');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    
    const highlight = (links) => {
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === pageName || (pageName === 'index.html' && href === '/')) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    highlight(desktopLinks);
    highlight(mobileLinks);
  }
});
