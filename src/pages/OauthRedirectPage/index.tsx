import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';

const OauthRedirectPage = () => {
  //Oauth redirecturl
  useEffect(() => {
    async function querystring() {
      console.log('query string confirm');
      window.location.href = 'http://localhost:3000/';
    }
    querystring();
  }, []);
  return <></>;
};

export default OauthRedirectPage;
