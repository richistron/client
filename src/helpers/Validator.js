import immutable from 'immutable';

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

};

export default immutable.fromJS(Validator);

