const sidebar = document.querySelector('#sidebar');
const openNav = document.querySelector("#btnNav").addEventListener('click', () => {
  sidebar.style.display = 'block';
  sidebar.style.opacity = '0';
  sidebar.style.transform = 'scale(0.9)';

  requestAnimationFrame(() => {
    sidebar.classList.add('show');
    sidebar.style.opacity = '1';
    sidebar.style.transform = 'scale(1)';
  });
});

const closeNav = document.querySelector('#btnClose').addEventListener('click', () => {
  sidebar.style.opacity = '0';
  sidebar.style.transform = 'scale(0.9)';
  setTimeout(() => {
    sidebar.classList.remove('show');
    sidebar.style.display = 'none';
  }, 200); 
});