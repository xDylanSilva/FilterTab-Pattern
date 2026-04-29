import { useState } from 'react';
import AssetCard from './components/AssetCard';
import FilterBar from './components/FilterBar';
import './App.css';

const DATA_INICIAL = [
  { 
    id: 'EQU-001', 
    nombre: 'Osciloscopio Digital', 
    categoria: 'Laboratorio', 
    status: 'Disponible', 
    detalle: 'Calibrado el mes pasado por el departamento de física.' 
  },
  { 
    id: 'EQU-002', 
    nombre: 'Laptop Workstation', 
    categoria: 'Computo', 
    status: 'En Mantenimiento', 
    detalle: 'Cambio de disco sólido y batería en progreso.' 
  },
  { 
    id: 'EQU-003', 
    nombre: 'Proyector 4K', 
    categoria: 'Audiovisual', 
    status: 'Disponible', 
    detalle: 'Ubicado en la Sala de Conferencias A. Incluye control remoto.' 
  },
  { 
    id: 'EQU-004', 
    nombre: 'Multímetro de Precisión', 
    categoria: 'Laboratorio', 
    status: 'En Mantenimiento', 
    detalle: 'Falla en las puntas de prueba. Pendiente de reposición.' 
  },
  { 
    id: 'EQU-005', 
    nombre: 'Servidor Dell PowerEdge', 
    categoria: 'Sistemas', 
    status: 'Disponible', 
    detalle: 'Servidor de respaldo para el área de desarrollo.' 
  }
];

function App() {
  const [activos] = useState(DATA_INICIAL);
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState(null);

  const activosFiltrados = activos.filter(item => 
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Gestión de Activos Universitarios</h1>
      <FilterBar onFilterChange={setBusqueda} />
      
      <div className="assets-grid">
        {activosFiltrados.map(asset => (
          <AssetCard 
            key={asset.id} 
            asset={asset} 
            onOpenModal={setSeleccionado} 
          />
        ))}
      </div>

      {/* Patrón Modal Simplificado */}
      {seleccionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{seleccionado.nombre}</h2>
            <p><strong>Información Técnica:</strong> {seleccionado.detalle}</p>
            <button onClick={() => setSeleccionado(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;