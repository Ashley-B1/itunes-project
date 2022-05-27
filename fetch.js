const myArr = [];

fetch("https://itunes.apple.com/search?term=$%7BMadonna%7D&media=music&entity=album&attribute=artistTerm&limit=200%22")
  .then(res => res.json())
  .then(data => addData(data.results));

const addData = data => {
  let resultCount = data.length;
  console.log(data);

  data.forEach(album => {
    let myResults = document.querySelector('#my-results');
    let resultTitle = document.createElement('h2');
    let resultContainer = document.createElement('div');
    let albumCard = document.createElement('div');
    let albumPic = document.createElement('img');
    let albumTitle = document.createElement('h3');

    resultTitle.setAttribute('class', 'result-title');
    resultContainer.setAttribute('class', 'result-container');
    albumCard.setAttribute('class', 'album-card');
    albumPic.setAttribute('class', 'album-pic');
    albumPic.setAttribute('src', `${album.artworkUrl100}`)
    albumTitle.setAttribute('class', 'album-title');


  });
};
