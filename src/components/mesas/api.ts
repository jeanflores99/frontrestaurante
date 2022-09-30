import { RestauranteRequest } from '@services/restaurante-request'

const Request = RestauranteRequest()

export const GetMesas = async () => {
    return await Request.get(`mesa`).then((res) => res.data)
}
