/**
 * Created by shawnl on 13/03/15.
 */
var News = function(){};

util.inherits(News, pb.BaseController);

News.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('news', function(error, result){
		if(error){
			self.reqHandler.serve404();
		}
		else{
			output.content = result;
			cb(output);	
		}
	});
};

News.getRoutes = function(cb){
	var routes = [
		{
			method: 'get',
			path: '/news',
			auth_required: false,
			content_type: 'text/html'
		}
	];
	cb(null, routes);
};

module.exports = News;
