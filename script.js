const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1080',
    width: '1920',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      controls: 0,
      related: 0,
      rel: 0
    },
  });
}

document.getElementById("searchButton").addEventListener("click", function() {
  const searchInput = document.getElementById("searchInput");
  const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchInput.value + "&type=video&key=AIzaSyB8ZuRXIcrH-r8MlY3gKi6R8xk8_Wz0Miw";
  searchInput.value = '';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const videoId = data.items[0].id.videoId;
      player.loadVideoById(videoId);
    });
});

