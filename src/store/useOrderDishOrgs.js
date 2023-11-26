import {defineStore} from "pinia"


export default defineStore(
    'order-dish-orgs',
    {
        state: () => ({
            items: {}
        }),
        actions: {
            addOrders(items) {
                this.items = items
            }
        }
    }
)