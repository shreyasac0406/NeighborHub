function filterCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (category === 'All' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

function searchProduct(query) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    const title = product.querySelector('h3').innerText.toLowerCase();
    product.style.display = title.includes(query.toLowerCase()) ? 'block' : 'none';
  });
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('imagePreview');
    output.src = reader.result;
    output.style.display = 'block';
  };
  reader.readAsDataURL(event.target.files[0]);
}

function addProduct() {
  const title = document.getElementById('productTitle').value;
  const price = document.getElementById('productPrice').value;
  const category = document.getElementById('productCategory').value;
  const imageInput = document.getElementById('productImage');

  if (!title || !price || !category || imageInput.files.length === 0) {
    alert("Please fill all fields and upload an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const productList = document.getElementById('productList');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.setAttribute('data-category', category);
    newProduct.innerHTML = `
      <img src="${reader.result}" alt="${title}" />
      <h3>${title}</h3>
      <p>${price}</p>
    `;
    productList.prepend(newProduct);
    document.getElementById('postModal').style.display = 'none';
  };
  reader.readAsDataURL(imageInput.files[0]);
}
