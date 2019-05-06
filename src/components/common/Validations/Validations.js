export const required = value => (!value ? 'Requerido' : undefined);

const maxLength = max => (
  value => (
    (value && value.length > max) ? `Debe tener ${max} caracteres o menos` : undefined
  )
);

export const maxLength65 = maxLength(65);
export const maxLength16 = maxLength(16);
export const maxLength10 = maxLength(10);
export const maxLength8 = maxLength(8);
export const maxLength6 = maxLength(6);

const minLength = min => (
  value => (
    (value && value.length < min) ? `Debe tener ${min} caracteres o mas` : undefined
  )
);

export const minLength4 = minLength(4);
export const minLength8 = minLength(8);
export const minLength9 = minLength(9);

export const number = value => (value && Number.isNaN(Number(value)) ? 'Debe ser un numero' : undefined);

const minValue = min => (
  value => (
    (value && value < min) ? `Debe ser mayor a ${min}` : undefined
  )
);

export const minValue13 = minValue(13);

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'E-mail invalido'
    : undefined
);

export const alphaNumeric = value => (
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Solo caracteres alfanumericos'
    : undefined
);