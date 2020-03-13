import axios from 'axios'

import {appConfig} from '@/conf/app_config.js'
import store from '../store/index'

const app_config = appConfig();

const service = axios.create({
    baseURL: app_config.baseURL, 
    timeout: 15000
})

service.interceptors.request.use(
    config => {
        window.console.log(config);
        let token = store.state.userinfo.token
        if (token) {
            let sp = "?"
            if (config.url.indexOf("?") >= 0) {
                sp = "&"
            }
            config.url = config.url + sp + "access_token=" + token
        }
        return config
    },
    // error => {

    // }
)
