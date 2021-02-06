const axios = require("axios");
const fs = require("fs-extra");
const path = require('path')

const DATA_DIR = path.resolve(__dirname, '../public/data');

const AUTH_TOKEN =
  "BQB-3RMogO_RTDbofoN43lxT9Tg3TYfn7HPE2VX4FVkHa1dZD3IciGPTGVdIzhuikOoEFP0kfOjNSMH0xJ0bi8-ojneI_znqa6I2wPBGSoSHKMITnFp5iqWWuHLiYzSZkHZ2d76FyFAFHSFWMit8QJJ-cRUNQeI3YCYjWKIGm4tpH6Ccng";

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
    url: `/playlists/${playlistId}`
  }).then(function (response) {
    return response.data;
  });
}

async function savePlaylistData({username, id, data}){
  console.log('Saving data', id)
  return fs.writeJSONSync(path.resolve(DATA_DIR, `./${username}/${id}.json`), data);
}

(async function run(){
  let username = 'shawnsakamoto'
  let playlists = await getAllPlaylists(username);
  
  fs.writeJSONSync(path.resolve(DATA_DIR, `./${username}/playlists.json`), playlists);
  
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