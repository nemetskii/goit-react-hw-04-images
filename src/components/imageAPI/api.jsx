import axios from 'axios';

const API_KEY = '36849792-84f13c987ffd01a72468c0057';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const getImagesByQuery = async (query, page = 1) => {
  try {
    let imageData = await axios(
      `?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log(imageData.data);
    return imageData.data;
  } catch (error) {
    console.warn(error.message);
  }
};
