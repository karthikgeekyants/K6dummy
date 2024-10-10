import http from 'k6/http';

export default function () {
  const url = 'http://test.k6.io/login';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}



export default function () {
  for (let id = 1; id <= 100; id++) {
    http.get(`http://example.com/posts/${id}`, {
        tags: { name: 'PostsItemURL' },
  });
}
}
// tags.name=\"http://example.com/posts/1\",
// tags.name=\"http://example.com/posts/2\",


//The script first performs a POST request to log in with the specified credentials.
// After that, it makes 100 GET requests to retrieve different posts by iterating 
//through their IDs. Each request is tagged for easy identification in the results.



