import http from 'k6/http';
import {sleep, check} from 'k6';

export default function() {
    let formdata = {
        username: 'one',
        password: 'one',
        signon: 'Login',
    };

    //Define the headers
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    //Send the POST request
    let res = http.post('https://petstore.octoperf.com/actions/Account.action', formData, { headers: headers });

    console.log(res.body);

    check(res, {
        'Logged in successfully': (r) => r.body.includes('Welcome one!'),
    });

    sleep(3);
}