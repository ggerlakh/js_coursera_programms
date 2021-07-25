// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	var cmd = command.split(' ')[0];
	switch (cmd) {
		case 'ADD':
			return addContact(command);
			break;
		case 'REMOVE_PHONE':
			return removeContact(command);
			break;
		case 'SHOW':
			return showPhoneBook(command);
			break;
		default:
			break;
	}
	function addContact(command) {
		var contact = command.split(' ')[1];
		var phones = command.split(' ')[2];
		if ((phoneBook.hasOwnProperty(contact)) && (phoneBook[contact] !== '')) {
			var str = ',' + phones;
			phoneBook[contact] += str;
		} else {
			phoneBook[contact] = phones;
		}
		
	} 
	function removeContact(command) {
		var flag = false;
		var keys = Object.keys(phoneBook);
		var phone = command.split(' ')[1];
		for (i=0;i<keys.length;i++) {
			var key = keys[i];
			if (phoneBook[key].split(',').includes(phone)) {
				if (phoneBook[key].includes(',')) {
					phoneBook[key] = phoneBook[key].replace(phone, '');
					if (phoneBook[key].startsWith(',')) {
						phoneBook[key] = phoneBook[key].replace(phoneBook[key][0], '');
					}
					if (phoneBook[key].endsWith(',')) {
						phoneBook[key] = phoneBook[key].replace(phoneBook[key][phoneBook[key].length-1], '');
					}
					if (phoneBook[key].includes(',,')) {
						phoneBook[key] = phoneBook[key].replace(',,', ',');
					}
				} else {
					phoneBook[key] = phoneBook[key].replace(phone, '');
				}

				flag = true;
			}
		}
		return flag;
	}
	function showPhoneBook(command) {
		var arr = [];
		var keys = Object.keys(phoneBook);
		for (var i=0;i<keys.length;i++) {
			var key = keys[i];
			var value = phoneBook[key];
			if (value !== '') {
				if (value.includes(',')) {
					value = value.replace(/,/g, ', ');
				}
				arr.push(key + ': ' + value);
			}
		}
		arr = arr.sort();
		return arr;
	}
};
