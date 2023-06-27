const productsArray = [
  {
    id: "1",
    title: "OK Computer",
    artist: "Radiohead",
    price: 12.99,
  },
  {
    id: "2",
    title: "Painting Pictures",
    artist: "Kodak Black",
    price: 12.99,
  },
  {
    id: "3",
    title: "Diamond Eyes",
    artist: "Deftones",
    price: 12.99,
  },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log('product data does not exist for ID: ' + id);
        return undefined
    }

    return productData;
}

export { productsArray, getProductData };
