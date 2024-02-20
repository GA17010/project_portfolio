import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiSun, HiOutlineMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux'
import { changeDarkmode } from '../../redux/modeDark/darkSlide.ts'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.dark.value);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    dispatch(changeDarkmode(isDarkMode))
  }, [dispatch]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    localStorage.setItem('darkMode', newMode);
    dispatch(changeDarkmode(newMode))
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="button__mode-dark">
        <button
          type="button"
          onClick={toggleDarkMode}
        >
          {darkMode ? <HiOutlineMoon /> : <HiSun />}
        </button>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="button__mobile-mode-dark"
                >
                  {darkMode ? <HiOutlineMoon /> : <HiSun />}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
