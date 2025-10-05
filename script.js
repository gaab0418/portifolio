const anoAtual = new Date().getFullYear();
const anosExperiencia = anoAtual - 2023;
const projetosConcluidos = 5 + "+";
const melhoriasRealizadas = 100 + "+";

const skillTagsData = {
  Expertise: [
    { icon: "fa-user", text: "Solução de problemas" },
    { icon: "fa-display", text: "Banco de Dados" },
    { icon: "fa-pencil", text: "API's" },
    { icon: "fa-shapes", text: "Controle de Versionamento" },
  ],
  Linguagens: [
    { icon: "fa-industry", text: "ADVPL" },
    { icon: "fa-code", text: "Java" },
    { icon: "fa-code", text: "Python" },
    { icon: "fa-code", text: "HTML/CSS" },
    { icon: "fa-code", text: "JavaScript" },
    { icon: "fa-database", text: "Oracle" },
    { icon: "fa-database", text: "Mysql" },
  ]
};
const iconMap = {};

document.getElementById("qntsAnosExperiencia").innerHTML = anosExperiencia;
document.getElementById("qntsProjetosConcluidos").innerHTML =
  projetosConcluidos;
document.getElementById("qntsMelhoriasRealizadas").innerHTML =
  melhoriasRealizadas;
document.getElementById("year").innerHTML = anoAtual;

