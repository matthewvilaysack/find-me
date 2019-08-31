import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { getCurrentStateAndCity } from './requests'

const queryBar = [...document.querySelectorAll('[data-query]')]
const countryTextEl = document.querySelector('[data-country]')
const stateTextEl = document.querySelector('[data-state]')
const cityTextEl = document.querySelector('[data-city]')
const findMeButton = document.querySelector('#find-me-btn')

findMeButton.addEventListener('click', () => {
    getCurrentStateAndCity().then(({ region: state, city, country }) => {
        updateDisplay(state, city, country)
    }).catch((e) => console.log(e, 'error'))
})
queryBar.forEach(query => query.addEventListener('click', search))
function search(e) {
    let query
        = e.target.classList.contains('city') ? cityTextEl.innerText :
            e.target.classList.contains('state') ? stateTextEl.innerText : countryTextEl.innerText
    const url = 'http://www.google.com/search?q=' + query;
    window.open(url, '_blank');
}


function updateDisplay(state, city, country) {
    stateTextEl.innerText = state
    cityTextEl.innerText = city
    countryTextEl.innerText = country
}


