class MiURLSearchParams {
  constructor(query) {
    this.params = {};

    if (query) {
      this.parseQuery(query);
    }
  }

  parseQuery(query) {
    const pairs = query.split('&');

    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      const decodedKey = decodeURIComponent(key);
      const decodedValue = decodeURIComponent(value || '');
      
      if (!this.params.hasOwnProperty(decodedKey)) {
        this.params[decodedKey] = [];
      }

      this.params[decodedKey].push(decodedValue);
    }
  }

  toString() {
    const pairs = [];

    for (const key in this.params) {
      if (this.params.hasOwnProperty(key)) {
        for (const value of this.params[key]) {
          const encodedKey = encodeURIComponent(key);
          const encodedValue = encodeURIComponent(value);
          pairs.push(`${encodedKey}=${encodedValue}`);
        }
      }
    }

    return pairs.join('&');
  }

  append(key, value) {
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value || '');

    if (!this.params.hasOwnProperty(decodedKey)) {
      this.params[decodedKey] = [];
    }

    this.params[decodedKey].push(decodedValue);
  }

  forEach(callback) {
    for (const key in this.params) {
      if (this.params.hasOwnProperty(key)) {
        for (const value of this.params[key]) {
          callback(value, key, this);
        }
      }
    }
  }
}

// Ejemplo de uso
const miSearchParams = new MiURLSearchParams('param1=valor1&param2=valor2');

console.log('Cadena de búsqueda original:', miSearchParams.toString());

miSearchParams.append('param3', 'valor3');

console.log('Cadena de búsqueda después de agregar un nuevo parámetro:', miSearchParams.toString());

miSearchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
