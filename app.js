//this file was created to learn about creating and testing a fetch request
//API used in this is from national park service

'use strict';

const Myurl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FLg9C5EK6hjcjKVX7sGqdRl49KHbSF7TnRUjvQ0U';

const createRequest = (url) => {
    fetch(url)
        .then((response) => response.json())      //can write console.log(response)
        .then((data) => console.log(data))
};

createRequest(Myurl);
