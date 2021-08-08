module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
	this.arr = [];
}



// Методы коллекции
Collection.prototype.values = function () {
	return this.arr;
};
// другие методы
Collection.prototype.count = function () {
	return this.arr.length;
};

Collection.prototype.at = function (idx) {
	if (this.arr.includes(this.arr[idx - 1])) {
		return this.arr[idx - 1];
	}
};

Collection.prototype.append = function (elem) {
	if (Array.isArray(elem) || typeof elem === 'number' || typeof elem === 'string' || typeof elem === 'boolean') {
		this.arr = this.arr.concat(elem);
	} else {
		this.arr = this.arr.concat(elem.arr);
	}
};

Collection.prototype.removeAt = function (idx) {
	if (this.arr.includes(this.arr[idx - 1])) {
		this.arr.splice(idx - 1, 1);
		return true;
	} else {
		return false;
	}
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (array) {
	var obj = new Collection();
	obj.arr = array;
	return obj;
};
