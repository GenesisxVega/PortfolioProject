const year = new Date().getFullYear();
const date = `&copy; Genesis Vega Gonzalez ${year}. All Rights Reserved.`;
document.getElementById("footer").innerHTML = date;

const accordionTabs = document.querySelectorAll('.accordion-tab');

accordionTabs.forEach(tab => {
  const title = tab.querySelector('.accordion-tab-title');
  const content = tab.querySelector('.accordion-tab-content');

  title.addEventListener('click', () => {
    const isOpen = content.style.display === 'block';

    accordionTabs.forEach(tab => {
      tab.querySelector('.accordion-tab-content').style.display = 'none';
      tab.querySelector('.icon').textContent = '+';
    });

    if (!isOpen) {
      content.style.display = 'block';
      title.querySelector('.icon').textContent = '-';z
    }
  });
});

