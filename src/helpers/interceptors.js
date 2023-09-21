
export function setToken(user) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 999);
    document.cookie = `token=${user.token}; expires=${expires.toUTCString()}; path=/`;

    setStorage(user)
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

export function setStorage(user) {
    localStorage.setItem('id', `${user.id}`)
    localStorage.setItem('balance', `${user.balance}`)
    localStorage.setItem('crypto_deposit_btc', `${user.crypto_deposit_btc}`)
    localStorage.setItem('crypto_deposit_eth', `${user.crypto_deposit_eth}`)
    localStorage.setItem('crypto_deposit_usdt', `${user.crypto_deposit_usdt}`)
    localStorage.setItem('is_active', `${user.is_active}`)
    localStorage.setItem('username', `${user.username}`)
    localStorage.setItem('email', `${user.email}`)
    localStorage.setItem('first_name', `${user.first_name}`)
    localStorage.setItem('last_name', `${user.last_name}`)
}

export function privateFetch (url, options, exclude) {
    let headers = {}
    if (!exclude) {
        headers = {
            'Content-Type': 'application/json',
        };
    }

    if (getToken()) {
        headers.Authorization = `Token ${getToken()}`;

        return fetch(process.env.REACT_APP_API_URL + url, {
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