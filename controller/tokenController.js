exports.user = function(id, callback) {
	var token = "";
	for(var i=0; i<4;i++){
		token += Math.floor(Math.random() * 10)
	}
	callback({'token': token});
};

exports.delete = function(id, callback) {

};