import React from "react";
import './Shop.css'
import { NavLink } from "react-router-dom";

function ShopSection() {
  return (
    <>
      <div className="container-fluid-shopping py-14 ">
        <div className="shopping">
          <h5>SHOP OUR</h5>
          <h1>Latest Collection</h1>
        </div>
        <div className="shopping-cart">
          <div className="shoppingImage">
            <NavLink to="/Necklace" className="Navlink"> <span><p>Necklaces</p></span></NavLink>
            <NavLink to="/Necklace"><img src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D" ></img></NavLink>
          </div>
          <div className="shoppingImage">
          <NavLink to="/Bracelet" className="Navlink"> <span><p>Bracelet</p></span></NavLink>
            <NavLink to="/Bracelet"><img src="https://images.unsplash.com/photo-1611598935678-c88dca238fce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJyYWNlbGV0fGVufDB8fDB8fHww"></img></NavLink>
          </div>
          <div className="shoppingImage">
          <NavLink to="/Rings" className="Navlink"> <span><p>Rings</p></span></NavLink>
           <NavLink to="/Rings"> <img src="https://images.unsplash.com/photo-1561151743-ee18310c2230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxyaW5nfGVufDB8fDB8fHww"></img></NavLink>
          </div>
          <div className="shoppingImage">
          <NavLink to="/Earrings" className="Navlink"> <span><p>Earrings</p></span></NavLink>
            <NavLink to="/Earrings"><img src="https://images.unsplash.com/photo-1509270900586-1184c22914e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGVhcnJpbmdzfGVufDB8fDB8fHww"></img></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopSection;