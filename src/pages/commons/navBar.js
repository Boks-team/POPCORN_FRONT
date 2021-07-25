import React from "react";
import NavBar from "../../components/commons/navBar";

const a = [1,2,3,4,5];

const write = () =>{
  console.log(a.forEach((item)=> console.log(item)));
  console.log(a.map((item)=> console.log(item)));
  const b = a.forEach((item) => item*2);
  console.log(b);
}

const NavBarPage = () => {
  {write()};
  return (
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
  )
};

export default NavBarPage;