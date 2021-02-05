const axios = require("axios");
const fs = require("fs-extra");
const path = require('path')

const AUTH_TOKEN =
  "BQAnptfqB_nQFWz-s5AqaR4bglUScoxp5Bk6w5JCCD0iAVfpzu1DkGuZn0gVDLnPw2dHgNYRvE-ivfJQ0df67j8xdz1A1uvH6q4xazFNFAM6crB4acqVC8jSItp5Pn2ApRDiC9yJwyz-B1VAW5awhwDGE3ySMPA-137Yh0IevLBTEu-9a-1kPhTJSi1L1aA2ddZiqYOjRttLEE_1aRCHebYzflnC5Kh5vgtr";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
});

function getAllPlaylists(username) {
  return instance({
    url: `/users/${username}/playlists`,
    params: {
      limit: 50
    }
  }).then(function (response) {
    return response.data;
  });
}
function getPlaylistTracks(playlistId) {
  return instance({
    method: "get",
    url: `/playlists/${playlistId}/tracks`
  }).then(function (response) {
    return response.data;
  });
}

async function savePlaylistData({username, id, data}){
  console.log('Saving data', id)
  return fs.writeJSONSync(path.resolve(__dirname, `../src/data/${username}/${id}.json`), data);
}

(async function run(){
  let username = 'shawnsakamoto'
  let playlists = await getAllPlaylists(username);
  
  fs.writeJSONSync(path.resolve(__dirname, `../src/data/${username}/playlists.json`), playlists);
  
  let ids = playlists.items.map(item => item.id);
  console.log('ids', ids);

  ids.forEach(async(id) => {
    
    console.log('fetching', id)
    let data = await getPlaylistTracks(id);
    console.log('save', data);
    await savePlaylistData({username, id, data})
  })


  //let r = Promise.all(promises)
 
  
})()