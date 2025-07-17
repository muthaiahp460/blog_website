'use client';
import { useState } from 'react';
import React from 'react';
import data from '../data.json';

const Show = () => {
  const [d, setD] = useState(data);

  function handleDelete(id) {
    setD(d.filter((item) => item.id !== id));
  }

  function handleEdit(id) {
    alert(`Edit clicked for ID: ${id}`);
  }

  return (
    <div style={{ padding: '20px' }}>
      {d.map((dataItem, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: '0', fontSize: '18px' }}>{dataItem.title}</h3>
            <p style={{ margin: '0', color: '#666' }}>{dataItem.sub}</p>
          </div>
          <div>
            <button
              onClick={() => handleEdit(dataItem.id)}
              style={{
                marginRight: '10px',
                padding: '6px 12px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(dataItem.id)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
