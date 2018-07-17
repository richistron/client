import immutable from 'immutable';

// eslint-disable-next-line
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Validator = {
  required: (value) => {
    if (!value) {
      return 'Este campo es requerido';
    }
    return null;
  },

  min: (size) => (value) => {
    if (!value || value.length < size) {
      return `Este campo debe ser mayor a ${size} caracteres`;
    }
    return null;
  },

  email: (value) => {
    if (!value) {
      return 'Este campo es requerido';
    }
    if (!value.match(emailRegExp)) {
      return 'Correo electronico invalido';
    }
    return null;
  }

};

export default immutable.fromJS(Validator);

