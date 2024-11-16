document.querySelectorAll('.answers__item').forEach((item, index) => {
  const title = item.querySelector('.answers__item-title');
  const paragraph = item.querySelector('.answers__item-text'); 
  const plusIcon = item.querySelector('.answers__item-plus');
  const minusIcon = item.querySelector('.answers__item-minus');

  if (title && paragraph) {
    title.addEventListener('click', () => {
      paragraph.classList.toggle('hidden');
      plusIcon.classList.toggle('hidden');
      minusIcon.classList.toggle('hidden');
    });
  }
});

document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');

    const targetElement = document.querySelector(blockId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop + 100,
        behavior: 'smooth'
      });
    }
  });
});
