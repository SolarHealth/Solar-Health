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

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.selectValue');
  let allFilled = true;

  inputs.forEach(input => {
      if (!input.value) {
          allFilled = false;
      }
  });

  if (allFilled) {
      alert('Seu cadastro foi concluido!');
  } else {
      alert('Não foi possível completar seu cadastro, por gentileza, tente novamente.');
  }
});