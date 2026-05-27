const menuItems = [
  { name: 'Burger', price: '$5.99' },
  { name: 'Pizza', price: '$8.99' },
  { name: 'Pasta', price: '$7.49' },
  { name: 'Sushi', price: '$12.99' },
  { name: 'Tacos', price: '$6.99' },
];

function renderMenu() {
  const container = document.getElementById('menuItems');
  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `<h4>${item.name}</h4><p>${item.price}</p>`;
    container.appendChild(card);
  });
}

function orderNow() {
  alert('Redirecting to menu...');
}

renderMenu();
