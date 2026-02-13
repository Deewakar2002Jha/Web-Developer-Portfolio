<<<<<<< HEAD
const defaultConfig = {
        hero_name: "Deewakar Jha",
        hero_title: "Web Developer & Freelancer",
        hero_tagline:
          "Passionate about building responsive, user-friendly, and performance-optimized websites that deliver exceptional digital experiences.",
        bachelor_title: "Bachelor of Science in Computer Science",
        bachelor_institution: "Stanford University, 2020",
        bachelor_description:
          "My undergraduate education provided me with a solid foundation in software engineering principles, algorithms, and data structures. This background enables me to build scalable, efficient web applications.",
        master_title: "Master of Science in Computer Science",
        master_institution: "MIT, 2022",
        master_description:
          "My master's degree focused on advanced software architecture, machine learning, and distributed systems. This specialized knowledge allows me to tackle complex technical challenges and implement cutting-edge solutions.",
        linkedin_url: "https://linkedin.com/in/yourprofile",
        github_url: "https://github.com/yourusername",
        email_address: "your.email@example.com",
        cta_text: "Start Your Project",
        background_color: "#ffffff",
        surface_color: "#f8f9fa",
        text_color: "#1a202c",
        primary_action_color: "#3b82f6",
        secondary_action_color: "#8b5cf6",
      };

      async function onConfigChange(config) {
        const heroName = config.hero_name || defaultConfig.hero_name;
        const heroTitle = config.hero_title || defaultConfig.hero_title;
        const heroTagline = config.hero_tagline || defaultConfig.hero_tagline;
        const bachelorTitle =
          config.bachelor_title || defaultConfig.bachelor_title;
        const bachelorInstitution =
          config.bachelor_institution || defaultConfig.bachelor_institution;
        const bachelorDescription =
          config.bachelor_description || defaultConfig.bachelor_description;
        const masterTitle = config.master_title || defaultConfig.master_title;
        const masterInstitution =
          config.master_institution || defaultConfig.master_institution;
        const masterDescription =
          config.master_description || defaultConfig.master_description;
        const linkedinUrl = config.linkedin_url || defaultConfig.linkedin_url;
        const githubUrl = config.github_url || defaultConfig.github_url;
        const emailAddress =
          config.email_address || defaultConfig.email_address;
        const ctaText = config.cta_text || defaultConfig.cta_text;

        const bgColor =
          config.background_color || defaultConfig.background_color;
        const surfaceColor =
          config.surface_color || defaultConfig.surface_color;
        const textColor = config.text_color || defaultConfig.text_color;
        const primaryColor =
          config.primary_action_color || defaultConfig.primary_action_color;
        const secondaryColor =
          config.secondary_action_color || defaultConfig.secondary_action_color;

        document.getElementById("hero-name").textContent = heroName;
        document.getElementById("hero-title").textContent = heroTitle;
        document.getElementById("hero-tagline").textContent = heroTagline;
        document.getElementById("bachelor-title").textContent = bachelorTitle;
        document.getElementById("bachelor-institution").textContent =
          bachelorInstitution;
        document.getElementById("bachelor-description").textContent =
          bachelorDescription;
        document.getElementById("master-title").textContent = masterTitle;
        document.getElementById("master-institution").textContent =
          masterInstitution;
        document.getElementById("master-description").textContent =
          masterDescription;
        document.getElementById("cta-text").textContent = ctaText;

        const linkedinLink = document.getElementById("linkedin-link");
        linkedinLink.href = linkedinUrl;

        const githubLink = document.getElementById("github-link");
        githubLink.href = githubUrl;

        const emailLink = document.getElementById("email-link");
        emailLink.href = `mailto:${emailAddress}`;

        document.documentElement.style.setProperty("--bg-primary", bgColor);
        document.documentElement.style.setProperty(
          "--bg-secondary",
          surfaceColor
        );
        document.documentElement.style.setProperty("--text-primary", textColor);
        document.documentElement.style.setProperty(
          "--accent-primary",
          primaryColor
        );
        document.documentElement.style.setProperty(
          "--accent-secondary",
          secondaryColor
        );
      }

      function mapToCapabilities(config) {
        return {
          recolorables: [
            {
              get: () =>
                config.background_color || defaultConfig.background_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ background_color: value });
                }
              },
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ surface_color: value });
                }
              },
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ text_color: value });
                }
              },
            },
            {
              get: () =>
                config.primary_action_color ||
                defaultConfig.primary_action_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ primary_action_color: value });
                }
              },
            },
            {
              get: () =>
                config.secondary_action_color ||
                defaultConfig.secondary_action_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({
                    secondary_action_color: value,
                  });
                }
              },
            },
          ],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined,
        };
      }

      function mapToEditPanelValues(config) {
        return new Map([
          ["hero_name", config.hero_name || defaultConfig.hero_name],
          ["hero_title", config.hero_title || defaultConfig.hero_title],
          ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
          [
            "bachelor_title",
            config.bachelor_title || defaultConfig.bachelor_title,
          ],
          [
            "bachelor_institution",
            config.bachelor_institution || defaultConfig.bachelor_institution,
          ],
          [
            "bachelor_description",
            config.bachelor_description || defaultConfig.bachelor_description,
          ],
          ["master_title", config.master_title || defaultConfig.master_title],
          [
            "master_institution",
            config.master_institution || defaultConfig.master_institution,
          ],
          [
            "master_description",
            config.master_description || defaultConfig.master_description,
          ],
          ["linkedin_url", config.linkedin_url || defaultConfig.linkedin_url],
          ["github_url", config.github_url || defaultConfig.github_url],
          [
            "email_address",
            config.email_address || defaultConfig.email_address,
          ],
          ["cta_text", config.cta_text || defaultConfig.cta_text],
        ]);
      }

      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange,
          mapToCapabilities,
          mapToEditPanelValues,
        });
      }

      // Smooth scrolling for navigation
      document.querySelectorAll("[data-nav]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("data-nav");
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Smooth scrolling for all internal links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").slice(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Carousel functionality
      const carousels = {};

      function initCarousel(carouselId) {
        carousels[carouselId] = {
          currentSlide: 0,
          totalSlides: document.querySelectorAll(
            `[data-carousel="${carouselId}"] .project-image`
          ).length,
        };
      }

      function updateCarousel(carouselId, newSlide) {
        const carousel = carousels[carouselId];
        if (!carousel) return;

        carousel.currentSlide = newSlide;
        const track = document.querySelector(
          `[data-carousel="${carouselId}"] .carousel-track`
        );
        track.style.transform = `translateX(-${newSlide * 100}%)`;

        // Update dots
        document
          .querySelectorAll(`[data-carousel-id="${carouselId}"][data-slide]`)
          .forEach((dot) => {
            dot.classList.remove("active");
            if (parseInt(dot.dataset.slide) === newSlide) {
              dot.classList.add("active");
            }
          });
      }

      // Initialize all carousels
      document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const carouselId = carousel.dataset.carousel;
        initCarousel(carouselId);
      });

      // Arrow navigation
      document.querySelectorAll(".carousel-arrow").forEach((arrow) => {
        arrow.addEventListener("click", () => {
          const carouselId = arrow.dataset.carouselId;
          const carousel = carousels[carouselId];
          if (!carousel) return;

          let newSlide;
          if (arrow.classList.contains("prev")) {
            newSlide =
              (carousel.currentSlide - 1 + carousel.totalSlides) %
              carousel.totalSlides;
          } else {
            newSlide = (carousel.currentSlide + 1) % carousel.totalSlides;
          }
          updateCarousel(carouselId, newSlide);
        });
      });

      // Dot navigation
      document.querySelectorAll(".carousel-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          const carouselId = dot.dataset.carouselId;
          const slideIndex = parseInt(dot.dataset.slide);
          updateCarousel(carouselId, slideIndex);
        });
      });

      // Sequential education card animation
      let currentCardIndex = 0;
      let cardAnimationStarted = false;
      const educationCards = document.querySelectorAll(".education-card");

      const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px",
      };

      const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardAnimationStarted) {
            cardAnimationStarted = true;
            showNextCard();
          }
        });
      }, observerOptions);

      function showNextCard() {
        // Hide all cards first
        educationCards.forEach((card) => {
          card.classList.remove("visible");
          card.classList.add("hidden");
        });

        // Show current card
        educationCards[currentCardIndex].classList.add("visible");
        educationCards[currentCardIndex].classList.remove("hidden");

        // Move to next card
        currentCardIndex = (currentCardIndex + 1) % educationCards.length;

        // Schedule next card after 5 seconds
        setTimeout(showNextCard, 5000);
      }

      const cardsContainer = document.querySelector(
        ".education-cards-container"
      );
      if (cardsContainer) {
        containerObserver.observe(cardsContainer);
      }
    
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9ba519dd464ea834',t:'MTc2NzgwNjE2Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();
=======
const defaultConfig = {
        hero_name: "Deewakar Jha",
        hero_title: "Web Developer & Freelancer",
        hero_tagline:
          "Passionate about building responsive, user-friendly, and performance-optimized websites that deliver exceptional digital experiences.",
        bachelor_title: "Bachelor of Science in Computer Science",
        bachelor_institution: "Stanford University, 2020",
        bachelor_description:
          "My undergraduate education provided me with a solid foundation in software engineering principles, algorithms, and data structures. This background enables me to build scalable, efficient web applications.",
        master_title: "Master of Science in Computer Science",
        master_institution: "MIT, 2022",
        master_description:
          "My master's degree focused on advanced software architecture, machine learning, and distributed systems. This specialized knowledge allows me to tackle complex technical challenges and implement cutting-edge solutions.",
        linkedin_url: "https://linkedin.com/in/yourprofile",
        github_url: "https://github.com/yourusername",
        email_address: "your.email@example.com",
        cta_text: "Start Your Project",
        background_color: "#ffffff",
        surface_color: "#f8f9fa",
        text_color: "#1a202c",
        primary_action_color: "#3b82f6",
        secondary_action_color: "#8b5cf6",
      };

      async function onConfigChange(config) {
        const heroName = config.hero_name || defaultConfig.hero_name;
        const heroTitle = config.hero_title || defaultConfig.hero_title;
        const heroTagline = config.hero_tagline || defaultConfig.hero_tagline;
        const bachelorTitle =
          config.bachelor_title || defaultConfig.bachelor_title;
        const bachelorInstitution =
          config.bachelor_institution || defaultConfig.bachelor_institution;
        const bachelorDescription =
          config.bachelor_description || defaultConfig.bachelor_description;
        const masterTitle = config.master_title || defaultConfig.master_title;
        const masterInstitution =
          config.master_institution || defaultConfig.master_institution;
        const masterDescription =
          config.master_description || defaultConfig.master_description;
        const linkedinUrl = config.linkedin_url || defaultConfig.linkedin_url;
        const githubUrl = config.github_url || defaultConfig.github_url;
        const emailAddress =
          config.email_address || defaultConfig.email_address;
        const ctaText = config.cta_text || defaultConfig.cta_text;

        const bgColor =
          config.background_color || defaultConfig.background_color;
        const surfaceColor =
          config.surface_color || defaultConfig.surface_color;
        const textColor = config.text_color || defaultConfig.text_color;
        const primaryColor =
          config.primary_action_color || defaultConfig.primary_action_color;
        const secondaryColor =
          config.secondary_action_color || defaultConfig.secondary_action_color;

        document.getElementById("hero-name").textContent = heroName;
        document.getElementById("hero-title").textContent = heroTitle;
        document.getElementById("hero-tagline").textContent = heroTagline;
        document.getElementById("bachelor-title").textContent = bachelorTitle;
        document.getElementById("bachelor-institution").textContent =
          bachelorInstitution;
        document.getElementById("bachelor-description").textContent =
          bachelorDescription;
        document.getElementById("master-title").textContent = masterTitle;
        document.getElementById("master-institution").textContent =
          masterInstitution;
        document.getElementById("master-description").textContent =
          masterDescription;
        document.getElementById("cta-text").textContent = ctaText;

        const linkedinLink = document.getElementById("linkedin-link");
        linkedinLink.href = linkedinUrl;

        const githubLink = document.getElementById("github-link");
        githubLink.href = githubUrl;

        const emailLink = document.getElementById("email-link");
        emailLink.href = `mailto:${emailAddress}`;

        document.documentElement.style.setProperty("--bg-primary", bgColor);
        document.documentElement.style.setProperty(
          "--bg-secondary",
          surfaceColor
        );
        document.documentElement.style.setProperty("--text-primary", textColor);
        document.documentElement.style.setProperty(
          "--accent-primary",
          primaryColor
        );
        document.documentElement.style.setProperty(
          "--accent-secondary",
          secondaryColor
        );
      }

      function mapToCapabilities(config) {
        return {
          recolorables: [
            {
              get: () =>
                config.background_color || defaultConfig.background_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ background_color: value });
                }
              },
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ surface_color: value });
                }
              },
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ text_color: value });
                }
              },
            },
            {
              get: () =>
                config.primary_action_color ||
                defaultConfig.primary_action_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({ primary_action_color: value });
                }
              },
            },
            {
              get: () =>
                config.secondary_action_color ||
                defaultConfig.secondary_action_color,
              set: (value) => {
                if (window.elementSdk) {
                  window.elementSdk.setConfig({
                    secondary_action_color: value,
                  });
                }
              },
            },
          ],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined,
        };
      }

      function mapToEditPanelValues(config) {
        return new Map([
          ["hero_name", config.hero_name || defaultConfig.hero_name],
          ["hero_title", config.hero_title || defaultConfig.hero_title],
          ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
          [
            "bachelor_title",
            config.bachelor_title || defaultConfig.bachelor_title,
          ],
          [
            "bachelor_institution",
            config.bachelor_institution || defaultConfig.bachelor_institution,
          ],
          [
            "bachelor_description",
            config.bachelor_description || defaultConfig.bachelor_description,
          ],
          ["master_title", config.master_title || defaultConfig.master_title],
          [
            "master_institution",
            config.master_institution || defaultConfig.master_institution,
          ],
          [
            "master_description",
            config.master_description || defaultConfig.master_description,
          ],
          ["linkedin_url", config.linkedin_url || defaultConfig.linkedin_url],
          ["github_url", config.github_url || defaultConfig.github_url],
          [
            "email_address",
            config.email_address || defaultConfig.email_address,
          ],
          ["cta_text", config.cta_text || defaultConfig.cta_text],
        ]);
      }

      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange,
          mapToCapabilities,
          mapToEditPanelValues,
        });
      }

      // Smooth scrolling for navigation
      document.querySelectorAll("[data-nav]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("data-nav");
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Smooth scrolling for all internal links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").slice(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // Carousel functionality
      const carousels = {};

      function initCarousel(carouselId) {
        carousels[carouselId] = {
          currentSlide: 0,
          totalSlides: document.querySelectorAll(
            `[data-carousel="${carouselId}"] .project-image`
          ).length,
        };
      }

      function updateCarousel(carouselId, newSlide) {
        const carousel = carousels[carouselId];
        if (!carousel) return;

        carousel.currentSlide = newSlide;
        const track = document.querySelector(
          `[data-carousel="${carouselId}"] .carousel-track`
        );
        track.style.transform = `translateX(-${newSlide * 100}%)`;

        // Update dots
        document
          .querySelectorAll(`[data-carousel-id="${carouselId}"][data-slide]`)
          .forEach((dot) => {
            dot.classList.remove("active");
            if (parseInt(dot.dataset.slide) === newSlide) {
              dot.classList.add("active");
            }
          });
      }

      // Initialize all carousels
      document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const carouselId = carousel.dataset.carousel;
        initCarousel(carouselId);
      });

      // Arrow navigation
      document.querySelectorAll(".carousel-arrow").forEach((arrow) => {
        arrow.addEventListener("click", () => {
          const carouselId = arrow.dataset.carouselId;
          const carousel = carousels[carouselId];
          if (!carousel) return;

          let newSlide;
          if (arrow.classList.contains("prev")) {
            newSlide =
              (carousel.currentSlide - 1 + carousel.totalSlides) %
              carousel.totalSlides;
          } else {
            newSlide = (carousel.currentSlide + 1) % carousel.totalSlides;
          }
          updateCarousel(carouselId, newSlide);
        });
      });

      // Dot navigation
      document.querySelectorAll(".carousel-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          const carouselId = dot.dataset.carouselId;
          const slideIndex = parseInt(dot.dataset.slide);
          updateCarousel(carouselId, slideIndex);
        });
      });

      // Sequential education card animation
      let currentCardIndex = 0;
      let cardAnimationStarted = false;
      const educationCards = document.querySelectorAll(".education-card");

      const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px",
      };

      const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cardAnimationStarted) {
            cardAnimationStarted = true;
            showNextCard();
          }
        });
      }, observerOptions);

      function showNextCard() {
        // Hide all cards first
        educationCards.forEach((card) => {
          card.classList.remove("visible");
          card.classList.add("hidden");
        });

        // Show current card
        educationCards[currentCardIndex].classList.add("visible");
        educationCards[currentCardIndex].classList.remove("hidden");

        // Move to next card
        currentCardIndex = (currentCardIndex + 1) % educationCards.length;

        // Schedule next card after 5 seconds
        setTimeout(showNextCard, 5000);
      }

      const cardsContainer = document.querySelector(
        ".education-cards-container"
      );
      if (cardsContainer) {
        containerObserver.observe(cardsContainer);
      }
    
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'9ba519dd464ea834',t:'MTc2NzgwNjE2Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();
>>>>>>> aa7a8302c02e14cebdf740a0a1ffa8c98b51af76
