import axios from 'axios';

export const getMapKey = () => {
  return axios.get('/mapapi');
}

export const retrieveMapKey = mapKeyCookie => {
  let name = mapKeyCookie + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let cookie = ca[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

export const setMapCookie = (mapKeyCookie, mapKey, expiration) => {
  let date = new Date();
  date.setTime(date.getTime() + (expiration * 24 * 60 * 60 * 1000));
  let expire = "expires=" + date.toUTCString();
  document.cookie = mapKeyCookie + "=" + mapKey + ";" + expire + ";path=/;"
}