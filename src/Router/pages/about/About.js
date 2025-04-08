// import { Link } from 'react-router-dom';

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <Link to="/">Go to Home</Link>
//     </div>
//   );
// }

// export default About;


//111//////////////////////////////////////////////////
// import { Outlet } from 'react-router-dom';

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <Outlet />
//     </div>
//   );
// }

// export default About;

import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-content">
        <h1>About This App 📘</h1>
        <p>
          This is a modern React app with routing, theme switching, animations, API fetching, and form validation.
        </p>
        <p>
          Explore the Profile section (MAKE SURE YOU ARE LOGGED IN).
        </p>
      </div>

      {/* Nested Routes Will Render Here */}
      <Outlet />
    </motion.div>
  );
}

export default About;

