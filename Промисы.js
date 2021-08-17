/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
	var arr = [];
	for (var i = 0; i < operations.length; i++) {
		var promise = new Promise(function (resolve, reject) {
			operations[i] (function (error, data) {
				if (error) {
					reject(error);
				} else {
					resolve(data);
				}
			});
		});
		arr.push(promise);
	}
	Promise.all(arr)
	        .then((data) => callback(null, data))
	        .catch((error) => callback(error));
};
