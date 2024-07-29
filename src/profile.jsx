import React from "react";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{bio}</h2>
    </div>
  );
}

export default Profile;
