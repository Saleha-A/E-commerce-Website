
import TShirt from "../assets/T-Shirt.png";
import nailColour from "../assets/NailColour.png";
import sunglasses from "../assets/Sunglasses.png";
import Cars from "../assets/Cars.png";
import Jacket from "../assets/Jacket.png";
import Headphones from "../assets/headphones.png";
import Toy from "../assets/toy.png";
import Earings from "../assets/earings.png";


const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: "30 SR",
    image: TShirt,
    description: "A comfortable cotton t-shirt",
  },
  {
    id: 2,
    name: "Headphones",
    price: "40 SR",
    image: Headphones,
    description: "High-quality over-ear headphones",
  },
  
  {
    id: 3,
    name: "Nail Colour",
    price: "15 SR",
    image: nailColour,
    description: "Long-lasting nail polish in various colors",
  },
  {
    id: 4,
    name: "Sun Glasses",
    price: "25 SR",
    image: sunglasses,
    description: "Stylish sunglasses with UV protection",
  },
  {
    id: 5,
    name: "Cars",
    price: "40 SR",
    image: Cars,
    description: "Cars for kids",
  },
  {
   id: 6,
    name: "Jacket",
    price: "40 SR",
    image: Jacket,
    description: "Elegant white jacket",
  },
  {
   id: 7,
    name: "Toy",
    price: "40 SR",
    image: Toy,
    description: "Elegant white jacket",
  },
    {
   id: 8,
    name: "Earings",
    price: "50 SR",
    image: Earings,
    description: "Elegant white jacket",
  },
  
  
 
 
];

const Products = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-5xl font-bold mb-6 text-center mt-24">Little Luxe Collection</h2>
<br />      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl  hover:bg-red-900 transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-white-700 mb-2">{product.price}</p>
            <p className="text-white-600 mb-4 text-center">{product.description}</p>

            <div className="flex gap-2">
              <button
                onClick={() => addToCart(product)}
                className="bg-green-900 text-white px-4 py-2 rounded hover:bg-red-900 transition"
              >
                Add to Cart
              </button>
            

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 
