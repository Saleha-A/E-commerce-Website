
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";


const Navbar = ({ cart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showCartItems, setShowCartItems] = useState(false);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      alert("You are already logged in! Please continue shopping, or log out from your account.");
    } else {
      setShowModal(true);
      setIsLoginForm(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowModal(false);
    alert("Login Successful!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowModal(false);
    alert(" Account Created & Logged In!");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-green-900 text-white p-4 flex justify-between z-50">
        <h1 className="font-bold ml-9 text-3xl hover:text-red-900 transition duration-400">
          KiddieCart
        </h1>

        <div className="flex gap-10 items-center">
          <ul className="flex gap-10 text-2xl font-bold">
  <li className="cursor-pointer transition-colors duration-200">

</li>
            <li className="cursor-pointer hover:text-red-900"><Link to="/">Home</Link></li>
            <li className="cursor-pointer hover:text-red-900"><Link to="/about">About</Link></li>
            <li className="cursor-pointer hover:text-red-900"><Link to="/products">Products</Link></li>
            <li className="cursor-pointer hover:text-red-900"><Link to="/contact">Contact Us</Link></li> 
            <li className="cursor-pointer">
  
</li>

          </ul>

          <div className="flex items-center bg-white rounded-full border border-gray-300 overflow-hidden ml-4">
            <input type="text" placeholder="I'm shopping for" className="px-4 py-2 text-black bg-white outline-none w-full" />
            <button className="px-4 py-2 bg-white text-black hover:bg-red-900 hover:text-white transition rounded-r-full">
              <FaSearch />
            </button>
          </div>

          <div className="flex items-center gap-4 ml-4">
            <button
              className="relative px-4 py-2 border border-white text-white rounded hover:bg-red-900"
              onClick={() => setShowCartItems(!showCartItems)}
            >
              <FaShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={handleLoginClick}
              className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-red-900 hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {showCartItems && (
        <div className="absolute top-20 right-6 bg-white text-black shadow-lg rounded-lg p-4 w-72 z-40">
          <h3 className="text-lg font-bold mb-2">🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span>{item.name}</span>
                  <span className="text-gray-600">{item.price}</span>
                </li>
                
              ))}
            </ul>
            
          )}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-600 hover:text-red-600">✖</button>

            <div className="flex justify-around mb-6">
              <button className={`px-4 py-2 font-bold ${isLoginForm ? "text-green-900 border-b-2 border-green-900" : "text-gray-500"}`} onClick={() => setIsLoginForm(true)}>Login</button>
              <button className={`px-4 py-2 font-bold ${!isLoginForm ? "text-green-900 border-b-2 border-green-900" : "text-gray-500"}`} onClick={() => setIsLoginForm(false)}>Sign Up</button>
            </div>

            {isLoginForm ? (
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="border p-2 rounded" required />
                <input type="password" placeholder="Password" className="border p-2 rounded" required />
                <button type="submit" className="bg-green-900 text-white py-2 rounded hover:bg-green-700">Login</button>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
                <input type="email" placeholder="Email" className="border p-2 rounded" required />
                <input type="password" placeholder="Password" className="border p-2 rounded" required />
                <button type="submit" className="bg-green-900 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
