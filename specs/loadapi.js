import http from 'k6/http';
import { check } from 'k6';

export default function() {

    const url = 'https://test-api.k6.io/auth/basic/login/';
    const payload = JSON.stringify({
        username: 'test_case',
        password: '1234',
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'response code was 200': (res) => res.status == 200,
    });

    console.log(res.body);
}