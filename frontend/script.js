// 1. Alert when pressing Enter in search input
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`You searched for: ${searchInput.value}`);
    }
});

// 2. Smooth scroll to top on "Back to Top"
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. See More click interactions
document.querySelectorAll('.box p').forEach(p => {
    p.addEventListener('click', () => {
        alert("Redirecting to product details...");
    });
});

// 4. Optional: Cart Click Feedback
document.querySelector('.nav-cart').addEventListener('click', () => {
    alert("Cart clicked! (You can integrate cart functionality here)");
});
// Fetching products from Node.js backend
fetch('http://localhost:3000/api/products')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // dynamically display products here
  });

// Cart click event
document.querySelector('.nav-cart')?.addEventListener('click', () => {
  alert("Cart clicked! You can integrate cart functionality here.");
});
fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => {
    console.log('Products:', data);
    // Optional: Dynamically add them to the page
  })
  .catch(error => console.error('Error fetching products:', error));
  fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-container');

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}" width="150">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading products:", err));
