// #1) Convert the below promise into async await

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

  async function fetchStarship() {
    const response = 
      await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = 
      await response.json();
    console.log(data);
  }

  // #2) ADVANCED: Update the function below to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

 /* const getData = async function () {
  const [users, posts, albums] = 
    await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
}; */

// modified answer
const getData = async function () {
  const [users, posts, albums] =
    await Promise.all(
      urls.map(async function(url) { //arrow function?
        const response = await fetch(url);
        return response.json(); 
      }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};