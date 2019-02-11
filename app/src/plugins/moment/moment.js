import moment from 'moment'
moment.locale('Pt-br')

const momentObj = {
    formatDate: function (date, formatStr) {
        return moment(date).format(formatStr)
    } 
}

export default function install (Vue, options) {
    Object.defineProperties(Vue.prototype, {
        $moment: {
            get () {
                return momentObj
            }
        }
    })
}