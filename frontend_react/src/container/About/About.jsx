import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  //  loop through our about section
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I possess <span>all</span> the <br /> <span>Skills you need</span>
        <br />
        to create Your <span>digital Products.</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <br />
      <br />
      <h2 className='head-text'>
        Additionally, i do; <br />
        <span>
          Data Analysis, <br />
          HTML E-mail Template Design,
          <br />
          Competition Monitoring, <br />
          Analytics Interpretation and Reporting,
          <br />
          Blog Customization/Management,
          <br />
          Search Engine Optimization (SEO),
          <br />
          Usability Testing,
          <br /> among Others.
        </span>
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
