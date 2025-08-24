src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
 function nextPage(showId) {
      const containers = document.querySelectorAll('.container');
      containers.forEach(c => c.classList.add('hidden'));
      const next = document.getElementById(showId);
      next.classList.remove('hidden');
      gsap.fromTo(next, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.5});
    }