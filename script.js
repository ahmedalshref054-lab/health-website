// 1. تفعيل القائمة في الموبايل
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.onclick = () => {
    navList.classList.toggle('active');
};

// 2. إغلاق القائمة عند اختيار رابط
document.querySelectorAll('nav ul li a').forEach(link => {
    link.onclick = () => navList.classList.remove('active');
});

// 3. تأثير ظهور العناصر عند التمرير
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.walkthrough-item, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// 4. تغيير خلفية الهيدر
window.onscroll = () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#000' : 'rgba(0,0,0,0.9)';
};