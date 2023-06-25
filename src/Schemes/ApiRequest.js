import axios, {AbortSignal} from 'axios';

const ApiRequest = async (method = 'POST', url = 'https://jsonplaceholder.typicode.com/posts', data = {}) => {
    try {
        const response = await axios({
            method: 'get',
            url: url,
            data: data,
            signal: AbortSignal.timeout(10000) 
        });
        //return response.data;
        console.log(response.data)
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default ApiRequest;