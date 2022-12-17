import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://healingchurch.com:8000',
  // headers: {'rufi header': 'hello this is hc'}
})
