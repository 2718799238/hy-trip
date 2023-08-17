import axios from "axios";
import { BEASEURL, TIMEOUT } from "./config";

class Drequest {
    constructor(BEASEURL, TIMEOUT = 1000) {
        this.instance = axios.create({
            baseURL: BEASEURL,
            timeout: TIMEOUT,
        })
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

const request = new Drequest(BEASEURL, TIMEOUT)
export default request