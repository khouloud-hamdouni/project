import { useEffect, useState } from "react";
import { fetchDataFromExpress } from "../utils/express";
const useExpress = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromExpress(endpoint);
        setData(res);
    };

    return { data };
};
export default useExpress;
