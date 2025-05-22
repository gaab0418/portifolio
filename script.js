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
  const skillCategories = document.querySelectorAll(".skill-category");
  const skillTagsContainer = document.querySelector(".skill-tags");

  // Define skill tags for each category

  function updateSkillTags(category) {
    skillTagsContainer.innerHTML = "";

    // Handle font awesome icon classes that might be missing

    const skillsToShow = skillTagsData[category] || skillTagsData["Expertise"];

    skillsToShow.forEach((skill) => {
      const iconClass = iconMap[skill.icon] || skill.icon;
      const skillTag = document.createElement("div");
      skillTag.className = "skill-tag";
      skillTag.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${skill.text}`;

      // Add animation effect
      skillTag.style.opacity = "0";
      skillTag.style.transform = "translateY(10px)";

      skillTagsContainer.appendChild(skillTag);

      // Trigger animation after a slight delay
      setTimeout(() => {
        skillTag.style.transition = "all 0.3s ease";
        skillTag.style.opacity = "1";
        skillTag.style.transform = "translateY(0)";
      }, 50);
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

    setTimeout(typeWriter, 500);
  }

  // ===== Interactive Work Items =====
  const workItems = document.querySelectorAll(".work-item");

  workItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Add a subtle highlight effect
      this.style.backgroundColor = "rgba(40, 40, 40, 0.7)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "rgba(30, 30, 30, 0.5)";
    });
  });

  // ===== Share Functionality =====
  const shareButton = document.querySelector(".header-action:first-child");

  if (shareButton) {
    shareButton.addEventListener("click", function (e) {
      e.preventDefault();

      if (navigator.share) {
        navigator
          .share({
            title: "John Walker - Product Designer Portfolio",
            text: "Check out John Walker's portfolio",
            url: window.location.href,
          })
          .catch((error) => console.log("Error sharing:", error));
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = window.location.href;
        navigator.clipboard.writeText(shareUrl).then(() => {
          // Create a temporary tooltip
          const tooltip = document.createElement("div");
          tooltip.textContent = "Link copied to clipboard!";
          tooltip.style.position = "fixed";
          tooltip.style.left = "50%";
          tooltip.style.bottom = "20px";
          tooltip.style.transform = "translateX(-50%)";
          tooltip.style.backgroundColor = "rgba(92, 107, 192, 0.9)";
          tooltip.style.color = "white";
          tooltip.style.padding = "10px 20px";
          tooltip.style.borderRadius = "4px";
          tooltip.style.zIndex = "1000";

          document.body.appendChild(tooltip);

          setTimeout(() => {
            tooltip.style.opacity = "0";
            tooltip.style.transition = "opacity 0.5s ease";
            setTimeout(() => document.body.removeChild(tooltip), 500);
          }, 2000);
        });
      }
    });
  }
});
