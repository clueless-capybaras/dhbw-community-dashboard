import axios from 'axios';
import { baseUrlCanteen } from '../../config';

export default class CanteenHttpClient {

    async getWeeklyMenuOfCanteen(canteenKey) {
        return axios.get(
            baseUrlCanteen+'/weekly/'+canteenKey
        ).then((response) => response.data);
    }
}