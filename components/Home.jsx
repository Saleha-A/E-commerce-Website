  import bgImage from "../assets/home.png";
import { useNavigate } from "react-router-dom";
   const handleClick = () => {
     alert("Thanks for choosing our products!");
   }

const Home = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
  };
    return (
     <div
 className ="absolute top-0 left-0 w-full h-screen bg-cover  bg-no-repeat text-white flex items-start justify-start pt-[16vh] z-0  bg-[position:95%_-19%]  alt=Child smiling"  
  style={{ backgroundImage: `url(${bgImage})` }}
      >
  <div>
  <h1 className="text-5xl font-bold mb-6 mt-[116px] ml-[96px]">
    <span className="text-5xl text-red-900 text-green-900 hover:text-black hover:scale-105 transition duration-400 ease-in-out inline-block"><i>  Welcome To KiddieCart </i></span>
  </h1>
   <p className="text-3xl  mb-6 mt-[30px] ml-[120px] font-bold">
  <br/>
 <span className="text-4xl text-green-900 hover:text-purple-900 hover:scale-105 transition duration-300 ease-in-out inline-block ">
 Tiny trends, big smiles <br/></span>
   <br/>
   <br/>
  <span className="text-4xl text-blue-900 hover:text-red-900 hover:scale-105 transition duration-300 ease-in-out inline-block"> — their values,<br/></span>
  <br/>
  <span className="text-4xl text-purple-900 hover:text-green-900 hover:scale-105 transition duration-300 ease-in-out inline-block">  — their rhythm,<br/></span>
 <br/>
  <span className="text-4xl text-red-900 hover:text-blue-900 hover:scale-105 transition duration-300 ease-in-out inline-block"> — their world.<br/></span>
  <br/>

  </p>
  </div>

  <button onClick={handleClick} className="ml-[-500px] mt-125 px-9 py-3 bg-red-900 text-white text-xl font-semibold rounded hover:bg-purple-900 transition duration-300 ease-in-out">
     Explore Products
     
</button>
  </div>
    );
  };

  export default Home;


