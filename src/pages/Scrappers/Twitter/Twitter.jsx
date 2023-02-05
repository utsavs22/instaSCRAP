import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "@json2csv/plainjs";

const Twitter = () => {
  const [username, setUsername] = useState("");
  const [twitterProfile, setTwitterProfile] = useState({});
  const [tweets, setTweets] = useState([]);

const downloadTwitterProfile = () => {
  const parser = new Parser();
  const csv = parser.parse(twitterProfile);
  // const csv = Papa.unparse(dataa);
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "twitterProfile.csv";
  link.click();
};
const downloadTwitterTweets = () => {
  const parser = new Parser();
  const csv = parser.parse(tweets);
  // const csv = Papa.unparse(dataa);
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "twitterTweets.csv";
  link.click();
};

  const handleTwitterProfile = async () => {
    const response = await axios.post("http://localhost:5000/twitter/profile", {
      twitter_username: username,
    });
    const obj = {
      "Created On" : response.data.created,
      "Links" : response.data.descriptionLinks,
      "Display Name": response.data.displayname,
      "Followers Count": response.data.followersCount,
      "Friends Count": response.data.friendsCount,
      "Location" : response.data.location,
      "Banner URL": response.data.profileBannerUrl,
      "Image URL": response.data.profileImageUrl,
      "Description" : response.data.renderedDescription,
      "Verification Status" : response.data.verified,
    };
    setTwitterProfile(obj);
  };

  const handleTwitterTweets = async () => {
    const response = await axios.post("http://localhost:5000/twitter/tweets", {
      twitter_username: username,
    });
    setTweets(response.data);
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
      <button onClick={handleTwitterProfile}>Get Twitter Profile</button>
      <button onClick={handleTwitterTweets}>Get Tweets</button>
      <button onClick={downloadTwitterProfile}>Download Twitter Profile</button>
      <button onClick={downloadTwitterTweets}>Download Twitter Tweets</button>
      <hr />
      <h1>Twitter Profile Information:</h1>
      <pre>{JSON.stringify(twitterProfile, null, 2)}</pre>
      <hr />
      <h1>Twitter Tweets:</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            <p>Date: {tweet[0]}</p>
            <p>Username: {tweet[1]}</p>
            <p>Content: {tweet[2]}</p>
            <p>Links: {JSON.stringify(tweet[3])}</p>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Twitter;