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

    console.log(userList);
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email == email && userList[i].password == password) {
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

    return mockSuccess({ auth_token: 'successful_fake_token' });
};

const getAuthenticationToken = () => 'successful_fake_token';

export const getUsers = (shouldSucceed = true) => {
    const token = getAuthenticationToken();

    if (!shouldSucceed) {
        return mockFailure({ error: 401, message: 'Invalid Request' });
    }

    return mockSuccess({
        users: [
            {
                email: 'test@test.ca',
            },
            {
                email: 'test2@test.ca',
            },
        ],
    });
};