const delayedSuccess = () => {
    setTimeout(() => {
        let success = { message: 'delayed success!' };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};


const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};


resolvedPromise()
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

rejectedPromise()
    .then((res) => console.log(res))
    .catch((err) => console.error(err));