const menuItems = [
  { name: 'Burger', price: '$5.99', category: 'Fast Food' },
  { name: 'Pizza', price: '$8.99', category: 'Italian' },
  { name: 'Pasta', price: '$7.49', category: 'Italian' },
  { name: 'Sushi', price: '$12.99', category: 'Japanese' },
  { name: 'Tacos', price: '$6.99', category: 'Mexican' },
  { name: 'Chocos', price: '$2.00', category: 'Dessert' },
];

function filterByCategory(category) {
  const filtered = menuItems.filter(item => item.category === category);
  alert(`Found ${filtered.length} items in ${category} category`);
  return filtered;
}

function renderMenu() {
  const container = document.getElementById('menuItems');
  if (!container) return;
  
  container.innerHTML = ''; // Clear existing items
  
  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <span class="category">${item.category}</span>
    `;
    container.appendChild(card);
  });
}

function orderNow() {
  alert('Redirecting to order page...');
}

function goAbout() {
  alert('Redirecting to about page...');
}

// New function for viewing menu
function viewMenu() {
  renderMenu();
  document.querySelector('.menu').scrollIntoView({ behavior: 'smooth' });
}

// New function to calculate total
function calculateTotal(items) {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);
  return `$${total.toFixed(2)}`;
}

// New feature: Show total price of all items
console.log('Total menu value:', calculateTotal(menuItems));

// Initialize
renderMenu();