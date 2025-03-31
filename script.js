// Sample data for restaurants and menu items
const restaurants = [
    {
        id: 1,
        name: "Spice Paradise",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "North Indian",
        rating: 4.5,
        deliveryTime: "30-40 min"
    },
    {
        id: 2,
        name: "South Spice",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "South Indian",
        rating: 4.3,
        deliveryTime: "25-35 min"
    },
    {
        id: 3,
        name: "Tandoor Express",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "Mughlai",
        rating: 4.7,
        deliveryTime: "35-45 min"
    },
    {
        id: 4,
        name: "Punjab Grill",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "Punjabi",
        rating: 4.6,
        deliveryTime: "30-40 min"
    },
    {
        id: 5,
        name: "Gujarat Thali",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "Gujarati",
        rating: 4.4,
        deliveryTime: "25-35 min"
    },
    {
        id: 6,
        name: "Bengal Kitchen",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        cuisine: "Bengali",
        rating: 4.8,
        deliveryTime: "35-45 min"
    }
];

const menuItems = [
    {
        id: 1,
        restaurantId: 1,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato gravy with butter and cream",
        price: 299,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 2,
        restaurantId: 1,
        name: "Paneer Tikka",
        description: "Grilled cottage cheese in spiced marinade with mint chutney",
        price: 249,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Starters"
    },
    {
        id: 3,
        restaurantId: 2,
        name: "Masala Dosa",
        description: "Crispy crepe with spiced potato filling and coconut chutney",
        price: 199,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 4,
        restaurantId: 2,
        name: "Idli Sambar",
        description: "Steamed rice cakes with lentil soup and coconut chutney",
        price: 149,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Breakfast"
    },
    {
        id: 5,
        restaurantId: 3,
        name: "Chicken Biryani",
        description: "Fragrant rice with spiced chicken and mint raita",
        price: 349,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 6,
        restaurantId: 3,
        name: "Mutton Kebab",
        description: "Grilled minced mutton with aromatic spices",
        price: 399,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Starters"
    },
    {
        id: 7,
        restaurantId: 4,
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked overnight",
        price: 199,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 8,
        restaurantId: 4,
        name: "Sarson Ka Saag",
        description: "Mustard greens curry with makki ki roti",
        price: 249,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 9,
        restaurantId: 5,
        name: "Dhokla",
        description: "Steamed fermented rice and chickpea flour cake",
        price: 149,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Snacks"
    },
    {
        id: 10,
        restaurantId: 5,
        name: "Khandvi",
        description: "Rolled chickpea flour with coconut and curry leaves",
        price: 129,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Snacks"
    },
    {
        id: 11,
        restaurantId: 6,
        name: "Fish Curry",
        description: "Bengali-style fish in mustard gravy",
        price: 399,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Main Course"
    },
    {
        id: 12,
        restaurantId: 6,
        name: "Rasgulla",
        description: "Sweet cottage cheese dumplings in sugar syrup",
        price: 99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Desserts"
    }
];

// State management
let currentUser = null;
let cart = [];
let currentSection = 'home';

// DOM Elements
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const loginLink = document.getElementById('loginLink');
const logoutLink = document.getElementById('logoutLink');
const closeBtn = document.querySelector('.close');
const restaurantGrid = document.getElementById('restaurantGrid');
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const homeLink = document.getElementById('homeLink');
const menuLink = document.getElementById('menuLink');
const cartLink = document.getElementById('cartLink');

// Section Management
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        currentSection = sectionId;
        
        // Update active navigation link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`#${sectionId}Link`).classList.add('active');
    }
}

// Authentication Functions
function showLoginModal() {
    loginModal.style.display = 'block';
}

function hideLoginModal() {
    loginModal.style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (for demo purposes)
    if (email && password) {
        currentUser = { email };
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateAuthUI();
        hideLoginModal();
        loginForm.reset();
        loadCart();
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('user');
    updateAuthUI();
    cart = [];
    updateCartUI();
}

function updateAuthUI() {
    if (currentUser) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
    } else {
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    }
}

// Cart Functions
function addToCart(itemId) {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
    saveCart();
    showNotification('Item added to cart!');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCart();
    showNotification('Item removed from cart!');
}

function updateCartUI() {
    cartItems.innerHTML = '';
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h3>${item.name}</h3>
                        <p>₹${item.price} x ${item.quantity}</p>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div>
                        <button onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });
    }
    
    cartTotal.textContent = total;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
    } else {
        const item = cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            updateCartUI();
            saveCart();
        }
    }
}

function saveCart() {
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    }
}

function loadCart() {
    if (currentUser) {
        const savedCart = localStorage.getItem(`cart_${currentUser.email}`);
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    }
}

// UI Rendering Functions
function renderRestaurants() {
    restaurantGrid.innerHTML = restaurants.map(restaurant => `
        <div class="restaurant-card">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <p class="cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-details">
                    <span class="rating">⭐ ${restaurant.rating}</span>
                    <span class="delivery-time">🕒 ${restaurant.deliveryTime}</span>
                </div>
                <button onclick="showRestaurantMenu(${restaurant.id})">View Menu</button>
            </div>
        </div>
    `).join('');
}

function renderMenu(restaurantId = null) {
    let filteredItems = restaurantId 
        ? menuItems.filter(item => item.restaurantId === restaurantId)
        : menuItems;
    
    // Group items by category
    const categories = [...new Set(filteredItems.map(item => item.category))];
    
    menuGrid.innerHTML = categories.map(category => `
        <div class="menu-category">
            <h3 class="category-title">${category}</h3>
            <div class="category-items">
                ${filteredItems
                    .filter(item => item.category === category)
                    .map(item => `
                        <div class="menu-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="menu-item-info">
                                <h3>${item.name}</h3>
                                <p>${item.description}</p>
                                <p class="price">₹${item.price}</p>
                                <button onclick="addToCart(${item.id})">Add to Cart</button>
                            </div>
                        </div>
                    `).join('')}
            </div>
        </div>
    `).join('');
}

function showRestaurantMenu(restaurantId) {
    renderMenu(restaurantId);
    showSection('menu');
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Event Listeners
loginLink.addEventListener('click', showLoginModal);
closeBtn.addEventListener('click', hideLoginModal);
loginForm.addEventListener('submit', handleLogin);
logoutLink.addEventListener('click', handleLogout);

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('restaurants');
});

menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderMenu();
    showSection('menu');
});

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('cart');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Create order summary
    const orderSummary = cart.map(item => 
        `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Show order confirmation
    if (confirm(`Order Summary:\n\n${orderSummary}\n\nTotal: ₹${total}\n\nConfirm order?`)) {
        showNotification('Order placed successfully!');
        cart = [];
        updateCartUI();
        saveCart();
        showSection('restaurants');
    }
});

// Initialize
function init() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
        loadCart();
    }
    
    renderRestaurants();
    showSection('restaurants');
}

// Start the application
init(); 