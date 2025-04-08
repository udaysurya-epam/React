// function Profile() {
//     return <h3>Profile Info Inside About Page</h3>;
//   }
  
//   export default Profile;
  
import { motion } from 'framer-motion';
import './Profile.css';

function Profile() {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <h3>👤 Profile Info</h3>
      <p>This is nested inside the About page via React Router’s nested routing.</p>
    </motion.div>
  );
}

export default Profile;
