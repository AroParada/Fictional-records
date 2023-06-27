const productsArray = [
  {
    id: "price_1NNNJzG7tgpxAxuReHdJ9uLu",
    title: "OK Computer",
    artist: "Radiohead",
    price: 12.99,
  },
  {
    id: "price_1NNNOiG7tgpxAxuRO0q8ZNd4",
    title: "Painting Pictures",
    artist: "Kodak Black",
    price: 12.99,
  },
  {
    id: "price_1NNNREG7tgpxAxuREz2wWRsl",
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
