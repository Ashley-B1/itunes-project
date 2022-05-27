const searchInput = document.querySelector('[album-search');

searchInput.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    const value = e.target.value;
    if (!value) window.alert('Please fill field')

    try {
      fetch(`https://itunes.apple.com/search?term=${value}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(res => res.json())
        .then(data => addData(value, data.results));
    } catch(e) {
      window.alert(e.message)
    }
  }
});


const addData = (value, data) => {
  let resultCount = data.length;
  let resultTitle = document.querySelector('#intro');

  resultTitle.innerText = `${resultCount} results for ${value}`

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
