const files = require.context('../', true, /store\.js/)
const modules = {}

files.keys().forEach(key => {
	if (!files(key).default) {
		throw new Error('Files must have a store object defined on their creation')
	}
	key.replace(/[A-z]+(?:\/store\.js$)/, function (match) {
		modules[match.replace(/\/store\.js/gi, '')] = files(key).default	
	})
})

export default modules