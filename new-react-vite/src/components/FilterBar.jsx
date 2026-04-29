function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-bar" style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Buscar equipo por nombre..." 
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default FilterBar;