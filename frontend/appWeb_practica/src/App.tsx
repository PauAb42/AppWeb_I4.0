import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importa tus componentes (asegúrate de que existan)
import UserForm from './modules/user/UserForm';
import ProductTable from './modules/product/ProductData';
import OrderTable from './modules/order/OrderData';

const App: React.FC = () => {
 // eslint-disable-next-line no-empty-pattern
 const [] = useState(0);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/orders">Órdenes</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/users" element={<UserForm />} />
        <Route path="/products" element={<ProductTable />} />
        <Route path="/orders" element={<OrderTable />} />
      </Routes>
    </Router>
  );
};

export default App;