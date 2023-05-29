import axios from "axios";
export const fetchDataFromExpress = async (path) => {
    try {
        const { data } = await axios.get(
            "http://localhost:1338/"+path
            
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export const makePaymentRequest = axios.create({
    baseURL: "http://localhost:1338",
   
});
