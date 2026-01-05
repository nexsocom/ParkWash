/* ---------------------------
   Smooth Scrolling + Highlight
---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Premium highlight animation
    target.classList.add('section-focus');
    setTimeout(() => target.classList.remove('section-focus'), 600);
  });
});

/* ---------------------------
   CTA Button Hover Animation
---------------------------- */
const ctaBtn = document.querySelector('.cta');
if (ctaBtn) {
  ctaBtn.addEventListener('mouseenter', () => {
    ctaBtn.style.transform = 'scale(1.07)';
    ctaBtn.style.transition = 'transform 0.25s ease';
  });

  ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = 'scale(1)';
  });
}

/* ---------------------------
   Scroll Reveal Animations
---------------------------- */
const revealOptions = {
  threshold: 0.15
};

const revealElements = document.querySelectorAll('.section, .review-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

/* ---------------------------
   Premium Nav Hover Animation
---------------------------- */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.style.position = "relative";

  // Create animated underline
  let underline = document.createElement("span");
  underline.style.position = "absolute";
  underline.style.bottom = "-4px";
  underline.style.left = "0";
  underline.style.height = "2px";
  underline.style.width = "0%";
  underline.style.background = "#ffffff";
  underline.style.transition = "width 0.3s ease";
  link.appendChild(underline);

  link.addEventListener('mouseenter', () => {
    underline.style.width = "100%";
  });

  link.addEventListener('mouseleave', () => {
    underline.style.width = "0%";
  });
});

const track = document.querySelector('.reviews-track');
const nextBtn = document.querySelector('.review-nav.next');
const prevBtn = document.querySelector('.review-nav.prev');

let index = 0;
const cardWidth = 284; // card + gap

nextBtn.addEventListener('click', () => {
  index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

prevBtn.addEventListener('click', () => {
  index = Math.max(0, index - 1);
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

<script>
const slider = document.getElementById('reviewsScroll');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (startX - x);
  slider.scrollLeft = scrollLeft + walk;
});
</script>
