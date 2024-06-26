import axios from "axios"
import { BASE_URL, TIMEOUT } from './config';

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.instance.request({ ...config, method: "get" })
  }
  post(config) {
    return this.instance.request({ ...config, method: "post" })
  }
}

const request = new Request(BASE_URL, TIMEOUT)
export default request