module.exports = {
    subs: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
	    if (!this.subs.includes(subscriber)) {
		    this.subs.push(subscriber);
	    }
	    if (!subscriber.hasOwnProperty(event)) {
		    subscriber[event] = [];
	    }
	    subscriber[event].push(handler);
	    return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
	    if (subscriber.hasOwnProperty(event)) {
		    delete subscriber[event];
	    }
	    return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
	    for (var i = 0; i < this.subs.length; i++) {
		    if (this.subs[i].hasOwnProperty(event)) {
			    for (var j = 0; j < this.subs[i][event].length; j++) {
				    var func = this.subs[i][event][j];
				    func.call(this.subs[i]);
			    }
		    }
	    }
	    return this;
    }
};
