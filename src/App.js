import { useEffect, useState } from "react";
import Cart from "./Cart";
import Homescreen from "./Homescreen";
import Navbar from "./Navbar";

const App=()=>{
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (val) => {
    if (cart.indexOf(val) !== -1) return;
    setCart([...cart, val]);
  };

  const handleChange = (val, d) => {
    const ind = cart.indexOf(val);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

return(
  <div>
   <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Homescreen handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}


  </div>
)
}
export default App;