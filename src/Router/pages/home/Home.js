// import { Link } from 'react-router-dom';

// function Home() {
//   console.log('Home component loaded');

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link to="/about">Go to About</Link>
//     </div>
//   );
// }

// export default Home;
// import { motion } from 'framer-motion';

// function Home() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4 }}
//     >
//       <h1>Home Page</h1>
//     </motion.div>
//   );
// }

// export default Home;


import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-content">
        <h1>Welcome to My React App 🚀</h1>
        <p>Explore routing, themes, APIs, and forms — all with style.</p>
        <a href="/about" className="cta-btn">Get Started</a>
      </div>
    </motion.div>
  );
}

export default Home;

