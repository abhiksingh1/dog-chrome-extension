fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
    .then(dogData => {
        const url = dogData.message;
        const imageElement = document.getElementById('image');
        imageElement.src = url;
    })