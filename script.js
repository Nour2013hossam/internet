// التحكم في شاشة التحميل
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

// عناصر عامة
const header = document.getElementById("siteHeader");
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

// التمرير والتأثيرات الديناميكية
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressBar.style.width = `${progress}%`;
  header.classList.toggle("scrolled", scrollTop > 20);
  backToTop.classList.toggle("show", scrollTop > 400);

  // تأثير بارالاكس بسيط في قسم البطل
  document.querySelectorAll("[data-parallax]").forEach((element) => {
    const speed = Number(element.getAttribute("data-speed")) || 0.3;
    element.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});

// زر العودة للأعلى
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// فتح وإغلاق قائمة الموبايل
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// تبديل الوضع الليلي والنهاري مع تخزين الاختيار
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.body.className = storedTheme;
  themeToggle.innerHTML = storedTheme === "theme-dark" ? "<i class=\"fa-solid fa-sun\"></i>" : "<i class=\"fa-solid fa-moon\"></i>";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-light", !isDark);
  localStorage.setItem("theme", isDark ? "theme-dark" : "theme-light");
  themeToggle.innerHTML = isDark ? "<i class=\"fa-solid fa-sun\"></i>" : "<i class=\"fa-solid fa-moon\"></i>";
});

// تأثيرات الظهور عند التمرير
const revealElements = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));

// العدادات المتحركة
const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 60));
        const updateCounter = () => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
          } else {
            counter.textContent = current;
            requestAnimationFrame(updateCounter);
          }
        };
        updateCounter();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

// الأسئلة الشائعة
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling;
    const isOpen = content.classList.toggle("show");
    item.setAttribute("aria-expanded", isOpen);
    item.querySelector("i").className = isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus";
  });
});

// سلايدر التهديدات
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const updateSlider = () => {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
};

document.querySelector(".slider-btn.next").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

document.querySelector(".slider-btn.prev").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

// اختبار تفاعلي
const quizQuestions = document.querySelectorAll(".quiz-question");
const quizScore = document.getElementById("quizScore");
const quizMessage = document.getElementById("quizMessage");
let score = 0;

quizQuestions.forEach((question) => {
  const buttons = question.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (question.dataset.answered) {
        return;
      }
      const isCorrect = button.dataset.answer === "true";
      button.classList.add(isCorrect ? "correct" : "wrong");
      question.dataset.answered = "true";
      if (isCorrect) {
        score += 1;
      }
      quizScore.textContent = score;
      quizMessage.textContent = score === quizQuestions.length
        ? "ممتاز! أنت جاهز لحماية نفسك رقميًا."
        : "واصل الإجابة لتحسين مستوى الأمان.";
    });
  });
});

// تأثير إمالة بسيط لبطاقات الفريق
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
