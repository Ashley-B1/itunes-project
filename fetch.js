const searchInput = document.querySelector('[album-search');
const resultsContainer = document.querySelector('#result-container');
const loader = document.querySelector('#loader');
const searchBtn = document.getElementById('search-icon');

// const clearOut = () => {
//   myResults.style.display = 'none'
// };

searchInput.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    let input = e.target.value;

    if (input === '') {
      alert('Please fill out this field')
    } else {
      loadSpinner(input)
    }
  }
});

searchBtn?.addEventListener('click', e => {
  e.preventDefault();

  const input = searchInput.value;

  if (input === '') {
    alert('Please fill out this field')
  } else {
    loadSpinner(input)
  }
});

const loadSpinner = input => {
  loader.classList.add('showLoader');
  setTimeout(() => {
    loader.classList.remove('showLoader');
    fetchData(input)
  }, 2000);
};

const fetchData = artist => {
  resultsContainer.textContent = '';
  fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`)
  .then(res => res.json())
  .then(data => addData(artist, data.results))
  .catch(e => {console.log(e.message)});
};


const addData = (value, data) => {
  let resultCount = data.length;
  let resultTitle = document.querySelector('#intro');
  resultsContainer.style.display = 'none'

  resultTitle.innerText = `${resultCount} results for "${value}"`

  data.forEach(album => {
    // console.log(album);
    resultsContainer.style.display = 'flex';
    let albumCard = document.createElement('div');
    let picSection = document.createElement('div')
    let albumPic = document.createElement('img');
    let albumTitle = document.createElement('h3');

    albumCard.setAttribute('class', 'album-card');
    picSection.setAttribute('class', 'pic-sect');
    albumPic.setAttribute('class', 'album-pic');
    albumPic.setAttribute('src', `${album.artworkUrl100}`)
    albumTitle.setAttribute('class', 'album-title');

    resultsContainer.append(albumCard);
    albumCard.append(picSection);
    picSection.appendChild(albumPic);
    albumCard.append(albumTitle);

    albumTitle.innerText = `${album.collectionName} by ${album.artistName}.`
  });
};
