import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd'
    }}>
      <h1 style={{ margin: 0 }}>Developers System</h1>
      <Link to="/login">
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0366d6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </Link>
    </div>
  );
}