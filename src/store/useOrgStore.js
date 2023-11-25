import {defineStore} from "pinia";
import StoreService from "@/services/OrgService";

export default defineStore(
    'orgs',
    {
        state: () => ({
            orgs: []
        }),
        actions: {
            async getAll() {
                return await StoreService.getAll()
            }
        }
    }
)