import React from 'react';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div style={styles.container}>
      <button
        style={selectedCategory === '' ? styles.activeButton : styles.button}
        onClick={() => setSelectedCategory('')}
      >
        Semua Produk
      </button>
      {categories.map((category) => (
        <button
          key={category}
          style={selectedCategory === category ? styles.activeButton : styles.button}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '25px'
  },
  button: {
    padding: '10px 18px',
    backgroundColor: '#f1f3f5',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    textTransform: 'capitalize'
  },
  activeButton: {
    padding: '10px 18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    textTransform: 'capitalize'
  }
};

export default CategoryFilter;