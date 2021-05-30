/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

export default function Iframe() {
    const companyInfo = { company: 'e5fb241079164c83aa85e58e9aa1b12b', path: 'Jakes-Steamer' };
    const { company: companyID, path: companyName } = companyInfo;
    const [num, setNum] = useState(null);
    useEffect(() => {
        const response = rq(companyID);
        console.log(`response: ${response}`);
        return () => {
            console.log(`response: ${response}`);
        };
    }, []);

    const rq = function rqfn(companyIDNumber) {
        fetch('https://pro.housecallpro.com/alpha/organization/reviews/settings', {
            method: 'GET',
            headers: {
                Authorization: `Token ${companyIDNumber}`
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    console.log(response.status);
                }
                response.json().then((data) => {
                    const { uuid } = data;
                    setNum(uuid);
                    console.log(`uuid: ${uuid}`);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <aside className="relative">
            <div id="reviewsBtnContainer" className="fixed right-0 min-h-screen flex align-center">
                <button id="reviewsBtn" className="my-auto reviews">
                    <div className="border border-solid border-black rounded-sm px-2">
                        <p className="text-center">R</p>
                        <p className="text-center">E</p>
                        <p className="text-center">V</p>
                        <p className="text-center">I</p>
                        <p className="text-center">E</p>
                        <p className="text-center">W</p>
                        <p className="text-center">S</p>
                    </div>
                </button>
            </div>
            <div id="sidebar" className="hidden z-50" />
        </aside>
    );
}
