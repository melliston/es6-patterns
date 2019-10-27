/**
 * The Adapter Patter
 * 
 * A structural pattern where interfaces can work together. 
 * Converting one interface of a class into a format that another client interface can work with.
 * This would usually be used if they were incompatible.
 * 
 * Eg. An old and a new API. 
 * We may have a new API that wont expect the data in the same format as the old API so the 
 * adapter pattern can be used to wrap the new Api interface into it
 */
class OldApi {
  constructor() {
    this.login = (username, password,) => {
      this.__apiUrl = 'Old API Login Endpoint'; 
      this.__username = username;
      this.__password = password;
      return `Logged In Using Endpoint: ${this.__apiUrl}`;
    }
  }
}

class NewApi {
  constructor() {
    this.login = (domain, username, password) => {
      this.__apiUrl = 'New API Login Endpoint'; 
      this.__domain = domain;
      this.__username = username;
      this.__password = password;
      return `Logged In Using Endpoint: ${this.__apiUrl}`;
    }
  }
}

class ApiAdapter {
  constructor() {
    const newApi = new NewApi();

    this.login = (username, password) => {
      return newApi.login('oldApi', username, password);
    }
  }
}

const oldApi = new OldApi();
console.log(oldApi.login('Matthew', 'test'));

const newApi = new NewApi();
console.log(newApi.login('newApi', 'Matthew', 'test'));

const adapterApi = new ApiAdapter();
console.log(adapterApi.login('Matthew', 'test'));