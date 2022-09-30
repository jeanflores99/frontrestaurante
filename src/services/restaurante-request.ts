import { BaseRequest } from './base-request'
export const RestauranteRequest = (token: null | string = '') => {
    const request = BaseRequest(process.env.NEXT_PUBLIC_HOST_URL || '', token)
    return request;
}