console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

//Create an empty array
const myCollection = [];

// Create function named addToCollection
function addToCollection(collection, title, artist, yearPublished) {
  // New object with album info
  const newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  
// New object at end of the collection array
collection.push(newAlbum);
  
// Return the newly created object
return newAlbum;
}

// Test addToCollection function
console.log(addToCollection(myCollection, "Voyage to India", "India Arie", 2002));
console.log(addToCollection(myCollection, "Blond", "Frank Ocean", 2016));
console.log(addToCollection(myCollection, "Channel Orange", "Frank Ocean", 2012));
console.log(addToCollection(myCollection, "The Carter III", "Lil Wayne", 2008));
console.log(addToCollection(myCollection, "CTRL", "SZA", 2017));
console.log(addToCollection(myCollection, "SOS", "SZA", 2022));
console.log(addToCollection(myCollection, "S", "SZA", 2013));
console.log(addToCollection(myCollection, "Z", "SZA", 2014));

console.log(myCollection);

// Create a function called showCollection
function showCollection(collection) {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

// Test showCollection function
showCollection(myCollection);

// Create a function called findByArtist
function findByArtist(collection, artist) {
  const matchingAlbums = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matchingAlbums.push(album);
    }
  }
  return matchingAlbums;
}

// Test findByArtist function
console.log(findByArtist(myCollection, "SZA")); 
// Expecting an array with all albums by SZA
console.log(findByArtist(myCollection, "Michael Jackson")); 
// Expecting an empty array since the great isn't included in my collection




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
