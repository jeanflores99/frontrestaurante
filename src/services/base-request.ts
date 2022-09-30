import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import cookies from 'js-cookie'
import urlJoin from 'url-join';
import UrlJoin from 'url-join'

export const BaseRequest = (urlBase: string, token: string | null = null) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.get(
            "AccessToken"
        )}`;
    }

    const get = async (link: string, config?: AxiosRequestConfig) => {
        return await axios.get(UrlJoin(urlBase, link), config)
    }

    const post = async (link: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
        return await axios.post(urlJoin(urlBase, link), data, config)
    }

    const put = (
        link: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<any> => {
        return axios.put(urlJoin(urlBase, link), data, config);
    };

    const destroy = async (link: string, config?: AxiosRequestConfig): Promise<AxiosResponse> => {
        return await axios.delete(urlJoin(urlBase, link), config);
    };

    const generateUrl = (link: string) => urlJoin(urlBase, link);

    return {
        urlBase,
        get,
        post,
        put,
        destroy,
        generateUrl,
        headers: axios.defaults.headers.common,
    }
}