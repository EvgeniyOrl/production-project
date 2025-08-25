import { lazy } from 'react';

const AboutPageAsync = lazy(() => new Promise((resolve) => {
    setTimeout(
        // @ts-ignore
        () => resolve(import('./AboutPage')),
        1000,
    );
}));

export default AboutPageAsync;
