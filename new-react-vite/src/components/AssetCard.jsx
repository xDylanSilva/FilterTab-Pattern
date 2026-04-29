import './AssetCard.css';

function AssetCard({ asset, onOpenModal }) {
  const statusClass = asset.status === 'Disponible' ? 'status-ok' : 'status-alert';

  return (
    <div className="asset-card">
      <div className="card-header">
        <span className={`status-badge ${statusClass}`}>{asset.status}</span>
        <h4>ID: {asset.id}</h4>
      </div>
      <h3>{asset.nombre}</h3>
      <p>Categoría: {asset.categoria}</p>
      <button onClick={() => onOpenModal(asset)}>Ver Detalles</button>
    </div>
  );
}

export default AssetCard;