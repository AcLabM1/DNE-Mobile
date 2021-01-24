const URL = 'http://192.168.0.31';
const PORT = '8080';

const mockSuccess = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 2000);
    });
};

export const login = async (email, password) => {
    let id = 0;
    await fetch(URL + ':' + PORT + '/account/login?password=' + password + '&username=' + email, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Connection': 'keep-alive'
        },
    }).then((res) => res.json())
        .then((resjson) => {
            id = resjson.idEtudiant;
        })
        .catch((error) => {
        return error;
    });
    return mockSuccess({
        auth_token: 'successful_fake_token',
        user_id: id
    });
};

export const getUserFullName = async (user_id) => {
    let full_name = '';
    await fetch(URL + '/etudiants/' + user_id, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Connection': 'keep-alive'
        },
    }).then((res) => res.json())
        .then((resjson) => {
            full_name = resjson.prenom + " " + resjson.nom;
        })
        .catch((error) => {
            return error;
        });
    return full_name;
}