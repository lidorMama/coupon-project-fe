import Footer from '../footer/Footer';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Register from '../register/Register';
import './Layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Company from '../company/Company';
import Customer from '../customer/Customer';
import Admin from '../admin/Admin';
import Home from '../home/Home';

function Layout() {
  return (
    <section className="layout">
      <BrowserRouter>
        <header>
          <Header />
        </header>

        {/* <aside>
          {/* <Menu /> */}
        {/* </aside> */} 

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Company" element={< Company />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
        </BrowserRouter>
    </section>
  );
}

export default Layout;
