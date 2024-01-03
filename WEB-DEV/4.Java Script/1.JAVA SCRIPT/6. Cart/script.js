class Product {
  constructor(id, name, price) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  displayInfo() {
    return `${this._name} - $${this._price}`;
  }
}

class ShoppingCart {
  #cartItems = [];

  get cartItems() {
    return this.#cartItems;
  }

  addToCart(product) {
    this.#cartItems.push(product);
    this.displayShoppingCart();
  }

  removeLastItem() {
    this.#cartItems.pop();
    this.displayShoppingCart();
  }

  removeSelectedItem() {
    const selectedProduct = prompt('Enter the ID of the product to remove from cart:');
    const indexToRemove = this.#cartItems.findIndex(item => item.id == selectedProduct);

    if (indexToRemove !== -1) {
      this.#cartItems.splice(indexToRemove, 1);
      this.displayShoppingCart();
    } else {
      alert('Invalid product ID. Please try again.');
    }
  }

  displayShoppingCart() {
    const shoppingCartDiv = document.getElementById('shopping-cart');
    shoppingCartDiv.innerHTML = '';

    this.#cartItems.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `<p>${item.displayInfo()}</p>`;
      shoppingCartDiv.appendChild(cartItem);
    });
  }
}

const products = [
  new Product(1, 'Product 1', 10),
  new Product(2, 'Product 2', 20),
  new Product(3, 'Product 3', 30),
];

const shoppingCart = new ShoppingCart();

function displayProducts() {
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  products.forEach(product => {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    productContainer.innerHTML = `<p>${product.displayInfo()}</p>`;
    productsList.appendChild(productContainer);
  });
}

function addToCart() {
  const selectedProductDetailsDiv = document.getElementById('selected-product-details');
  selectedProductDetailsDiv.innerHTML = '';

  const selectedProductId = prompt('Enter the ID of the product to add to cart:');
  const selectedProduct = products.find(product => product.id == selectedProductId);

  if (selectedProduct) {
    shoppingCart.addToCart(selectedProduct);
  } else {
    alert('Invalid product ID. Please try again.');
  }
}

function removeLastItem() {
  shoppingCart.removeLastItem();
}

function removeSelectedItem() {
  shoppingCart.removeSelectedItem();
}


displayProducts();
