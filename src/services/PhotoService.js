import axios from "axios"
export default new class {
    async uploadPhoto(formData) {
        return await axios.post(
            'https://backend.umom.pro/photos/upload',
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
    }
    async
}