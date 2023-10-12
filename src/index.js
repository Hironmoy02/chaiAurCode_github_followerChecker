import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{RouterProvider,Route,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import User from './componenets/User/User';
import Github from './componenets/Github/Github';

// const router =createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//         },{
//           path:"aboutcontact",
//           element:<Contact/>
//           }
      
//     ]
//   }
// ])
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
<Route path="" element={<Home/>} />
<Route path="about" element={<About/>} />
<Route path="contact" element={<Contact/>} />
<Route path="User/:id" element={<User/>} />
<Route path="github" element={<Github/>} />

  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
