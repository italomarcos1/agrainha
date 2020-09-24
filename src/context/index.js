import React, { createContext, useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const ValidationContext = createContext();

export default function ValidationProvider({ children }) {
  const nameValidation = useMemo(() => {
    return new RegExp(/^\s+$/); // prettier-ignore
  }, []);

  const nameIsValid = useCallback(
    name => {
      return nameValidation.test(name) || name === '';
    },
    [nameValidation]
  );

  const postcodeValidation = useMemo(() => {
    return new RegExp(/^[0-9][0-9][0-9][0-9]\-[0-9][0-9][0-9]$/);
  }, []);

  const postCodeIsValid = useCallback(
    postcode => {
      return postcodeValidation.test(postcode);
    },
    [postcodeValidation]
  );

  const mailValidation = useMemo(() => {
    return new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }, []);

  const mailIsValid = useCallback(
    email => {
      return mailValidation.test(String(email).toLowerCase());
    },
    [mailValidation]
  );

  return (
    <ValidationContext.Provider
      value={{ nameIsValid, postCodeIsValid, mailIsValid }}
    >
      {children}
    </ValidationContext.Provider>
  );
}

export function useValidation() {
  const context = useContext(ValidationContext);

  if (!context) {
    throw new Error('Must be inside a context to run.');
  }

  return context;
}

ValidationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
