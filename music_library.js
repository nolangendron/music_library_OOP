const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

const PlayList = function(name) {
  this.name = name;
  this.tracks = [];
};

const Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

Library.prototype.addPlayList = function(playlist) {
  this.playlists.push(playlist);
};

PlayList.prototype.addTrack = function addTrack(track) {
  this.tracks.push(track);
};

PlayList.prototype.overallRating = function overallRating() {
  let overallRating = 0;
  for (const track of this.tracks) {
    overallRating += track.rating;
  }
  return overallRating / this.tracks.length;
};

PlayList.prototype.totalDuration = function totalDuration() {
  let playlistDuration = 0;
  for (const track of this.tracks) {
    playlistDuration += track.length;
  }
  return playlistDuration;
};

const library_01 = new Library("PunkMusic", "Joe Strummer");

const track_01 = new Track("Dammit", 3, 240);
const track_02 = new Track("Why", 1, 200);
const track_03 = new Track("Angry", 2, 150);
const track_04 = new Track("Cry", 3, 340);
const track_05 = new Track("Fight", 4, 250);
const track_06 = new Track("Mad", 5, 240);
const track_07 = new Track("Angst", 1, 185);
const track_08 = new Track("Blah", 2, 300);
const track_09 = new Track("PunkisDead", 2, 260);
const track_10 = new Track("IRule", 5, 235);
const track_11 = new Track("Jump", 5, 220);

const playlist_01 = new PlayList("90s_Punk");
playlist_01.addTrack(track_01);
playlist_01.addTrack(track_03);
playlist_01.addTrack(track_05);
playlist_01.addTrack(track_07);

const playlist_02 = new PlayList("80s_Punk");
playlist_02.addTrack(track_02);
playlist_02.addTrack(track_04);
playlist_02.addTrack(track_06);
playlist_02.addTrack(track_08);
playlist_02.addTrack(track_09);
playlist_02.addTrack(track_10);

library_01.addPlayList(playlist_01.name);
library_01.addPlayList(playlist_02.name);

console.log("Total Duration Playlist_01: ", playlist_01.totalDuration());
console.log("Overall Rating Playlist_01: ", playlist_01.overallRating());

console.log("Total Duration Playlist_02: ", playlist_02.totalDuration());
console.log("Overall Rating Playlist_02: ", playlist_02.overallRating());
