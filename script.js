// تفعيل شاشة التحميل عند بداية الموقع
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 600);
});

// تبديل الوضع الليلي مع حفظ الاختيار
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const savedMode = localStorage.getItem('mode');
if (savedMode) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedMode);
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  const currentMode = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('mode', currentMode);
  modeToggle.innerHTML = currentMode === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// قائمة تنقل متجاوبة
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// شريط تقدم التمرير
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// زر العودة للأعلى
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 600);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// تغيير شكل شريط التنقل عند التمرير
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// إظهار الأقسام أثناء التمرير
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);
revealElements.forEach(element => observer.observe(element));

// عدادات الإحصاءات
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = current;
      }, 20);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.4 }
);

counters.forEach(counter => counterObserver.observe(counter));

// الأسئلة الشائعة
const faqButtons = document.querySelectorAll('.faq__item');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    content.classList.toggle('show');
  });
});

// السلايدر البسيط للتهديدات
const slider = document.getElementById('threatSlider');
const sliderTrack = slider.querySelector('.slider__track');
const sliderButtons = slider.querySelectorAll('.slider__btn');
let sliderIndex = 0;

const updateSlider = () => {
  const cardWidth = sliderTrack.children[0].offsetWidth + 20;
  sliderTrack.style.transform = `translateX(${sliderIndex * cardWidth * -1}px)`;
};

sliderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.dataset.dir;
    const maxIndex = sliderTrack.children.length - 1;
    sliderIndex = dir === 'next' ? Math.min(sliderIndex + 1, maxIndex) : Math.max(sliderIndex - 1, 0);
    updateSlider();
  });
});
window.addEventListener('resize', updateSlider);

// اختبار الأمن السيبراني
const quizData = [
  {
    question: 'ما أول خطوة عند استلام رسالة بريد مشبوهة؟',
    options: ['فتح الرابط فورًا', 'التحقق من المرسل قبل التفاعل', 'إرسالها للجميع'],
    correct: 1,
  },
  {
    question: 'أفضل طريقة لحماية كلمة المرور هي:',
    options: ['استخدام نفس الكلمة لكل الحسابات', 'استخدام مدير كلمات مرور', 'مشاركتها مع الأصدقاء'],
    correct: 1,
  },
  {
    question: 'عند استخدام شبكة واي فاي عامة يجب:',
    options: ['تجنب إدخال بيانات حساسة', 'إيقاف الجدار الناري', 'تحميل أي تطبيق'],
    correct: 0,
  },
];

let quizIndex = 0;
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizResult = document.getElementById('quizResult');
const quizNext = document.getElementById('quizNext');

const renderQuiz = () => {
  const current = quizData[quizIndex];
  quizQuestion.textContent = current.question;
  quizOptions.innerHTML = '';
  quizResult.textContent = '';
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz__option';
    button.textContent = option;
    button.addEventListener('click', () => {
      if (index === current.correct) {
        button.classList.add('correct');
        quizResult.textContent = 'إجابة صحيحة! أحسنت.';
      } else {
        button.classList.add('wrong');
        quizResult.textContent = 'إجابة غير صحيحة. حاول مرة أخرى.';
      }
    });
    quizOptions.appendChild(button);
  });
};

quizNext.addEventListener('click', () => {
  quizIndex = (quizIndex + 1) % quizData.length;
  renderQuiz();
});

renderQuiz();

// ضبط الأيقونة حسب الوضع عند بداية الصفحة
if (body.classList.contains('dark')) {
  modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
