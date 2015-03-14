/**
 * Created by shawnl on 13/03/15.
 */
var Solutions = function(){};

util.inherits(Solutions, pb.BaseController);

Solutions.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('solutions', function(error, result){
		if(error){
			self.reqHandler.serve404();
		}
		else{
			output.content = result;
			cb(output);	
		}
	});
};

Solutions.getRoutes = function(cb){
	var routes = [
		{
			method: 'get',
			path: '/solutions',
			auth_required: false,
			content_type: 'text/html'
		}
	];
	cb(null, routes);
};

module.exports = Solutions;
