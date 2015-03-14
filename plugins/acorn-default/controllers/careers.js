/**
 * Created by shawnl on 13/03/15.
 */
var Careers = function(){};

util.inherits(Careers, pb.BaseController);

Careers.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('careers', function(error, result){
		output.content = result;
		cb(output);
	});
};

Careers.prototype.getJobListings = function(cb){
	//office contact information
	var cos = new pb.CustomObjectService();
	cos.loadTypeByName('job-listings', function(err, jobListingType){
		cos.findByType(jobListingType, null, function(err, results){
			cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, results)});
		});
	});
};

Careers.getRoutes = function(cb){
	var routes = [
		{
			method: 'get',
			path: '/careers',
			auth_required: false,
			content_type: 'text/html'
		},
		{
			method: 'get',
			path: '/api/job-listings',
			auth_required: false,
			content_type: 'application/json',
			handler: 'getJobListings'
		}
	];
	cb(null, routes);
};

module.exports = Careers;
