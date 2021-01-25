const URL = 'http://192.168.1.17';
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
    await fetch(URL + ':' + PORT + '/etudiants/' + user_id, {
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

export const getUserInfo = async (user_id) => {
    let first_name= '';
    let last_name= '';
    let date_of_birth= '';
    let mail_perso= '';
    let phone= '';
    let mail_univ= '';
    await fetch(URL + ':' + PORT + '/etudiants/' + user_id, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Connection': 'keep-alive'
        },
    }).then((res) => res.json())
        .then((resjson) => {
            first_name = resjson.prenom;
            last_name = resjson.nom;
            date_of_birth = resjson.dateNaissance;
            mail_perso = resjson.emailPersonnel;
            phone = resjson.telephonePersonnel;
            mail_univ = resjson.emailUniv;
        })
        .catch((error) => {
            return error;
        });
    return [first_name, last_name, date_of_birth, mail_perso, phone, mail_univ];
}