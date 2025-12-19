function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px auto",
        width: "300px",
        textAlign: "left",
      }}
    >
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}

export default TodoCard;
