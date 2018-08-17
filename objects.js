var playlist = new Object({ Beatles: 'Twist and Shout' })

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

playlist["artist"] = "Hello";

is the same exact thing as...

playlist.artist = "Hello";


