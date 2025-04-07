import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggler from './ThemeToggler';
import StaticComponent from './StaticComponent';
import DynamicComponent from './DynamicComponent';

 
// // Child component (uses props)
// function Greeting({ name }) {
//   useEffect(() => {
//     console.log(`Greeting component mounted or updated with name: ${name}`);
//     return () => {
//       console.log('Greeting component will unmount');
//     };
//   }, [name]);
 
//   return <h2>Hello, {name}!</h2>;
// }
 
// // Main component (uses state and renders child)
// function App() {
//   const [name, setName] = useState('Sanjay');
//   const [count, setCount] = useState(0);
 
//   useEffect(() => {
//     console.log('App component mounted');
//     return () => {
//       console.log('app component will unmount');
//     };
//   }, [count]);
 
//   return (
//     <div>
//       <h1>React Basics Demo</h1>
//       <Greeting name={name} />
//       <p>Button clicked {count} times.</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//       <button onClick={() => setName('Darpana')}>Change Name</button>
//     </div>
//   );
// }
 
 
// // Custom Hook: Track Window Width
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   return width;
// }

// //Theme Context Setup
// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () =>
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Main Component
// function App() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [count, setCount] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const width = useWindowWidth();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
//         color: theme === 'light' ? '#000' : '#fff',
//         padding: '2rem',
//         textAlign: 'center',
//       }}
//     >
//       <h1>React Hooks Demo</h1>
//       <p>Current Theme: <strong>{theme}</strong></p>
//       <button onClick={toggleTheme}>Toggle Theme</button>

//       <hr />

//       <h2>Counter (useState)</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

//       <hr />

//       <h2>Timer (useEffect)</h2>
//       <p>App running for: {seconds} seconds</p>

//       <hr />

//       <h2>Window Width (Custom Hook)</h2>
//       <p>Current width: {width}px</p>
//     </div>
//   );
// }

 //Wrap App with ThemeProvider
// export default function RootApp() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }



const RootApp = () => (
  <ThemeProvider>
    <h1>useContext Edge Case Demo</h1>
    <ThemeToggler />
    <StaticComponent />
    <DynamicComponent />
  </ThemeProvider>
);

export default RootApp;

