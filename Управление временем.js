/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	var newDate = new Date(date);
	return {
		objDate: newDate,
		get value() {
			return this.objDate.toISOString().replace('T', ' ').substring(0, 16);
		},
		add: function(val, type) {
			var typeArr = ['years', 'months', 'days', 'hours', 'minutes'];
			if ((val < 0) || (!typeArr.includes(type)) || (!Number.isInteger(val))) {
				throw new TypeError('Передано неверное значение');
			}
			switch (type) {
				case 'years':
					this.objDate.setFullYear(this.objDate.getFullYear() + val);
					break;
				case 'months':
					this.objDate.setMonth(this.objDate.getMonth() + val);
					break;
				case 'days':
					this.objDate.setDate(this.objDate.getDate() + val);
					break;
				case 'hours':
					this.objDate.setHours(this.objDate.getHours() + val);
					break;
				case 'minutes':
					this.objDate.setMinutes(this.objDate.getMinutes() + val);
					break;
				default:
					break;
				    
					
			}
			return this;
		},
		subtract: function(val, type) {
			var typeArr = ['years', 'months', 'days', 'hours', 'minutes'];
			if ((val < 0) || (!typeArr.includes(type)) || (!Number.isInteger(val))) {
				throw new TypeError('Передано неверное значение');
			}
			switch (type) {
				case 'years':
					this.objDate.setFullYear(this.objDate.getFullYear() - val);
					break;
				case 'months':
					this.objDate.setMonth(this.objDate.getMonth() - val);
					break;
				case 'days':	
					this.objDate.setDate(this.objDate.getDate() - val);
					break;
				case 'hours':
					this.objDate.setHours(this.objDate.getHours() - val);
					break;
				case 'minutes':
					this.objDate.setMinutes(this.objDate.getMinutes() - val);
					break;
				default:
					break;
			}
			return this;
		}
	}
};
