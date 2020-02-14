import React from 'react';

export default (props) => {
  if (props.logged) {// Check user logged in
    return <>{props.children}</>;
  }
  return <>Unauthentication</>;
}