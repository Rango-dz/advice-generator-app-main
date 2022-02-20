const headerText = document.querySelector('.textheader');
const theQuote = document.querySelector('.advicequote');
const randomize = document.querySelector('.randomize');

const renderQuote = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(new Error('Something went Wrong!!!'));
      }

    })

    request.open('GET', url);
    request.send();
  })

const renderRandome = (e) => {
  renderQuote('https://api.adviceslip.com/advice').then((data) => {
  theQuote.textContent = `${data.slip.advice}`;
  headerText.textContent = `Advice "${data.slip.id}"`
}).catch((err) => {
  console.log(err);
})
}

randomize.addEventListener('click', renderRandome);


window.addEventListener('load', () => {
  renderQuote('https://api.adviceslip.com/advice').then((data) => {
  theQuote.textContent = `${data.slip.advice}`;
  headerText.textContent = `Advice "${data.slip.id}"`
}).catch((err) => {
  console.log(err);
})
})