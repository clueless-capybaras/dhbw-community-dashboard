import axios from 'axios';
import { baseUrlCalendar } from '../../config';

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
}