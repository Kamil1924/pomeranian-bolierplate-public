import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

const createRandomUser = (source) => {
    return {
        source,
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};

const fbDB = Array(10)
    .fill()
    .map((el) => createRandomUser('facebook'));

const googleDB = Array(10)
    .fill()
    .map((el) => createRandomUser('google'));

export function AsyncAwait() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const myPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(fbDB);
                }, 1000);
            });

            return myPromise.then((data) => data).catch((err) => err);
        };

        async function getDataFaster() {
            const myPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject('error');
                }, 100);
            });

            return myPromise.then((data) => data).catch((err) => err);
        }

        const fbDataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('The DB seems to be out of order.');
            }, 100);
        });
        const googleDataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fbDB);
            }, 1000);
        });

        Promise.allSettled([fbDataPromise, googleDataPromise]).then((promises) => {
            console.log(promises);
            console.log(promises.filter((prom) => prom.status !== 'fulfilled'));
        });
    }, []);

    return (
        <>
            {data.map((el) => (
                <>{el.username}</>
            ))}
        </>
    );
}