import axios from 'axios';
import { baseUrlCanteen, baseUrlUser } from '../../config';

export default class CanteenHttpClient {

    async getWeeklyMenuOfCanteen(canteenKey) {
        return axios.get(
            baseUrlCanteen+'/weekly/'+canteenKey
        ).then((response) => response.data);
    }

    async getCanteenSettings(isAuthenticated, getAccessTokenSilently){
        //console.log("getCanteenSettings");
        if (!isAuthenticated) {
            return;
        }
        let token = await getAccessTokenSilently();
        //console.log(token);
        const response = await fetch(baseUrlUser+'/user/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        //console.log(response);
        let data = await response.json();
        //console.log(data);
        return data;
    }
}