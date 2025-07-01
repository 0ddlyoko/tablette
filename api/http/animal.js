const axios = require('axios');

async function get_random_cats(limit) {
    const result = await axios.get(`https://api.thecatapi.com/v1/images/search?size=med&limit=${limit}`);
    const {status, data} = result;

    if (status === 200) {
        return data.map((item) => {
            return {
                id: item.id,
                url: item.url,
                width: item.width,
                height: item.height,
            }
        });
    }
}

async function get_random_dogs(limit) {
    const result = await axios.get(`https://api.thedogapi.com/v1/images/search?size=med&limit=${limit}`);
    const {status, data} = result;

    if (status === 200) {
        return data.map((item) => {
            return {
                id: item.id,
                url: item.url,
                width: item.width,
                height: item.height,
            }
        });
    }
}

module.exports = {
    get_random_cats,
    get_random_dogs,
};
