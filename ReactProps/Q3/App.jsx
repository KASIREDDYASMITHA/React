import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MessageCard title="Welcome" message="This is your first message card!" />
      <MessageCard title="Reminder" message="Don’t forget to push your code to GitHub." />
      <MessageCard title="Success" message="You’ve built a reusable component 🎉" />
      <MessageCard title="Next Steps" message="Try adding styles or more props for customization." />
    </div>
  );
}

export default App;
