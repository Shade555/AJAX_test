//this file was created to learn about creating and testing a fetch request
//API used in this is from national park service

'use strict';

const Myurl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FLg9C5EK6hjcjKVX7sGqdRl49KHbSF7TnRUjvQ0U';
//code can now handle error in the url showing the url is invalid(if any changes are done in the above url)

const Myurl_base = 'https://developer.nps.gov/api/v1/parks?parkCode='
const Myurl_apikey = 'FLg9C5EK6hjcjKVX7sGqdRl49KHbSF7TnRUjvQ0U'

const addressField = document.querySelector('#address');        //this version is vanilla javascript
const $park = $('#park');                                       // this is in jquery
//learning about query selectors and jquery 

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

const checkCompletion = () => {
    if (addressField.value !== '' && $park.value !== ''){
            const requestUrl = Myurl_base + addressField.value + '+' + $park.value + '+' +'&parkcode=acad' + '&api_key+' + Myurl_apikey;
            createRequest(requestUrl);
    }
}
//new: validation when data is entered, now the code can dynamically adjust data in a field so that it changes when input is changed
//the above function checks if the field are not empty then it will create a request

createRequest(Myurl);

addressField.addEventListener('blur', checkCompletion);
$park.addEventListener('blur', checkCompletion);
//new: this two request will help in giving the data that is entered in the field