import React from 'react'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

// import Signuppage from '../pages/Signup/sign-up';
import LoginPage from '../pages/Login/login';
import Signuppage from '../pages/Signup/singup';
import ErrorPage from '../components/ErrorComponent';
import Home from '../pages/Home';
import AllCards from '../components/AllCards';
import ProductDetail from '../components/ProductDetails';
import AddBookPage from '../pages/Addproducts';
import Protected from './protected';
import Admin from './isAdmin';
import EditTest from '../pages/EditTest';
import AdminDashbaord from '../pages/AdminDashboard';
import Login from './isLogin';
import Products from '../pages/Products';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
     
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path='/addproduct' element={< Admin Component={AddBookPage} />}/>
          <Route path='/dashboard' element={< Admin Component={AdminDashbaord} />}/>
          <Route path='/products' element={< Login Component={Products} />}/>
          <Route path='/product/:id' element={< Login Component={ProductDetail} />}/>
          <Route path='/editTest/:id' element={< Admin Component={EditTest} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
