import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="🔍 Cari produk berdasarkan judul..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
}

const styles = {
  searchContainer: { marginBottom: '20px' },
  searchInput: {
    width: '100%',
    padding: '12px 20px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '25px',
    outline: 'none',
    boxSizing: 'border-box'
  }
};

export default SearchBar;