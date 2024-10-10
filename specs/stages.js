import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    stages: [
      { duration: '30s', target: 20 },
      { duration: '1m30s', target: 10 },
      { duration: '20s', target: 0 },
    ],
  };

  export default function () {
    const res = http.get('https://httpbin.test.k6.io/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
  }


  //The script simulates a realistic load pattern with users ramping up, 
  //holding steady, and then ramping down. Each virtual user makes GET requests to https://httpbin.test.k6.io/, and 
  //the script verifies that the response status is 200. Between each request, the users wait for 1 second to mimic typical user interaction.