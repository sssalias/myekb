import axios from "axios";

export default new class {
    async getById(data) {
        return await axios.post('https://backend.umom.pro/dishes/get/by/category', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    async getByDishId(data) {
        return await axios.post('https://backend.umom.pro/dishes/get/by/id', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    async getAll() {
        return await axios.get('https://backend.umom.pro/dishes/get/all')
    }
    async createDish(data) {
        return await axios.put('https://backend.umom.pro/dishes/create', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    async deleteDish(data) {
        return await axios.delete(
            'https://backend.umom.pro/dishes/delete',
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(data)
            }
        )
    }
    async editDish(data) {
        return await axios.patch('https://backend.umom.pro/dishes/update', JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}