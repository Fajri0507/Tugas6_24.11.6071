import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';

function App() {
  // State Utama
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State Filter & Interaksi
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // 'none', 'lowToHigh', 'highToLow'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State Fitur Tambahan (Simulasi Keranjang Belanja)
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  // Fetch Kategori saat pertama kali load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (err) {
        console.error("Gagal mengambil kategori:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Produk berdasarkan kategori yang dipilih
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        let url = 'https://fakestoreapi.com/products';
        if (selectedCategory) {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan saat mengambil data produk.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  // Fungsi Fitur Tambahan: Add To Cart & Toast Notification
  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    setToastMessage(`🛒 ${product.title.substring(0, 20)}... ditambah ke keranjang!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Proses Filtering & Sorting data produk
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Tampilan Loading State
  if (loading) {
    return (
      <div style={styles.centerContainer}>
        <div style={styles.spinner}></div>
        <p>Sedang memuat katalog produk terbaik untuk Anda...</p>
      </div>
    );
  }

  // Tampilan Error Handling State
  if (error) {
    return (
      <div style={styles.centerContainer}>
        <h2>⚠️ Error Terjadi</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} style={styles.retryBtn}>Coba Lagi</button>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      {/* Toast Notification */}
      {toastMessage && <div style={styles.toast}>{toastMessage}</div>}

      {/* Header & Informasi Keranjang */}
      <header style={styles.header}>
        <h1>🛍️ Ruang Katalog Online</h1>
        <div style={styles.cartWidget}>Keranjang: <strong>{cartCount} item</strong></div>
      </header>

      {/* Kontrol Utama */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div style={styles.toolbar}>
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        {/* Fitur Tambahan: Dropdown Sorting */}
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)} 
          style={styles.selectSort}
        >
          <option value="none">Urutkan Harga</option>
          <option value="lowToHigh">Harga: Murah ke Mahal</option>
          <option value="highToLow">Harga: Mahal ke Murah</option>
        </select>
      </div>

      {/* Responsive Grid System */}
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Produk tidak ditemukan.</p>
      ) : (
        <div style={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onDetailClick={setSelectedProduct} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}

      {/* Detail Modal Pop-up */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

// Menggunakan CSS-in-JS & Media Query via Classname/Style Native injection untuk Responsive Grid
const styles = {
  appContainer: { maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', marginBottom: '20px' },
  cartWidget: { padding: '10px 15px', backgroundColor: '#e2f0d9', borderRadius: '8px', color: '#385723' },
  toolbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' },
  selectSort: { padding: '10px', borderRadius: '5px', borderColor: '#ddd', fontSize: '14px', cursor: 'pointer' },
  centerContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif' },
  spinner: { width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #007bff', borderRadius: '50%', animation: 'spin 1s linear infinite' },
  retryBtn: { padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' },
  toast: { position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '8px', zIndex: 1100, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' },
  // Responsive grid style base (Desktop default)
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  }
};

// Menyisipkan keyframe animasi CSS ke dokumen secara dinamis [cite: 879, 885]
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  /* Responsive breakpoint tambahan */
  @media (max-width: 900px) {
    div[style*="productGrid"] { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 600px) {
    div[style*="productGrid"] { grid-template-columns: 1fr !important; }
  }
`;
document.head.appendChild(styleSheet);

export default App;