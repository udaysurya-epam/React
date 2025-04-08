// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

///111////////////////////////////////////////////////////////////////////////////////

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Profile from './components/Profile';
// import NotFound from './pages/NotFound';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="profile" element={<Profile />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

///222///////////////////////////////////////////////////////////////
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './pages/Layout'
// import Home from './pages/home/Home';
// import About from './pages/about/About';
// import Profile from './pages/profile/Profile';
// import NotFound from './pages/NotFound';
// import Protected from './pages/Protected';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />}>
//             <Route path="profile" element={
//               <Protected>
//                 <Profile />
//               </Protected>
//             } />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

///333//////////////////////////////////////////////////////////////////////

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Suspense, lazy } from 'react';

// import Layout from './components/Layout';
// import Protected from './components/Protected';

// // Lazy-loaded pages/components
// const Home = lazy(() => import('./components/Home'));
// const About = lazy(() => import('./components/About'));
// const Profile = lazy(() => import('./components/Profile'));
// const User = lazy(() => import('./components/User'));
// const NotFound = lazy(() => import('./Pages/NotFound'));

// function App() {
//     const Home = lazy(() => new Promise(resolve => {
//         setTimeout(() => resolve(import('./components/Home')), 1500);
//       }));
      
//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />}>
//               <Route
//                 path="profile"
//                 element={
//                   <Protected>
//                     <Profile />
//                   </Protected>
//                 }
//               />
//             </Route>
//             <Route path="user/:id" element={<User />} />
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;


///444//////////////////////////////////////////
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';

import Layout from './pages/Layout';
import Protected from './pages/Protected';
import Users from './components/Users'; // adjust path if needed
import ContactForm from './components/contact/Contacts'; // adjust path if needed

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const User = lazy(() => import('./components/User'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route
              path="profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
          </Route>
          <Route path="user/:id" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
