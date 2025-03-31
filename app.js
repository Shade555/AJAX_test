//this file was created to learn about creating and testing a fetch request
//API used in this is from national park service

'use strict';

const Myurl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FLg9C5EK6hjcjKVX7sGqdRl49KHbSF7TnRUjvQ0U';
//code can now handle error in the url showing the url is invalid(if any changes are done in the above url)

const addressField = document.querySelector('#address');        //this version is vanilla javascript
const $park = $('#park');                                       // this is in jquery
//new: learning about query selectors and jquery 

const handleErrors = (response) => {
    if (response.ok) return response.json();
    return response.json()
        .then(response => {
            throw new Error(response.error.message || response.error)
        })
};

const handleSuccess = (data) => {
    console.log(data)
};

const createRequest = (url) => {
    fetch(url)
        .then((response) => handleErrors(response))      //can write console.log(response)
        .then((data) => handleSuccess(data))
        .catch((error) => console.error(error));
};

createRequest(Myurl);
