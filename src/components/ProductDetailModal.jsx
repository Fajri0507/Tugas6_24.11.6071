import React from 'react';

function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2>Detail Produk</h2>
          <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <div style={styles.body}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <div style={styles.info}>
            <h3>{product.title}</h3>
            <p style={styles.category}>Kategori: <strong>{product.category}</strong></p>
            <p style={styles.price}>Harga: ${product.price}</p>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.rating}>Penilaian: ⭐ {product.rating?.rate} / 5.0 ({product.rating?.count} stok/ulasan)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modal: { backgroundColor: '#fff', borderRadius: '12px', width: '90%', maxWidth: '700px', maxHeight: '85vh', overflowY: 'auto', padding: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' },
  closeBtn: { background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer' },
  body: { display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' },
  image: { width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto' },
  info: { flex: 1, minWidth: '280px' },
  category: { color: '#777', textTransform: 'capitalize' },
  price: { fontSize: '22px', fontWeight: 'bold', color: '#28a745' },
  description: { lineHeight: '1.6', color: '#555' }
};

export default ProductDetailModal;