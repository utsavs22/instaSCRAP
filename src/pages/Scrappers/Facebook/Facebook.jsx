import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "@json2csv/plainjs";
const Facebook = () => {
  const [username, setUsername] = useState("");
  const [facebookProfile, setFacebookProfile] = useState({});
  

  const handleFacebookProfile = async () => {
    const response = await axios.post(
      "http://localhost:5000/facebook/profile",
      {
        username: username,
      }
    );
    setFacebookProfile(response.data);
  };
const downloadFacebookData = () => {
  const parser = new Parser();
  const csv = parser.parse(facebookProfile);
  // const csv = Papa.unparse(dataa);
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "FacebookProfile.csv";
  link.click();
};

  return (
    <div>
      <h1>Enter username:</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <hr />
      <h1>Facebook Profile Information:</h1>
      <pre>{JSON.stringify(facebookProfile, null, 2)}</pre>
      
      <button onClick={handleFacebookProfile}>Get Facebook Profile</button>
     
      <button onClick={downloadFacebookData}>Download Facebook Profile</button>
   
      <hr />
    </div>
  );
};

export default Facebook;