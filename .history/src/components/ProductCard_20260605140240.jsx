import React from 'react';

function ProductCard({ product, onDetailClick, onAddToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.price}>${product.price.toFixed(2)}</p>
        <p style={styles.rating}>⭐ {product.rating?.rate} ({product.rating?.count} ulasan)</p>
        <div style={styles.buttonGroup}>
          <button style={styles.detailBtn} onClick={() => onDetailClick(product)}>
            Lihat Detail
          </button>
          <button style={styles.cartBtn} onClick={() => onAddToCart(product)}>
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    marginBottom: '15px'
  },
  content: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
  title: { fontSize: '16px', margin: '0 0 10px 0', color: '#333', height: '45px', overflow: 'hidden' },
  price: { fontSize: '18px', fontWeight: 'bold', color: '#28a745', margin: '0 0 5px 0' },
  rating: { fontSize: '12px', color: '#666', marginBottom: '15px' },
  buttonGroup: { display: 'flex', gap: '8px' },
  detailBtn: { flex: 1, padding: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  cartBtn: { flex: 1, padding: '8px', backgroundColor: '#e2e6ea', color: '#333', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default ProductCard;