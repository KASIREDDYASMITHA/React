function UserInfo({ name, age }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      margin: "10px",
      backgroundColor: "#f9f9f9",
      width: "250px"
    }}>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;
