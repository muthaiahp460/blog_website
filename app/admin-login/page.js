'use client';
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();
    router.push('/admin');
  };

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    width: '350px',
    textAlign: 'center',
    animation: 'fadeSlide 0.6s ease-out',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    margin: '100px auto'
  };

  const headingStyle = {
    marginBottom: '30px',
    color: '#333',
    fontSize: '28px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    fontSize: '16px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#667eea',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Admin Login Page</h1>
      <form onSubmit={login}>
        <input style={inputStyle} type="text" placeholder="Username" required /><br />
        <input style={inputStyle} type="password" placeholder="Password" required /><br />
        <button style={buttonStyle} type="submit">Login</button>
      </form>
    </div>
  );
}
