
const form = document.querySelector('form');
const submitButton = document.querySelector('button');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const value = form.elements.query.value;
    form.elements.query.value = '';
    submitButton.disabled = true;
    await getTVShowList(value);
    submitButton.disabled = false;
});



const getTVShowList = async (tvTitle) => {
    try {

        const config = { params: { q: tvTitle } };
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

        const images = document.querySelectorAll('img');
        images.forEach(img => img.remove());

        res.data.forEach((data) => {
            const img = document.createElement('img');
            img.src = data.show.image.medium;
            console.log('what', data.show.image.medium);
            document.body.append(img);
        });



    }
    catch (e) {
        console.log('ERROR!!! = ', e);
    }
}