const productList = document.getElementById("product-list");

const products = [
	{
		name: "N5 Chanel eau de parfum spray bottle",
		image: "img for portfolio/Product 1.avif",
		price: "$99.99"
	},
	{
		name: "Prada Milano Perfume",
		image: "img for portfolio/photo-1610461888750-10bfc601b874.avif",
		price: "$79.99"
	},
	{
		name: "calvin klein one for men spray ",
		image: "img for portfolio/photo-1619994403073-2cec844b8e63.avif",
		price: "$59.99"
	}
];

products.forEach(product => {
	const li = document.createElement("li");
	li.innerHTML = `
		<img src="${product.image}" alt="${product.name}">
		<h3>${product.name}</h3>
		<p>${product.price}</p>
	`;
	productList.appendChild(li);
});