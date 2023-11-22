// #1) Create a promise that resolves in 4 seconds and returns "success" string
const return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});

// #2) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = promise.resolve (
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #3) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooopps something went wrong'))

// #4) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => 
  fetch(url)
  .then(people => people.json())
  ))

  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('Looks like we have a problem'))
