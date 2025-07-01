const express = require('express');
const fs = require('fs');
const animal = require('./http/animal')


const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('index');
});

app.get('/api/cat', async function (req, res) {
    const result = await animal.get_random_cats(1);
    res.send(result);
});

app.get('/api/dog', async function (req, res) {
    const result = await animal.get_random_dogs(1);
    res.send(result);
});

app.get('/api/random_image', async function (req, res) {
    const url = `${req.protocol}://${req.get('host')}/images/random/`;
    const images = fs.readdirSync("./public/images/random/");
    const images_path = images.map(item => {
        return {
            "id": item,
            "url": url + item,
        }
    });
    const random_image_path = images_path[Math.floor(Math.random() * images_path.length)];
    res.send(random_image_path);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
