const svg = document.getElementById('animated-triangles');

svg.addEventListener('click', function () {
  const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
  const rando = () => colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.cssText = `
          --clr-red-dark: ${rando()};
          --clr-primary-6: ${rando()}; 
          `;
});
