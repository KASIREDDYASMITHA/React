function MessageCard({ title, message }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "12px",
      backgroundColor: "#f9f9f9",
      width: "250px"
    }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
