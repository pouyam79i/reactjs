import axios from "axios";
import { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});
