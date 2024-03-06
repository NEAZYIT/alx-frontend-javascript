function handleResponseFromAPI(promise) {
  const successBody = { status: 200, body: 'success' };

  return promise
    .then(() => successBody)
    .catch((error) => error)
    .finally(() => console.log('Received a response from the API'));
}

export default handleResponseFromAPI;
