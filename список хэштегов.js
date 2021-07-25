/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var arr = tweet.split(' ')
	function filterFunction(item, index) {
		return item.startsWith('#')
	}
	function clean(item, index) {
		result.push(item.replace('#', ''))
	}
	var newArr = arr.filter(filterFunction)
	var result = []
	if (newArr.length === 0) {
		return newArr
	}
	if (newArr.length > 0) {
		newArr.forEach(clean)
		return result
	}
};
