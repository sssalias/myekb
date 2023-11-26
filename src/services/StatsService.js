import axios from 'axios'

export default new class {
    async getAll() {
        return await axios.get('https://analytics.umom.pro/statistics')
    }

    async getSum(stats, param, value) {
        let res= 0
        for (let item of stats) {
            if (item[param] === value) {
                res += 1
            }
        }
        return res
    }
    async getChart(stats, params, values) {
        let charts = []
        for (let val of values) {
            for (let param of params) {
                console.log(param)
                charts.push(await this.getSum(stats, param, val))
            }
        }
        return charts
    }
}