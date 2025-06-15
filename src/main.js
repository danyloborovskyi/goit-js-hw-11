import iziToast from "izitoast";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, refreshLightbox, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form")
const input = document.querySelector('[name="search-text"]')
const list = document.querySelector(".gallery")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const query = input.value.trim();

    if (!query) {
        return;
    }

    clearGallery(list);

    showLoader()
    
    getImagesByQuery(query).then(data => {
        if (data.hits.length > 0) {
            console.log(data);
            list.innerHTML = createGallery(data.hits)
            refreshLightbox();
        } else {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
    })
    .catch(error => console.log(error))
    .finally(() => {
        hideLoader();
        input.value = "";
    })
}

refreshLightbox();
