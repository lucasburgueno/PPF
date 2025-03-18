import { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Historial');
  const menuItems = ['Historial', 'Generar Resumen', 'Comparar Documentos', 'Generar BD'];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="/image.png" alt="Logo" />
        </div>
        <div className="menu-section">
          <p className="menu-title">TOOLS</p>
          <ul className="menu-list">
            {menuItems.map((item) => (
              <li key={item}
                className={`menu-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="main-content">
        <h1>{activeItem}</h1>
        <p>Contenido de la sección "{activeItem}" aquí...</p>
      </main>
    </div>
  );
};

export default Dashboard;
