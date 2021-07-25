/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	var result = [];
	for (i=0;i<hashtags.length;i++) {
		if (!result.includes(hashtags[i].toLowerCase())) {
			result.push(hashtags[i].toLowerCase());
		}
	}
	return result.join(', ');
};
