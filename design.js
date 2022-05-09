const editElement = document.getElementById("edit");
const usernameElement = document.getElementById("name");
const followersElement = document.getElementById("followers");
const followingElement = document.getElementById("following");
const fullnameElement = document.getElementById("fullname");
const bioElement = document.getElementById("bio");
const locationElement = document.getElementById("location");
const emailElement = document.getElementById("email");
const twitterElement = document.getElementById("twitter");



editElement.addEventListener("click", () => {

//Api call to fetch user details
try {
    fetch("https://api.github.com/users/FisayoH")
      .then((response) => response.json())
      .then((data) => {
        usernameElement.innerHTML = `${data.login}`;
        followersElement.innerHTML = `${data.followers}`;
        followingElement.innerHTML = `${data.following}`;
        fullnameElement.innerHTML = `${data.name}`;
        bioElement.innerHTML = `${data.bio}`;
        locationElement.innerHTML = `${data.location}`;
        emailElement.innerHTML = `${data.email}`;
        twitterElement.innerHTML = `${data.twitter_username}`;


      });
  } catch (err) {
    console.log("error in fetch", err);
  }
});