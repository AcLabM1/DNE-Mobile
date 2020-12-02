import { getToken } from './token';

const mockSuccess = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 2000);
    });
};

const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000);
    });
};

const checkUser = (email, password) => {
    let userList = getUserList();

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email === email && userList[i].password === password) {
            return true;
        }
    }
    return false;
}

const getUserList = () => {
    return [
        {
            email: 'gianni.giudice@lacatholille.fr',
            password: 'mdp123'
        },
        {
            email: 'gautier.couture@lacatholille.fr',
            password: 'mdp123'
        }
    ];
}

export const login = (email, password) => {

    if (!checkUser(email, password)) {
        return mockFailure({ error: 500, message: 'Identifiants invalides.' });
    }

    return mockSuccess({
        auth_token: 'successful_fake_token',
        user_id: getUserID(email)
    });
};

export const getUserID = (email) => {
    let id;

    switch (email) {
        case 'gianni.giudice@lacatholille.fr':
            return '1';
        case 'gautier.couture@lacatholille.fr':
            return '2';
        default:
            return '0';
    }
}

export const getUsers = async (shouldSucceed = true) => {
    const token = await getToken();

    if (token !== 'successful_fake_token') {
        return mockFailure({ error: 401, message: 'Invalid Request' });
    }

    return mockSuccess({
        users: [
            {
                email: 'gianni.giudice@lacatholille.fr',
                status: 'student'
            },
            {
                email: 'gautier.couture@lacatholille.fr',
                status: 'student'
            }
        ],
    });
};