function createProductCard(imageSrc, title, description, price) {
    // Create a new 'div' element for the product card
    const productCard = document.createElement('div');
    productCard.className = 'col-md-3 p-3 productcard';

    // Create the card's inner 'div' element
    const cardInner = document.createElement('div');
    cardInner.className = 'card border-0';

    // Create the product inner image box
    const productInnerImgBox = document.createElement('div');
    productInnerImgBox.className = 'product_inner_imgbox px-2';
    productInnerImgBox.style.height = '50vh';

    // Create the 'img' element for the product image
    const productImage = document.createElement('img');
    productImage.src = imageSrc;
    productImage.className = 'card-img-top px-0';
    productImage.alt = 'Product 1';
    productImage.style.height = '48vh';

    // Append the image to the product inner image box
    productInnerImgBox.appendChild(productImage);

    // Create the 'div' element for the cart button
    const cartButton = document.createElement('div');
    cartButton.className = 'cart-btn';

    // Create the 'button' element for adding to cart
    const addButton = document.createElement('button');
    addButton.className = 'btn btn-white shadow-sm rounded-pill';
    addButton.innerHTML = '<span>Add to </span><i class="fa-solid fa-cart-shopping"></i>';

    // Append the button to the cart button div
    cartButton.appendChild(addButton);

    // Create the 'div' element for the card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create the 'h5' element for the card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    // Create the 'p' element for the card text
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = description;

    // Create the 'div' element for the product price
    const productPrice = document.createElement('div');
    productPrice.className = 'product-price';

    // Create the price symbol and value
    const priceSymbol = document.createElement('span');
    priceSymbol.innerHTML = '&#8377';
    const priceValue = document.createElement('span');
    priceValue.textContent = price;

    // Append the price symbol and value to the product price div
    productPrice.appendChild(priceSymbol);
    productPrice.appendChild(priceValue);

    // Append the title, text, and price elements to the card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(productPrice);

    // Append the product inner image box, cart button, and card body to the card inner div
    cardInner.appendChild(productInnerImgBox);
    cardInner.appendChild(cartButton);
    cardInner.appendChild(cardBody);

    // Append the card inner div to the product card div
    productCard.appendChild(cardInner);

    return productCard;
}

// Example usage of the function

// Define a 2D array where each 1D array contains four values
const productData = [
    ['./img/thumb.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '100'],
    ['./img/strap.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '200'],
    ['./img/goda.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/gla_pata.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/hand.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/loopneo.jpg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/neoprene.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/pavnila pta.avif', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/pillow.jpg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/splint.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/stick.jpg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/theeth.jpeg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/bandage.jpg', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
    ['./img/chek.webp', 'Abdominal support', '9"/23cm, grey, 1 unit', '300'],
];

// Find the productContainer by its id
const productContainer = document.getElementById('productContainer');

// Loop through the 2D array and create product cards for each set of values
for (const data of productData) {
    const newProductCard = createProductCard(...data); // Use the spread operator to pass the values

    // Append the newly created product card to the productContainer
    productContainer.appendChild(newProductCard);
}

