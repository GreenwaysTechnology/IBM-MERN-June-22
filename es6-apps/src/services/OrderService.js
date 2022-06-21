import ORDERS from "../mock-data/orders"

export default class OrderService {
    findAll() {
        return ORDERS
    }
}