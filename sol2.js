// Filter --> produk bernilai benar
const products = [
    { id: 1, name: 'Laptop', inStock: true },
    { id: 2, name: 'Phone', inStock: false },
    { id: 3, name: 'Tablet', inStock: true },
    { id: 4, name: 'Headphones', inStock: false },
  ];

  const valueTrue = products.filter (value => value.inStock);
  console.log(valueTrue);
  
  