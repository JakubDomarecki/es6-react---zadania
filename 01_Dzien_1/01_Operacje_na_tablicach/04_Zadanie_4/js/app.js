const products = [
  {
    name: 'Fiat Tipo',
    category: 'car',
    price: 29900,
    condition: 'new',
  },
  {
    name: 'MacBook Pro',
    category: 'computer',
    price: 9999,
    condition: 'new',
  },
  {
    name: 'Xiaomi Redmi Note 8',
    category: 'phone',
    price: 2399,
    condition: 'new',
  },
  {
    name: 'Audi A6',
    category: 'car',
    price: 23450,
    condition: 'used',
  },
  {
    name: 'Samsung Galaxy Note 9',
    category: 'phone',
    price: 1899,
    condition: 'used',
  },
  {
    name: 'Seat Leon',
    category: 'car',
    price: 66000,
    condition: 'new',
  },
  {
    name: 'Nike Sneakers',
    category: 'shoes',
    price: 345,
    condition: 'new',
  },
  {
    name: 'Dacia Logan',
    category: 'car',
    price: 33500,
    condition: 'new',
  },
];

const allProductsList = document.getElementById('all-products');
const filteredProductsList = document.getElementById('filtered-products');

//przed
products.forEach(product => {
  const listItem = document.createElement('li');
  const productName = document.createElement('strong');
  const productPrice = document.createElement('span');

  productName.textContent = product.name;
  productPrice.textContent = `, ${product.price} zł - ${product.condition}`;

  listItem.appendChild(productName);
  listItem.appendChild(productPrice);
  allProductsList.appendChild(listItem);

  // 2 sposob
  // listItem.innerHTML = `<li><strong>${product.name}</strong><span>, cena produktu - ${product.price} zł - ${product.condition}</span></li>`;
  // allProductsList.appendChild(listItem);
});


//po
const filteredProducts = products.filter(function (product) {
  return product.category === 'car'  && product.condition === 'new'  && product.price <= 45000;
});
filteredProducts.forEach(function (product) {
  const listItem = document.createElement('li');
  const productName = document.createElement('strong');
  const productPrice = document.createElement('span');
  productName.textContent = product.name;
  productPrice.innerText = `, ${product.price} zł - ${product.condition}`;
  listItem.appendChild(productName);
  listItem.appendChild(productPrice);
  filteredProductsList .appendChild(listItem);
});