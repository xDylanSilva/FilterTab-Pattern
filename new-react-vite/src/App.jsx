import { useState } from 'react';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import AssetCard from './components/AssetCard';

const DATA_INICIAL = [
  { id: 'EQU-001', nombre: 'Osciloscopio Digital', categoria: 'Laboratorio', status: 'Disponible', detalle: 'Calibrado el mes pasado.' },
  { id: 'EQU-002', nombre: 'Laptop Workstation', categoria: 'Computo', status: 'En Mantenimiento', detalle: 'Cambio de batería en progreso.' },
  { id: 'EQU-003', nombre: 'Proyector 4K', categoria: 'Audiovisual', status: 'Disponible', detalle: 'Ubicado en Sala A.' },
  { id: 'EQU-004', nombre: 'Multímetro de Precisión', categoria: 'Laboratorio', status: 'En Mantenimiento', detalle: 'Falla en puntas de prueba.' },
  { id: 'EQU-005', nombre: 'Servidor Dell', categoria: 'Sistemas', status: 'Disponible', detalle: 'Servidor de respaldo.' }
];

function App() {
  const [activos] = useState(DATA_INICIAL);
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState(null);

  const activosFiltrados = activos.filter(item => 
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Gestión de Activos</h1>
        <p className="lead">Sistema de inventario universitario</p>
      </header>

      {/* Patrón Filter Bar con Form de Bootstrap */}
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <Form.Control 
            type="text" 
            placeholder="Buscar por nombre de equipo..." 
            size="lg"
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Col>
      </Row>

      {/* Patrón Grid con Row/Col */}
      <Row className="g-4">
        {activosFiltrados.map(asset => (
          <Col key={asset.id} xs={12} sm={6} lg={4}>
            <AssetCard asset={asset} onOpenModal={setSeleccionado} />
          </Col>
        ))}
      </Row>

      {/* Patrón Modal de Bootstrap */}
      <Modal show={!!seleccionado} onHide={() => setSeleccionado(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{seleccionado?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>ID del Activo:</strong> {seleccionado?.id}</p>
          <p><strong>Estado:</strong> {seleccionado?.status}</p>
          <hr />
          <p>{seleccionado?.detalle}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSeleccionado(null)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;