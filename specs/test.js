import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
  };
  export default function () {
    http.get('http://test.k6.io');
    sleep(1);
  }


  //The script creates a simple load test where 10 virtual users send GET
  //requests to http://test.k6.io for 30 seconds. Each user makes one request per second,
  //simulating a real-world scenario where users do not constantly send requests without pauses




  export function setup() {
    return { v: 1 };
  }
  
  export default function (data) {
    console.log(JSON.stringify(data));
  }
  
  export function teardown(data) {
    if (data.v != 1) {
      throw new Error('incorrect data: ' + JSON.stringify(data));
    }
  }

  //Setup Phase (setup()):
//The setup() function initializes the test with data { v: 1 }, which is then passed to all virtual users and the teardown phase.

//Test Execution Phase (default function):
//Each virtual user receives the data from the setup() function and logs it. The test doesn’t perform any HTTP requests or other actions but simply verifies the data flow.

//Teardown Phase (teardown()):
//The teardown() function ensures that the data remains correct (i.e., v is still 1). If the data has changed, an error is thrown.