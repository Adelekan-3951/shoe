import ShoeCard from "./shoes";
import Shoe from "./shoeImage.jpeg";
const Products = () => {
  const shoeCollection = [
    {
      id: 1,
      name: "Nike",
      image: Shoe,
      type: "Air force",
      price: 29,
    },
    {
      id: 1,
      name: "Nike",
      image: Shoe,
      type: "Air force",
      price: 29,
    },
    {
      id: 1,
      name: "Nike",
      type: "Air force",
      image: Shoe,
      price: 29,
    },
    {
      id: 1,
      name: "Nike",
      image: Shoe,
      type: "Air force",
      price: 29,
    },
  ];
  return (
    <div>
      <div>
        <h1>Our Products</h1>
        <div>
          {shoeCollection.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              name={shoe.name}
              image={shoe.image}
              price={shoe.price}
              type={shoe.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
