/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get(`https://api.github.com/users/Obaida-Albaroudi`)
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function me(myInfo){
  
  //Creation of elements for the html
  const card = document.createElement('div');
  const pic = document.createElement('img');
  const card_info= document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //Addition of the different classes that belong to the elements 
  card.classList.add(`card`);
  card_infoclassList.add(`card-info`);
  name.classList.add(`name`);
  username.classList.add(`username`);

  //The content that will be shown. We are pulling this from the data (myInfo) found in the api we are using
  pic.src = myInfo.avatar_url;
  name.textContent = myInfo.name;
  username.textContent = myInfo.login;
  location.textContent = myInfo.location;
  profile.textContent = myInfo.url;
  followers.textContent = myInfo.followers;
  following.textContent = myInfo.following;
  bio.textContent = myInfo.bio;

  //Consolidating and making sure we append accordingly so that the structure works
  card.appendChild(pic);
  card.appendChild(card_info);
  card_info.appendChild(name);
  card_info.appendChild(username);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  card_info.appendChild(followers);
  card_info.appendChild(following);
  card_info.appendChild(bio);
  return card

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
