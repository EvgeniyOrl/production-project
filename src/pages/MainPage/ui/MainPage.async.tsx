import {lazy} from "react";

const MainPageAsync = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        // @ts-ignore
        return resolve(import('./MainPage'));
    }, 1000)
}));

export default MainPageAsync;
