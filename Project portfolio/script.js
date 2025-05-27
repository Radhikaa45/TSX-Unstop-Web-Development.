
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  
 
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,  
          behavior: 'smooth',
        });
      }
    });
  });

  
  const sections = [...document.querySelectorAll('section')];
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 60;  
    let currentSectionId = sections[0].id;
    for (const section of sections) {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.id;
      }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').slice(1) === currentSectionId);
    });
  });
});
