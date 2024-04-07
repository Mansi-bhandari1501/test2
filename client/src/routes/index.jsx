import React from 'react'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

// import Signuppage from '../pages/Signup/sign-up';
import LoginPage from '../pages/Login/login';
import Signuppage from '../pages/Signup/singup';
import ErrorPage from '../components/ErrorComponent';
import Home from '../pages/Home';
import AllCards from '../components/AllCards';
import ProductDetail from '../components/ProductDetails';
import AddBook from '../components/AddProduct/AddProduct';
import AddBookPage from '../pages/Addproducts';
import Protected from './protected';
import Admin from './isAdmin';
// import HomePage from '../pages/Home/home';
// import Signuppage from '../pages/Signup/sign-up';
// import Profile from '../pages/Profile/profile';
// import Network from '../pages/Network/network';
// import ManageNetwork from '../pages/Network/manageNetwork';
// import ActiveConnections from '../pages/Network/myConnections';
// import Message from '../pages/Message';
// // import Example from '../page';
// import io from "socket.io-client";
// import Notifications from '../pages/Notification/notifications';

// const socket =io.connect("http://localhost:8080/")
// const socketNotify =io.connect("http://localhost:4000/")
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {/* <Switch> */}
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path="/home" element={<Protected Component={Home} />} /> */}
          {/* <Route path='/addproduct' element={< Admin Component={AddBookPage} />}/> */}
          <Route path='/addproduct' element={AddBookPage} />
          <Route exact path="/products" element={<AllCards/>} />
          <Route exact path="/product/:id" element={<ProductDetail/>} />
          {/* <Route path='/' element={<Example />} /> */}
        
          {/* <Route path='/message' element={<Message socket={socket}/>} />
          <Route path='/mynetwork' element={<Network />} />
          <Route path='/notifications' element={<Notifications socket={socketNotify}/>} />
          <Route path='/mynetwork/invitation-manager' element={<ManageNetwork />} />
          <Route path='/mynetwork/invite-connect/connections' element={<ActiveConnections />} /> */} 
          {/* <ToastContainer /> */}
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
