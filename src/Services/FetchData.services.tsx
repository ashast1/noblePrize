import axios from 'axios';

const FetchData = (url: string) => {
    return axios({
        method: 'GET',
        url: url
    });
}

export default FetchData;