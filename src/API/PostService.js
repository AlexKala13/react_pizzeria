import axios from 'axios';

export default class PostService {
    static async getAllData(apiUrl){
        const response = await axios.get(apiUrl);
        return response;
    }

    static async getProductById(apiUrl, productId){
        try {
            const response = await axios.get(`${apiUrl}/${productId}`);

            if (response.status === 200 || response.status === 204) {
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    }
};