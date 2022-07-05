const jokes = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {

    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res) => res.json())
    .then((data) => {
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        document.write("no internet connection " + error + " please on the your mobile data");
    })
}


jokeBtn.addEventListener('click', generateJokes);
(generateJokes);