import React from 'react';

function ProductFilter({ setActiveFilter }) {
    return (
      <div className="buttons">
        <button className="button-value" onClick={() => setActiveFilter('all')} filter="all">All</button>
        <button className="button-value" onClick={() => setActiveFilter('nea')} filter="nea">Neapolitan</button>
        <button className="button-value" onClick={() => setActiveFilter('rom')} filter="rom">Roman</button>
        <button className="button-value" onClick={() => setActiveFilter('glu')} filter="glu">Gluten Free</button>
        <button className="button-value" onClick={() => setActiveFilter('veg')} filter="veg">Vegan</button>
      </div>
    );
  }
  
export default ProductFilter;