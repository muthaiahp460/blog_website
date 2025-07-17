import data from "../../data.json";

const Disp = ({ params }) => {
  const product = data.find((item) => item.id == params.id);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  const styles = {
    card: {
      margin: "10px auto",
      maxWidth: "800px",
      margin: "80px auto",
      padding: "24px",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: "transform 0.3s ease",
    },
    image: {
      width: "100%",
      height: "480px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "20px",
    },
    title: {
      fontSize: "26px",
      color: "#333",
      marginBottom: "12px",
    },
    desc: {
      fontSize: "16px",
      color: "#666",
      lineHeight: "1.6",
    },
    container: {
      background: "linear-gradient(to right, #fdfbfb, #ebedee)",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={`/${product.image}`} alt={product.title} style={styles.image} />
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.desc}>{product.description}</p>
      </div>
    </div>
  );
};

export default Disp;
