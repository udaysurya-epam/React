import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './Basics_and_Hooks/App';
import ClassApp from './Basics_and_Hooks/ClassApp'
import UseStateEdgeCasesDemo from './Basics_and_Hooks/UseStateExample';
import UseEffectExamples from './Basics_and_Hooks/UseEffectExample';
import App from './Router/App';
import { AuthProvider } from './Router/Context/AuthContext';
import { ThemeProvider } from './Router/Context/ThemeContext';
import './index.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);
// // root.render(<ClassApp />);
// // root.render(<UseStateEdgeCasesDemo />);
// // root.render(<UseEffectExamples />);


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <AuthProvider>
//             <ThemeProvider>
//                 <App />
//             </ThemeProvider>
//         </AuthProvider>
//     </React.StrictMode>
// );
