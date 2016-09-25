function login(username, password) {
    return Promise.resolve(username === 'piolin@gmail.com' && password === 'vago');
}

module.exports = {
    login
};
