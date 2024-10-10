import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '60s',
};

export default function() {
    http.get('https://geekyants.com/');
    sleep(1);
}