import { Card, Button, Badge } from 'react-bootstrap';

function AssetCard({ asset, onOpenModal }) {
  const isDisponible = asset.status === 'Disponible';

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg={isDisponible ? 'success' : 'warning'} text={isDisponible ? 'white' : 'dark'}>
            {asset.status}
          </Badge>
          <small className="text-muted">{asset.id}</small>
        </div>
        <Card.Title>{asset.nombre}</Card.Title>
        <Card.Text className="text-secondary">
          Categoría: {asset.categoria}
        </Card.Text>
        <Button variant="outline-primary" size="sm" onClick={() => onOpenModal(asset)}>
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AssetCard;