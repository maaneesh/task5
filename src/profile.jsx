import React from "react";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fca%2F7a%2F46%2Fca7a46a2b5d781cf36537e067878b065.jpg&f=1&nofb=1&ipt=3566441b646ea7b8a96ea63989da219d0b9def1b72b2d8c18f253542d95aad4b&ipo=images"
        alt="profile"
      />
      <p>{name}</p>
      <p>{age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;
