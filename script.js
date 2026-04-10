const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get('name');
  const service = formData.get('service');
  const date = formData.get('date');
  const time = formData.get('time');

  bookingMessage.textContent = `Thanks ${name}! Your ${service} request for ${date} at ${time} was sent to Jacob at J 2Blurry. Call 210-508-8599 for instant confirmation.`;
  bookingForm.reset();
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach((item) => observer.observe(item));

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  hero.style.backgroundPositionY = `${offset * 0.35}px`;
});
