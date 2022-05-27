fetch("https://itunes.apple.com/search?term=$%7BMadonna%7D&media=music&entity=album&attribute=artistTerm&limit=200%22")
  .then(res => res.json())
  .then(data => console.log(data));
