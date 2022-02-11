import React, { useEffect, useState } from 'react';
import axios from 'axios';

// TASK
// 1. google Oauth 페이지 url 연결
// 2. 로그인 동작 확인
/* 
  -> token 뺴낸 뒤 테스트

*/
// 3. 인증 코드 받아서 서버로 넘기기

function Login() {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash) {
      const accessToken = hash.split('=')[1].split('&')[0];
      (async () => {
        await axios
          .get(
            'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
              accessToken,
            {
              headers: {
                authorization: `token ${accessToken}`,
                accept: 'application/json',
              },
            },
          )
          .then((data) => {
            console.log(data);
          })
          .catch((e) => console.log('oAuth token expired'));
      })();
    }
  }, []);

  return (
    <div>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=487063212251-01k96aopcoerk52o94sodc2p7f6e7udv.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000/login&scope=https://www.googleapis.com/auth/userinfo.email">
        Login
      </a>
    </div>
  );
}

export default Login;

// {"web":{"client_id":"487063212251-01k96aopcoerk52o94sodc2p7f6e7udv.apps.googleusercontent.com","project_id":"gdsc-dju","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["https://gdsc-dju.firebaseapp.com/__/auth/handler","https://localhost:3000"],"javascript_origins":["http://localhost","http://localhost:5000","https://gdsc-dju.firebaseapp.com","https://localhost:3000","https://gdsc-dju.web.app"]}}
