const cart  = [
    {
        name: "Shirt",
        price: 299,
    },
    {
        name: "Pant",
        price: 699,
    },
    {
        name: "Belt",
        price: 199,
    },
    {
        name: "Shorts",
        price: 399,
    },
]

const total = cart.reduce( (acc , cart) => {
    console.log(`Accumlator: ${acc} , ItemPrice: ${cart.price}`);
    return acc + cart.price;
}, 0)

console.log(total);