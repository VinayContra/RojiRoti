// import Navbar from "./components/navbar/Navbar";
// import React from "react";
// import Home from "./pages/home/Home";
// import Footer from '/src/components/footer/Footer.jsx';


// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";

// function App() {

//   const Layout=()=>{
//     <div className="app">
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
   

//   }

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"/",
//           element:<Home/>
//         }
//       ]
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />


//     </div>
//   );
// }

// export default App
import React from 'react';
import Navbar from './components/navbar/Navbar'; 
import Footer from '/src/components/footer/Footer.jsx';
import Home from '/src/pages/home/Home.jsx'; 
import Gigs from '/src/pages/gigs/Gigs.jsx';
import Gig from '/src/pages/gig/Gig.jsx';
import Add from '/src/pages/add/Add.jsx';
import Orders from '/src/pages/orders/Orders.jsx';
import Messages from '/src/pages/messages/Messages.jsx';
import Message from '/src/pages/message/Message.jsx';
import Mygigs from '/src/pages/mygigs/Mygigs.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import "./app.scss"

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [ //array
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <Mygigs/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
