// تشغيل شاشة التحميل
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.remove(), 600);
  }, 1200);
});

// شريط التقدم مع التمرير
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// زر العودة للأعلى
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 500 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// تبديل الوضع الليلي والنهاري
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
const defaultTheme = savedTheme || "dark";
root.setAttribute("data-theme", defaultTheme);
themeToggle.textContent = defaultTheme === "light" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  themeToggle.textContent = nextTheme === "light" ? "☀️" : "🌙";
});

// قائمة الهاتف
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// تغيير شكل الشريط العلوي أثناء التمرير
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

// تأثيرات الظهور عند التمرير
const animatedItems = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => observer.observe(item));

// تأثير بارالاكس للخلفية
const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.25;
  heroBg.style.transform = `translateY(${offset}px)`;
});

// عدادات الإحصائيات
const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = Math.ceil(target / 80);
        const update = () => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            return;
          }
          counter.textContent = current;
          requestAnimationFrame(update);
        };
        update();
        counterObserver.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach(counter => counterObserver.observe(counter));

// سلايدر النصائح
const slides = document.getElementById("slides");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
let slideIndex = 0;

const updateSlides = () => {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
};

prevSlide.addEventListener("click", () => {
  slideIndex = slideIndex === 0 ? slides.children.length - 1 : slideIndex - 1;
  updateSlides();
});

nextSlide.addEventListener("click", () => {
  slideIndex = slideIndex === slides.children.length - 1 ? 0 : slideIndex + 1;
  updateSlides();
});

// الأسئلة الشائعة
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach(item => {
  item.addEventListener("click", () => {
    const expanded = item.getAttribute("aria-expanded") === "true";
    faqItems.forEach(i => i.setAttribute("aria-expanded", "false"));
    item.setAttribute("aria-expanded", String(!expanded));
  });
});

// اختبار الأمن السيبراني
const quizData = [
  {
    question: "ما هو أفضل إجراء عند استلام رسالة بريد مشبوهة؟",
    options: [
      "فتح الرابط فورًا",
      "حذف الرسالة والتحقق من المرسل",
      "إرسال بياناتك للتأكيد"
    ],
    answer: 1
  },
  {
    question: "أي من التالي يعد كلمة مرور قوية؟",
    options: [
      "123456",
      "اسمك وتاريخ الميلاد",
      "S3cure!2025#"
    ],
    answer: 2
  },
  {
    question: "ما الغرض من المصادقة الثنائية؟",
    options: [
      "تسهيل الدخول فقط",
      "إضافة طبقة حماية إضافية",
      "مشاركة الحساب مع الآخرين"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizResult = document.getElementById("quizResult");

const renderQuestion = () => {
  const { question, options } = quizData[currentQuestion];
  quizQuestion.textContent = question;
  quizOptions.innerHTML = "";
  options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectOption(index));
    quizOptions.appendChild(btn);
  });
};

const selectOption = index => {
  const correct = quizData[currentQuestion].answer === index;
  if (correct) score += 1;
  quizResult.textContent = correct ? "إجابة صحيحة!" : "ليست الإجابة الصحيحة، حاول مجددًا.";
};

const nextQuestionBtn = document.getElementById("nextQuestion");
nextQuestionBtn.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  if (currentQuestion === 0) {
    quizResult.textContent = `نتيجتك: ${score} من ${quizData.length}`;
    score = 0;
  }
  renderQuestion();
});

renderQuestion();
