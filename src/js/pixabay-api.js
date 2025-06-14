import axios from 'axios';

const API_KEY = "50839747-8e280c8a680bf22042cf2c364"

const form = document.querySelector(".form")
const input = document.querySelector('[name="search-text"]')

function getImagesByQuery() {
    const params = {
    key: API_KEY,
    q: input.value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
}
    axios("https://pixabay.com/api/", {params})
    .then(res => {
        if (res.data.hits.length > 0) {
            console.log(res)
        // } else {
        //     iziToast.error({
        //         message: 'Sorry, there are no images matching your search query. Please try again!',
        //     });
        }
        })
    .catch(err => console.log(err)
    );
}

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    getImagesByQuery()
}




