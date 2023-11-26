import axios from "axios";

export default new class {
    async getAll() {
        return await axios.get('https://backend.umom.pro/news/get')
    }
    async createNew(data) {
        return await axios.put('https://backend.umom.pro/news/create', JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }
}