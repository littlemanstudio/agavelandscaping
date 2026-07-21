(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Hero slider crossfade
  const slides = document.querySelectorAll('.hero-slider img');
  if (slides.length > 1 && !reduceMotion) {
    let active = 0;
    setInterval(() => {
      slides[active].classList.remove('is-active');
      active = (active + 1) % slides.length;
      slides[active].classList.add('is-active');
    }, 5000);
  }

  // Sticky header
  const header = document.getElementById('siteHeader');
  if (header) {
    const barH = document.querySelector('.announcement-bar')?.offsetHeight || 0;
    const onScroll = () => {
      header.classList.toggle('is-stuck', window.scrollY > barH + 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burger && mobileMenu) {
    const closeMenu = () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    };
    const openMenu = () => {
      burger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('is-open');
      document.body.classList.add('no-scroll');
    };
    burger.addEventListener('click', () => {
      const isOpen = burger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-anim]');
  if (revealEls.length) {
    revealEls.forEach((el) => {
      const delay = el.getAttribute('data-delay');
      if (delay) el.style.setProperty('--anim-delay', delay);
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-inview'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-inview');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -80px 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));
    }
  }

  // Parallax CTA
  const ctaBand = document.querySelector('.cta-band');
  const ctaParallax = document.querySelector('.cta-parallax');
  if (ctaBand && ctaParallax && !reduceMotion) {
    const onParallax = () => {
      const rect = ctaBand.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const shift = (progress - 0.5) * 60;
      ctaParallax.style.transform = `translateY(${shift}px)`;
    };
    onParallax();
    window.addEventListener('scroll', onParallax, { passive: true });
  }

  // Back to top
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    const onScroll = () => {
      toTop.classList.toggle('is-visible', window.scrollY > 800);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    toTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
})();
