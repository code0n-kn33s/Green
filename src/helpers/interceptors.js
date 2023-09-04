
export function setToken(user) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 999);
    document.cookie = `token=${user.token}; expires=${expires.toUTCString()}; path=/`;

    window.localStorage.setItem('user-email', user.email)
    window.localStorage.setItem('user-username', user.username)
    window.localStorage.setItem('user-id', user.id)
    window.localStorage.setItem('user-image', user.image)
}

export function getToken() {
    const name = 'token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

export function privateFetch (url, options) {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (getToken) {
        headers.Authorization = `Bearer ${getToken}`;

        return fetch(url, {
            ...options,
            headers,
        });
    }

};
export function clearToken (url, options) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }

    localStorage.clear();
};