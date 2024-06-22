

// function productList(product) {
//   const productContainer = document.getElementById("Product-Container");

//   product.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product-div");

//     const productImg = document.createElement("img");
//     productImg.classList.add("product-img");
//     productImg.src = product.img;
//     productImg.alt = "img";
//     productDiv.appendChild(productImg);

//     const productTitle = document.createElement("p");
//     productTitle.classList.add("product-title");
//     productTitle.textContent = product.title;
//     productDiv.appendChild(productTitle);

//     const productPrice = document.createElement("span");
//     productPrice.classList.add("product-title");
//     productPrice.textContent = product.price;
//     productDiv.appendChild(productPrice);

//     if (product.colors) {
//       const colorDiv = document.getElementById("div");
//       product.colors.forEach(elemnt, function () {
//         colordot.style.backgroundColor = colors;
//         colorDiv.appendChild(colordot);
//       });
//     }
//     productDiv.appendChild(colorDiv)
    
// });
// productContainer.appendChild(productDiv)
// }

const products1 = [
    {
      title: "Gray T-Shirt",
      price: "$14.99",
      img: "GrayTShirt.png",
    },
    {
      title: "Black Jeans",
      price: "$34.99",
      img: "div.product-top (3).png",
    },
    {
      title: "Green Jacket",
      price: "$59.95",
      img: "div.product-top (4).png",
    },
    {
      title: "White Sneakers",
      price: "$49.95",
      img: "div.product-top (5).png",
    },
  ];
  const products2 = [
    {
      title: "Blue Sweatshirt",
      price: "$29.95 - $179.95",
      img: "Item (1).png",
      colors: ["blue", "black"],
    },
    {
      title: "Red Hoodie",
      price: "$24.95 - $149.95",
      img: "Item (2).png",
      colors: ["red", "green"],
    },
    {
      title: "Yellow Pullover",
      price: "$19.95 - $129.95",
      img: "Item (3).png",
      colors: ["yellow", "orange"],
    },
    {
      title: "Purple Jacket",
      price: "$39.95 - $199.95",
      img: " Item (4).png",
      colors: ["purple", "pink"],
    },
  ];
  
  
  function Products(product) {
    let productDiv = document.querySelector("#Product-Container");
    
    product.forEach((product)=>{
      const productContent = document.createElement("div");
      productContent.classList.add("product-content");


      const productimg =document.createElement("img");
      productimg.src=product.img;
      productimg.alt=product.title;
      productimg.classList.add("product-img");
      productContent.appendChild(productimg);


      const producttitle = document.createElement("span");
      producttitle.textContent=product.title;
      producttitle.classList.add("product-title");
      productContent.appendChild(producttitle);


      const productprice = document.createElement("p");
      productprice.textContent=product.price
      productprice.classList.add("product-price");
      productContent.appendChild(productprice);

      if(product.colors){
          let colorContainer = document.createElement("div");
        product.colors.forEach((color)=>{
          const colorDot=document.createElement("span");
          colorDot.style.backgroundColor = color;
          colorContainer.appendChild(colorDot);
        });
        productContent.appendChild(colorContainer);
        
      };
      productDiv.appendChild(productContent);
    });
  }
  
  Products(products1);
  Products(products2);