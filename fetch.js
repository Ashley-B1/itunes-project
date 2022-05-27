const searchInput = document.querySelector('[album-search');

searchInput.addEventListener('input', e => {
  const value = e.target.value;
  if (!value) window.alert('Must type something')
  try {
    fetch(`https://itunes.apple.com/search?term=$%7B${value}%7D&media=music&entity=album&attribute=artistTerm&limit=200%22`)
      .then(res => res.json())
      .then(data => addData(value ,data.results));
  } catch(e) {
    window.alert('Must have vaild search')
  }
});


const addData = (value, data) => {
  console.log(data);
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
