import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Chip, 
  Stack, 
  Divider 
} from '@mui/material';

function AssetCard({ asset, onOpenModal }) {
  // Verificación de estado para asignar color al Badge (Chip)
  const isDisponible = asset.status === 'Disponible';

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 3, 
        boxShadow: 2, 
        transition: 'all 0.3s ease-in-out',
        // Efecto visual al pasar el mouse 
        '&:hover': { 
          transform: 'translateY(-8px)', 
          boxShadow: 8,
          borderColor: 'primary.light'
        },
        border: '1px solid',
        borderColor: 'divider'
      }}
    >
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Chip 
            label={asset.status} 
            color={isDisponible ? "success" : "warning"} 
            size="small" 
            sx={{ fontWeight: 'bold', px: 1 }}
          />
          <Typography variant="caption" sx={{ color: 'text.disabled', letterSpacing: 1 }}>
            {asset.id}
          </Typography>
        </Stack>

        {}
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1 }}>
          {asset.nombre}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
          <strong>Categoría:</strong> &nbsp; {asset.categoria}
        </Typography>
      </CardContent>

      <Divider variant="middle" sx={{ opacity: 0.6 }} />

      <CardActions sx={{ p: 2 }}>
        <Button 
          fullWidth 
          variant="contained" 
          disableElevation
          onClick={() => onOpenModal(asset)}
          sx={{ 
            textTransform: 'none', 
            fontWeight: 'bold',
            borderRadius: 2
          }}
        >
          Ver Detalles Técnicos
        </Button>
      </CardActions>
    </Card>
  );
}

export default AssetCard;