import React from 'react';

import './styles.css';

function ItemList({title, description, urlRepo}) {
  return (
    <div className="item-list">
      <strong>📃 {title}</strong>
      <p>{description}</p>
      <a href={urlRepo} target="_blank" rel="noreferrer" >
        🖱 Acesse aqui para conferir esse projeto!
      </a>
      <hr />
    </div>
  )
}

export default ItemList;

