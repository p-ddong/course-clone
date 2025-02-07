import { useState, useEffect } from "react";
import './style.scss'
import logo from '../../assets/logo.png.webp'
import phone from '../../assets/phone-call.svg'
import { FaBars } from "react-icons/fa";

const NavBar = () => {

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${scrollY>=100?"scrolled":""}`}>
        <div className='logo'>
          <img src={logo} alt="" />
          <p>course</p>
        </div>
        <div className='list-function'><ul>
            <li>home</li>
            <li>about us</li>
            <li>courses</li>
            <li>elements</li>
            <li>news</li>
            <li>contact</li>
            </ul></div>
        <div className='phone'>
          <img src={phone} alt="" />
          <p>+43 4566 7788 2457</p>
        </div>
        <FaBars className="menu-toggle"/>
    </div>
  )
}

export default NavBar