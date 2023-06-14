import axios from 'axios';
import { baseUrlCalendar, baseUrlUser } from '../../config';

export default class CalendarHttpClient {

    async getEventsFromRapla(rapla) {
        return axios.post(
            baseUrlCalendar+'/rapla',
            rapla,
            {
                headers: {
                    'Content-Type': 'text/plain'
                }  
            }
            ).then((response) => response.data);
    }

    async getCalendarSettings(isAuthenticated, getAccessTokenSilently){
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