AUTH_TOKEN="BQBD6ArPD8IejdpxbVk4eWUP1bOYhYc8n503ZhrhTQiF7pyramdoqSfH_Nfz4PjP2KiAAplE2tlRn-prc_oIUfZSfxnn0uLaGN35n_ka-UQ9IB5mX8xpo7HPtgqao37FOQypPxjraSaTXfbTkyaiE0LgFnCTpREsya0XHOPta_Bhpt4I57SqG5mlfErsbkvp2qufP9RCZoiGd4Brji3kDoYyF_mPEDXc6-go"
PLAYLIST_ID=5TD8oNZu6tZzBkzc38HmNY

curl -X "GET" 'https://api.spotify.com/v1/playlists/${PLAYLIST_ID}' -H "Accept: application/json" -H "Content-Type: application/json" -H `Authorization: Bearer ${AUTH_TOKEN}`