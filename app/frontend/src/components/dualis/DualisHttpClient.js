import axios from 'axios';
import { baseUrlDualis } from '../../config';

export default class DualisHttpClient {
    async getGrades(username, password) {
        let credentials = btoa(username+':'+password);
        return axios.get(
            baseUrlDualis+'/grades',
            {headers : {Authorization : `Basic ${credentials}`}}
        ).then((response) => response.data);
    }
}