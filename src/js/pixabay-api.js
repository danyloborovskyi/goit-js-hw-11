import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const API_KEY = "50839747-8e280c8a680bf22042cf2c364"

const form = document.querySelector(".form")
const input = document.querySelector('[name="search-text"]')
const list = document.querySelector(".gallery")

function getImagesByQuery(query) {
    const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}
    axios("https://pixabay.com/api/", {params})
    .then(res => {
        if (res.data.hits.length > 0) {
            console.log(res);
            list.innerHTML = createMarkup(res.data.hits)
        } else {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        })
    .catch(err => console.log(err)
    );
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const query = input.value.trim();
    getImagesByQuery(query)
}

function createMarkup(array) {
    return array.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li>
            <img src="${webformatURL}" width="300" data-largeimg="${largeImageURL}" alt="${tags}">
            <ul>
                <li>
                    <h2>Likes</h2>
                    <p>${likes}</p>
                </li>
                <li>
                    <h2>Views</h2>
                    <p>${views}</p>
                </li>
                <li>
                    <h2>Comments</h2>
                    <p>${comments}</p>
                </li>
                <li>
                    <h2>Downloads</h2>
                    <p>${downloads}</p>
                </li>
            </ul>
        </li>
    `).join("")
}




