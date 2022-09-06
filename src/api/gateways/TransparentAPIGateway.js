import axios from 'axios';

class TransparentAPIGateway {
  constructor() {
    this.instance = axios.create({
      // baseURL: 'https://example.com/api/',
      headers: { 'Content-Type': 'application/json' },
    });

    this.instance.interceptors.response.use(({ data }) => data);
  }

  static get(...args) {
    return new TransparentAPIGateway().instance.get(...args);
  }

  static post(...args) {
    return new TransparentAPIGateway().instance.post(...args);
  }

  static patch(...args) {
    return new TransparentAPIGateway().instance.patch(...args);
  }

  static delete(...args) {
    return new TransparentAPIGateway().instance.delete(...args);
  }
}

export default TransparentAPIGateway;
