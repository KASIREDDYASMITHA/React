import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Kasireddy Asmitha",
    age: 21
  };

  return (
    <div>
      <h1>User Profile</h1>
      {/* Passing props to child */}
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;
