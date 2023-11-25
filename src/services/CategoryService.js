import axios from "axios";

export default new class {
    async getAll() {
        return await axios.get('https://backend.umom.pro/categories/get/all')
    }
    async createOrg(data) {
        return await axios.put('https://backend.umom.pro/categories/create', JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }
}