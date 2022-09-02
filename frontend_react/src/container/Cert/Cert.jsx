import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Cert.scss";

const Cert = () => {
  const [certs, setCerts] = useState([]);
  const [filterCert, setFilterCert] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "certs"]';

    client.fetch(query).then((data) => {
      setCerts(data);
      setFilterCert(data);
    });
  }, []);

  const handleCertFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterCert(certs);
      } else {
        setFilterCert(certs.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        Here's why I'm the <span>Most Certified </span>
        <br />
        Man for
        <span> the Job.</span>
      </h2>

      <div className='app__work-filter'>
        {[
          "Web Development",
          "Software Engineering",
          "BlockChain",
          "Data Analysis",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleCertFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterCert.map((cert, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(cert.imgUrl)} alt={cert.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={cert.certificateLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{cert.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {cert.description}
              </p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{cert.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Cert, "app__works"),
  "work",
  "app__primarybg"
);

// import React, { useState, useEffect } from "react";
// import { AiFillEye } from "react-icons/ai";
// import { motion } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
// import "./Cert.scss";

// const Cert = () => {
//   const [certs, setCerts] = useState([]);
//   const [filterCert, setFilterCert] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

//   useEffect(() => {
//     const query = '*[_type == "certs"]';

//     client.fetch(query).then((data) => {
//       setCerts(data);
//       setFilterCert(data);
//     });
//   }, []);

//   const handleCertFilter = (item) => {
//     setActiveFilter(item);
//     setAnimateCard([{ y: 100, opacity: 0 }]);

//     setTimeout(() => {
//       setAnimateCard([{ y: 0, opacity: 1 }]);

//       if (item === "All") {
//         setFilterCert(certs);
//       } else {
//         setFilterCert(certs.filter((cert) => cert.tags.includes(item)));
//       }
//     }, 500);
//   };

//   return (
//     <>
// <h2 className='head-text'>
//   View My <span>Certificates</span>
// </h2>

//       <div className='app__work-filter'>
//         {[
// "Full Stack Web Development",
// "Software Engineering",
// "Web3",
// "Data Analysis",
// "All",
//         ].map((item, index) => (
//           <div
//             key={index}
//             onClick={() => handleCertFilter(item)}
//             className={`app__work-filter-item app__flex p-text ${
//               activeFilter === item ? "item-active" : ""
//             }`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       <motion.div
//         animate={animateCard}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className='app__work-portfolio'
//       >
//         {filterCert.map((cert, index) => (
//           <div className='app__work-item app__flex' key={index}>
//             <div className='app__work-img app__flex'>
//               <img src={urlFor(cert.imgUrl)} alt={cert.name} />

//               <motion.div
//                 whileHover={{ opacity: [0, 1] }}
//                 transition={{
//                   duration: 0.25,
//                   ease: "easeInOut",
//                   staggerChildren: 0.5,
//                 }}
//                 className='app__work-hover app__flex'
//               >
//                 <a href={cert.certificateLink} target='_blank' rel='noreferrer'>
//                   <motion.div
//                     whileInView={{ scale: [0, 1] }}
//                     whileHover={{ scale: [1, 0.9] }}
//                     transition={{ duration: 0.25 }}
//                     className='app__flex'
//                   >
//                     <AiFillEye />
//                   </motion.div>
//                 </a>
//               </motion.div>
//             </div>

//             <div className='app__work-content app__flex'>
//               <h4 className='bold-text'>{cert.title}</h4>
//               <p className='p-text' style={{ marginTop: 10 }}>
//                 {cert.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Cert, "app__works"),
//   "cert",
//   "app__primarybg"
// );
