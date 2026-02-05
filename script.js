// تشغيل التأثيرات عند تحميل الصفحة
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.pointerEvents = "none";
    setTimeout(() => loadingScreen.remove(), 600);
  }, 1200);
});

// تبديل الوضع الليلي والنهاري
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// التحكم في القائمة بالهواتف
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// شريط تقدم التمرير وزر العودة للأعلى
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;

  if (scrollTop > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// إظهار الأقسام عند التمرير
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((section) => observer.observe(section));

// العدادات المتحركة
const counters = document.querySelectorAll(".stat-number");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 60;
        const update = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target;
          }
        };
        update();
        counterObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver.observe(counter));

// سلايدر المحتوى
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 0;

const updateSlider = () => {
  slidesContainer.style.transform = `translateX(${currentSlide * 100}%)`;
};

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

// اختبار الأمن السيبراني
const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quiz-feedback");

quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.textContent.includes("المصادقة الثنائية")) {
      quizFeedback.textContent = "إجابة صحيحة! المصادقة الثنائية تحمي حسابك.";
      quizFeedback.style.color = "#16a34a";
    } else {
      quizFeedback.textContent = "إجابة غير صحيحة، حاول مرة أخرى.";
      quizFeedback.style.color = "#ef4444";
    }
  });
});
