import {lazy} from "react";

const AboutPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        return resolve(import('./AboutPage'));
    }, 1000)
}));

export default AboutPageAsync;
