const productsArray = [
  {
    id: "price_1NNNJzG7tgpxAxuReHdJ9uLu",
    image: 'https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/107347-597a0e4334ba6-l.jpg',
    title: "OK Computer",
    artist: "Radiohead",
    price: 12.99,
  },
  {
    id: "price_1NNNOiG7tgpxAxuRO0q8ZNd4",
    image:'https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/oh-sees-orc.jpg',
    title: "Orc",
    artist: "Oh Sees",
    price: 12.99,
  },
  {
    id: "price_1NNNREG7tgpxAxuREz2wWRsl",
    image: 'https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/white-stripes.jpg',
    title: "White Stripes",
    artist: "White Stripes",
    price: 12.99,
  },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('product data does not exist for ID: ' + id);
        return undefined
    }

    return productData;
}

export { productsArray, getProductData };
