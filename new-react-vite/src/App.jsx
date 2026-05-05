import { useState } from 'react';
// Importamos los componentes de Material UI
import { 
  Container, 
  Grid, 
  TextField, 
  Typography, 
  Modal, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardActions, 
  Chip, 
  Stack,
  CssBaseline 
} from '@mui/material';
// Datos de ejemplo
const DATA_INICIAL = [
  { id: 'EQU-001', nombre: 'Osciloscopio Digital', categoria: 'Laboratorio', status: 'Disponible', detalle: 'Calibrado el mes pasado por el departamento de física.' },
  { id: 'EQU-002', nombre: 'Laptop Workstation', categoria: 'Computo', status: 'En Mantenimiento', detalle: 'Cambio de disco sólido y batería en progreso.' },
  { id: 'EQU-003', nombre: 'Proyector 4K', categoria: 'Audiovisual', status: 'Disponible', detalle: 'Ubicado en la Sala de Conferencias A. Incluye control remoto.' },
  { id: 'EQU-004', nombre: 'Multímetro de Precisión', categoria: 'Laboratorio', status: 'En Mantenimiento', detalle: 'Falla en las puntas de prueba. Pendiente de reposición.' },
  { id: 'EQU-005', nombre: 'Servidor Dell PowerEdge', categoria: 'Sistemas', status: 'Disponible', detalle: 'Servidor de respaldo para el área de desarrollo.' },
  { id: 'EQU-006', nombre: 'Impresora 3D', categoria: 'Laboratorio', status: 'Disponible', detalle: 'Lista para impresión de prototipos. Requiere filamento PLA.' }
];

// Estilos para el Modal (Patrón: Modal Overlay)
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 450 },
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

// Componente de Tarjeta interno (Patrón: Card System)
function AssetCard({ asset, onOpenModal }) {
  const isDisponible = asset.status === 'Disponible';

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      boxShadow: 2,
      transition: '0.3s',
      '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Chip 
            label={asset.status} 
            color={isDisponible ? "success" : "warning"} 
            size="small" 
            variant="soft"
          />
          <Typography variant="caption" color="text.secondary" fontWeight="bold">
            {asset.id}
          </Typography>
        </Stack>
        <Typography variant="h6" component="div" gutterBottom fontWeight="bold">
          {asset.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Área: {asset.categoria}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          fullWidth 
          variant="outlined" 
          color="primary" 
          onClick={() => onOpenModal(asset)}
        >
          Ver Ficha Técnica
        </Button>
      </CardActions>
    </Card>
  );
}

// Componente Principal
export default function App() {
  const [activos] = useState(DATA_INICIAL);
  const [busqueda, setBusqueda] = useState('');
  const [seleccionado, setSeleccionado] = useState(null);

  // Lógica del Patrón: Filter Bar
  const activosFiltrados = activos.filter(item => 
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <CssBaseline /> {/* Normaliza CSS y quita márgenes*/}
      
      {/* Encabezado */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight="800" color="primary.main" gutterBottom>
          Asset Manager
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Control de inventario y equipos técnicos
        </Typography>
      </Box>

      {/* Buscador de Activos */}
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
        <TextField 
          placeholder="Buscar por nombre o categoría..." 
          variant="outlined" 
          fullWidth 
          sx={{ maxWidth: 600, bgcolor: 'white' }}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Box>

      {/* Rejilla de 3 Columnas (Patrón: Responsive Grid) */}
      <Grid container spacing={4}>
        {activosFiltrados.map(asset => (
          <Grid item key={asset.id} xs={12} sm={6} md={3}>
            <AssetCard asset={asset} onOpenModal={setSeleccionado} />
          </Grid>
        ))}
      </Grid>

      {/* Detalle del Activo (Patrón: Modal Overlay) */}
      <Modal 
        open={!!seleccionado} 
        onClose={() => setSeleccionado(null)}
        closeAfterTransition
      >
        <Box sx={modalStyle}>
          <Typography variant="overline" color="primary" fontWeight="bold">
            Detalle del Equipo
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {seleccionado?.nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 3 }}>
            {seleccionado?.detalle}
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={() => setSeleccionado(null)} color="inherit">
              Cerrar
            </Button>
            <Button variant="contained" onClick={() => setSeleccionado(null)}>
              Aceptar
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Feedback si no hay resultados */}
      {activosFiltrados.length === 0 && (
        <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
          No se encontraron equipos que coincidan con tu búsqueda.
        </Typography>
      )}
    </Container>
  );
}