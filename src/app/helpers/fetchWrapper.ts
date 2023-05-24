export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      // Uncomment this to apply headers param
      // headers: authHeader(url)
    };

    if (body) {
      requestOptions.headers = {'Content-Type': 'application/json'};
      requestOptions.body = JSON.stringify(body);
    }

    return fetch(url, requestOptions).then(handleResponse);
  }
}

// Uncomment this to apply headers param
// function authHeader(url) {
//   const user = userService.userValue;
//   const isLoggedIn = user?.token;
//   const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);

//   if (isLoggedIn && isApiUrl) {
//     return { Authorization: `Bearer ${user.token}` };
//   } else {
//     return {};
//   }
// }

async function handleResponse(response) {
  const isJson = response.headers?.get('content-type')?.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
        // Handle error
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}