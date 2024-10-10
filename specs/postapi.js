import http from 'k6/http';
import {sleep, check} from 'k6';


// export const options = {
//     vus: '10',
//     duration: '5s'
// }

export default function() {
    const url = ('https://dummyjson.com/auth/login');
    const payload = JSON.stringify({
        id: '0',
        petId: '0',
        quantity: '0',
        shipDate: '2024-08-28T06:32:40.698Z',
        status: 'placed',
        complete: 'true'
       //username:'kminchelle',
      // password: '0lelplR',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const res = http.post(url, payload, params);
    check(res, {
        'is statues 200': (r) => r.status === 200,
       // 'is res body': (r) => r.body.includes('kminchelle'),
    });
}