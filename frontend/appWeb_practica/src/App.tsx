import React from 'react';
import './App.css';
import UserForm from './module/user/UserForm'; 

const App: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ textAlign: 'center' }}>Mi App con React</h1>
      <UserForm />
    </div>
  );
};

export default App;