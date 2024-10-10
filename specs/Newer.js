import encoding from 'k6/encoding';
import http from 'k6/http';
import { check } from 'k6';

//Define the username and password

const username = 'user';
const password = 'passwd';

//Exported function

export default function() {
    const credentials = `${username}:${password}`;
    const url = `https://${credentials}@httpbin.test.k6.io/basic-auth/${username}/${password}`;

    let res = http.get(url);

    //Verify the response
    check(res, {
        'Status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.json().authenticated === true,
        'is correct user': (r) => r.json().user === username,
    });

    //creating custom headers for authentication

    const encodedCredentials = encoding.b64encode(credentials);
    const options = {
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
        },
    };

    //second request
    res = http.get(`https://httpbin.test.k6.io/basic-auth/${username}/${password}`, options);

    //verification for the second request
    check(res, {
        'Status is 200': (r) => r.status === 200,
        'is authenticated': (r) => r.json().authenticated === true,
        'is correct user': (r) => r.json().user === username,
    });


}