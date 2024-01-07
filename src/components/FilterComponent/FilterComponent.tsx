import React, { useState } from 'react';
import './FilterComponent.css';

interface FilterComponentProps {
  onFilterChange: (filter: string, sortOrder: 'recente' | 'antigo') => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'recente' | 'antigo'>('recente');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value, sortOrder);
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'recente' | 'antigo');
    onFilterChange(filter, event.target.value as 'recente' | 'antigo');
  };

  return (
    <div id="filterComponentDiv">
      <label htmlFor="filterInput">Pesquisar por palavra:</label>
      <input
        type="text"
        id="filterInput"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Pesquisar Card"
      />
      <label htmlFor="sortOrder">Filtrar por:</label>
      <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="recente">Mais recente</option>
        <option value="antigo">Mais antigo</option>
      </select>
    </div>
  );
};

export default FilterComponent;
