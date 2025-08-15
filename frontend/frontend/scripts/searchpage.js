document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');

  const productGrid = document.getElementById('product-grid');
  if (productGrid) productGrid.innerHTML = '<p>Loading...</p>';

  fetch(`https://gadgetgrove-n38v.onrender.com/api/search?query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(products => {
      if (!productGrid) return;
      if (products.length === 0) {
        productGrid.innerHTML = '<p>No products found.</p>';
        return;
      }

      productGrid.innerHTML = '';

      products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.setAttribute('data-name', product.name);

        div.innerHTML = `
          <img src="${product.image1}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          
        `;

        div.addEventListener('click', () => {
          window.location.href = `/productpage.html?product=${encodeURIComponent(product.name)}`;
        });

        productGrid.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Error fetching search results:', err);
      if (productGrid) productGrid.innerHTML = '<p>Error loading products.</p>';
    });

  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
          window.location.href = `/searchpage.html?query=${encodeURIComponent(searchTerm)}`;
        }
      }
    });
  }

  const userProfile = document.querySelector('.userprofile');
  if (userProfile) {
    userProfile.addEventListener('click', () => {
      window.location.href = '/userprofile.html';
    });
  }

  const cart = document.querySelector('.cart');
  if (cart) {
    cart.addEventListener('click', () => {
      window.location.href = '/cart.html';
    });
  }
});
