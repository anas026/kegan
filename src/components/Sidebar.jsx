import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ImHome } from "react-icons/im";
import { VscNewFile } from "react-icons/vsc";
import { HiUserGroup } from "react-icons/hi";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { BiAnalyse, BiSearch, BiCog } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";

import { NavLink } from "react-router-dom";
const Routes = [
  {
    path: "/",
    name: "home",
    icon: <ImHome />,
  },
  {
    path: "/addprojet",
    name: "Add-project",
    icon: <VscNewFile />,
  },
  {
    path: "/messages",
    name: "messages",
    icon: <HiUserGroup />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BsGraphUp />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <IoCalendarSharp />,
  },
  {
    path: "/location",
    name: "location",
    icon: <TbMap2 />,
  },
];
function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="container-fluid">
        <div className="row">
      <div className="col-md-3">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "40px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top-section">
            <button onClick={toggle}>toggle</button>
            <div className="col-md-12">
              <div className="logo">
                <img src="logo.png" width={"30px"} className="mt-2 ml-4 mb-4" />
              </div>
            </div>
          </div>
          <section className="routes">
            {Routes.map((route) => (
               <NavLink
                to={route.path}
                key={route.name}
                className="link d-flex text-grey "
              >
              
                <div className="icon mb-3 "  >{route.icon}</div>
              
                {isOpen && 
                <div className="link-text ">{route.name}</div>}
              </NavLink>
            ))}
          </section>
        </motion.div>
       
     
      </div>
      <div className="col-md-6">
      <main>
        {children}
       </main>
      </div>
    </div>
    
    </div>
  );
}

export default Sidebar;
