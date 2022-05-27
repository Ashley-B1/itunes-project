fetch("https://itunes.apple.com/search?term=$%7BMadonna%7D&media=music&entity=album&attribute=artistTerm&limit=200%22")
  .then(res => res.json())
  .then(data => addData(data.results));

const addData = data => {
  console.log(data);
  let resultCount = data.length;
  let resultTitle = document.querySelector('#intro');

  resultTitle.innerText = `${resultCount} results for 'artist'`

  data.forEach(album => {
    let resultContainer = document.querySelector('#result-container');
    let albumCard = document.createElement('div');
    let albumPic = document.createElement('img');
    let albumTitle = document.createElement('h3');

    albumCard.setAttribute('class', 'album-card');
    albumPic.setAttribute('class', 'album-pic');
    albumPic.setAttribute('src', `${album.artworkUrl100}`)
    albumTitle.setAttribute('class', 'album-title');

    resultContainer.append(albumCard);
    albumCard.append(albumPic);
    albumCard.append(albumTitle);

    albumTitle.innerText += `${album.collectionName}`
  });
};
