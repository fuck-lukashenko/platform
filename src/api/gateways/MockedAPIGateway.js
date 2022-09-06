class MockedAPIGateway {
  get(path, params) {
    console.log('GET', path, params);
    switch(path) {
      case '?type=all-meat&sentences=1': {
        return [
          'Fake sentense from mocked API'
        ];
      }
      default: {
        return {};
      }
    }
  };

  post(path, params) {
    console.log('POST', path, params);
    switch(path) {
      default: {
        return {};
      }
    }
  };

  patch(path, params) {
    console.log('PATCH', path, params);
    switch(path) {
      default: {
        return {};
      }
    }
  };

  delete(path, params) {
    console.log('DELETE', path, params);
    switch(path) {
      default: {
        return {};
      }
    }
  };
}

export default MockedAPIGateway;
