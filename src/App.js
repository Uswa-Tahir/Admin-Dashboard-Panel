import logo from './logo.svg';
import './App.css';
import BlockIcon from '@mui/icons-material/Block';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
import Users from './pages/userList/Users';
import User from './pages/user/User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import ProductSingle from './pages/productSingle/ProductSingle';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    
    //    <div >
    //   <TopBar/>
    //   <div className='container'>
    //   <SideBar/>
     
    //     <Home/>
       
    //     <UserList/>
        
       
      
    //   </div>
    // </div>
    <div>
    <TopBar/>
      <div className='container'>
      
    <BrowserRouter>
    <SideBar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="users" element={<Users/>} />
        <Route path="user/:userId" element={<User/>} />
        <Route path="newUser" element={<NewUser/>} />

        <Route path="products" element={<ProductList/>} />
        <Route path="product/:productId" element={<ProductSingle/>} />
        <Route path="newProduct" element={<NewProduct/>} />
        
      </Routes>
    </BrowserRouter>
   </div>
   </div>
  );
}

export default App;
