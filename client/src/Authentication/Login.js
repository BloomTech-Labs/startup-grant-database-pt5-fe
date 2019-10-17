import React, { useEffect, useState } from 'react';
import { firebase } from '../helpers/index';

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    firebase();
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
    </div>
  );
};

export default Login;
