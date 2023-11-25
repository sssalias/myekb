export const getFile = (event) => {
    return event.target.files[0]
}

export const getFormData = (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('photo', file)
    return formData
}