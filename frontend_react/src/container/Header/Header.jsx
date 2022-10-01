import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className='app__header app__flex'>
    {/* name and greeting */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      // animation for the name
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span style={{ fontSize: "2.5rem" }}>👋🏽</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Chidozie</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='typewriter-text'>
            <Typewriter
              className='typewriter-text'
              style={{ color: "white" }}
              options={{
                strings: [
                  "Web Developer",
                  "Solidity Developer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </div>
    </motion.div>
    {/* my picture */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <img src={images.profile} alt='profile_bg' />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
      />
    </motion.div>

    {/* floating bubbles behind me */}
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[images.react, images.ethereum, images.solidity].map((circle, index) => (
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='profile_bg' />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
// using the higher order component 'AppWrap', we pass in the Heder as the first argument, and the header's div id 'home' as the order argument