// Espera o DOM ser completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // ===== Scroll Indicator =====
  function updateScrollIndicator() {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    document.querySelector(".scroll-indicator").style.width = scrolled + "%";
  }

  window.addEventListener("scroll", updateScrollIndicator);

  // ===== Navigation Dots =====
  const sections = document.querySelectorAll("section[id]");
  const navDots = document.querySelectorAll(".nav-dot");

  // Corrigindo a detecção de seções ativas para lidar melhor com a primeira e última seção
  function highlightNavDot() {
    // Obtendo a posição de rolagem com ajuste
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Flag para verificar se alguma seção está ativa
    let anyActive = false;

    // Verificar se está no topo da página para ativar a primeira seção
    if (window.scrollY < 100) {
      navDots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.getAttribute("data-section") === "sobre") {
          dot.classList.add("active");
        }
      });
      anyActive = true;
    } else {
      // Para todas as outras seções
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Ajuste para melhor detecção
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        // Lógica especial para a última seção (contato)
        if (sectionId === "contact") {
          // Se estivermos próximos do final da página
          if (
            window.scrollY + window.innerHeight >
            document.documentElement.scrollHeight - 300
          ) {
            navDots.forEach((dot) => {
              dot.classList.remove("active");
              if (dot.getAttribute("data-section") === "contact") {
                dot.classList.add("active");
                anyActive = true;
              }
            });
          }
        }
        // Lógica normal para outras seções
        else if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          navDots.forEach((dot) => {
            dot.classList.remove("active");
            if (dot.getAttribute("data-section") === sectionId) {
              dot.classList.add("active");
              anyActive = true;
            }
          });
        }
      });
    }

    // Se nenhuma seção foi detectada como ativa e estamos próximos do final
    if (
      !anyActive &&
      window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 300
    ) {
      // Ativar a última bolinha de navegação
      navDots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.getAttribute("data-section") === "contact") {
          dot.classList.add("active");
        }
      });
    }
  }

  window.addEventListener("scroll", highlightNavDot);
  // Chamar a função uma vez no carregamento para garantir que a primeira seção seja destacada
  setTimeout(highlightNavDot, 100);

  // Smooth scroll when clicking on nav dots
  navDots.forEach((dot) => {
    dot.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Ajuste do offset para considerar o cabeçalho fixo
        const offset = targetSectionId === "sobre" ? 0 : 100;

        window.scrollTo({
          top: targetSection.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });
  
    // ===== Skill Categories Toggle =====
    const skillCategories = document.querySelectorAll('.skill-category');
    const skillTagsContainer = document.querySelector('.skill-tags');
    
    // Define skill tags for each category
    const skillTagsData = {
      'Linguagens': [
        { icon: 'fa-solid fa-code', text: 'ADVPL' }, // ⚠️ Sem ícone oficial
        { icon: 'fa-brands fa-python', text: 'Python' },
        { icon: 'fa-brands fa-java', text: 'Java' },
        { icon: 'fa-brands fa-js', text: 'JavaScript' },
        { icon: 'fa-solid fa-moon', text: 'Lua' }
      ],
      'Bancos de Dados': [
        { icon: 'fa-solid fa-database', text: 'Oracle' },
        { icon: 'fa-solid fa-database', text: 'MySQL' },
        { icon: 'fa-solid fa-database', text: 'PostgreSQL' }
      ],
      'Ferramentas': [
        { icon: 'fa-brands fa-node-js', text: 'Node.js' },
        { icon: 'fa-solid fa-plug', text: 'APIs REST' },
        { icon: 'fa-solid fa-leaf', text: 'Spring' },
        { icon: 'fa-solid fa-link', text: 'Integrações' },
        { icon: 'fa-brands fa-react', text: 'React' },
        { icon: 'fa-solid fa-wind', text: 'TailwindCSS' }, // ⚠️ Sem ícone oficial
        { icon: 'fa-solid fa-paper-plane', text: 'Postman' } // ⚠️ Sem ícone oficial
      ],
      'IA/Automação': [
        { icon: 'fa-solid fa-robot', text: 'IA/ML' },
        { icon: 'fa-solid fa-brain', text: 'Machine Learning' },
        { icon: 'fa-solid fa-diagram-project', text: 'N8N' }, // ⚠️ Sem ícone oficial
        { icon: 'fa-solid fa-bolt', text: 'Automação' }
      ]
    };
    
    function updateSkillTags(category) {
      skillTagsContainer.innerHTML = '';
      
      const skillsToShow = skillTagsData[category] || skillTagsData['Linguagens'];
      
      skillsToShow.forEach((skill, index) => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        
        // Check if icon already has class prefix, otherwise add fa-solid
        const iconClass = skill.icon.includes('fa-') ? skill.icon : `fa-solid ${skill.icon}`;
        skillTag.innerHTML = `<i class="${iconClass}"></i> ${skill.text}`;
        
        // Add animation effect
        skillTag.style.opacity = '0';
        skillTag.style.transform = 'translateY(10px)';
        
        skillTagsContainer.appendChild(skillTag);
        
        // Trigger animation after a slight delay
        setTimeout(() => {
          skillTag.style.transition = 'all 0.3s ease';
          skillTag.style.opacity = '1';
          skillTag.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }
    
    // Initialize with first category (Linguagens)
    updateSkillTags('Linguagens');
    
    skillCategories.forEach(category => {
      category.addEventListener('click', function() {
        skillCategories.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        // Get category name from text content (remove icon)
        const categoryName = this.textContent.trim();
        updateSkillTags(categoryName);
      });
    });
  }

  skillCategories.forEach((category) => {
    category.addEventListener("click", function () {
      skillCategories.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");

      const categoryName = this.textContent.trim().replace(/ .*/, "");
      updateSkillTags(categoryName);
    });
  });

  // ===== Projects Section Filter (if you add it) =====
  // This will be activated if you add a projects section with filter buttons
  const projectFilters = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (projectFilters.length > 0) {
    projectFilters.forEach((filter) => {
      filter.addEventListener("click", function () {
        projectFilters.forEach((f) => f.classList.remove("active"));
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        projectCards.forEach((card) => {
          if (filterValue === "all") {
            card.style.display = "block";
          } else if (!card.classList.contains(filterValue)) {
            card.style.display = "none";
          } else {
            card.style.display = "block";
          }
        });
      });
    });
  }

  // ===== Animation on Scroll =====
  // Add animation for elements with animation classes
  const animateElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up"
  );

  function animateOnScroll() {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.visibility = "visible";
        if (element.classList.contains("animate-fade-in")) {
          element.style.animation = "fadeIn 0.8s ease forwards";
        } else if (element.classList.contains("animate-slide-up")) {
          element.style.animation = "slideUp 0.8s ease forwards";
        }
      }
    });
  }

  // Initially hide all animate elements
  animateElements.forEach((element) => {
    element.style.visibility = "hidden";
  });

  window.addEventListener("scroll", animateOnScroll);
  // Trigger once on load
  setTimeout(animateOnScroll, 500);

  // ===== Dark/Light Theme Toggle =====
  // Add this feature only if you add a theme toggle button to the HTML
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light-theme");

      // Update toggle icon if needed
      if (document.body.classList.contains("light-theme")) {
        this.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
        this.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    });
  }

  // ===== Typed.js Effect for sobre Section =====
  // Create dynamic text effect in sobre section
  const sobreTitle = document.querySelector(".sobre-content h1");
  if (sobreTitle) {
    const originalText = sobreTitle.textContent;
    sobreTitle.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        sobreTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
  
  // ===== Dynamic Footer =====
  const footer = document.getElementById('footer');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `© ${currentYear} Gabriel Chiarelli - Desenvolvedor Back-End. Todos os direitos reservados.`;
  }
  
  // ===== Copy Email to Clipboard =====
  const emailCopy = document.getElementById('email-copy');
  if (emailCopy) {
    emailCopy.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = this.getAttribute('data-email');
      
      // Copy to clipboard
      navigator.clipboard.writeText(email).then(() => {
        // Create tooltip notification
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Email copiado!';
        tooltip.style.position = 'fixed';
        tooltip.style.left = '50%';
        tooltip.style.bottom = '30px';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.backgroundColor = '#5c6bc0';
        tooltip.style.color = 'white';
        tooltip.style.padding = '12px 24px';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '14px';
        tooltip.style.fontWeight = '600';
        tooltip.style.zIndex = '10000';
        tooltip.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        tooltip.style.transition = 'opacity 0.3s ease';
        
        document.body.appendChild(tooltip);
        
        // Remove tooltip after 2 seconds
        setTimeout(() => {
          tooltip.style.opacity = '0';
          setTimeout(() => document.body.removeChild(tooltip), 300);
        }, 2000);
      }).catch(err => {
        console.error('Erro ao copiar email:', err);
        alert('Erro ao copiar email. Por favor, copie manualmente: ' + email);
      });
    });
  }
  
  // ===== Tooltip functionality for technology logos =====
  const brandLogos = document.querySelectorAll('.brand-logo');
  
  brandLogos.forEach(logo => {
    // Create wrapper
    const wrapper = document.createElement('span');
    wrapper.className = 'brand-logo-wrapper';
    
    // Wrap the logo
    logo.parentNode.insertBefore(wrapper, logo);
    wrapper.appendChild(logo);
    
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    const titleText = logo.getAttribute('title');
    tooltip.textContent = titleText;
    
    // Remove title attribute to prevent default browser tooltip
    logo.removeAttribute('title');
    
    // Add tooltip to wrapper
    wrapper.appendChild(tooltip);
    
    // Show tooltip on mouse enter
    wrapper.addEventListener('mouseenter', function() {
      tooltip.classList.add('show');
    });
    
    // Hide tooltip on mouse leave
    wrapper.addEventListener('mouseleave', function() {
      tooltip.classList.remove('show');
    });
  });
});
