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
	cos.loadTypeByName('job_category', function(err, jobListingType){
		cos.findByTypeWithOrdering(jobListingType, {fetch_depth: 3}, function(err, parents) {
			console.log(parents);
			cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, parents)});
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
			path: '/api/all_jobs',
			auth_required: false,
			content_type: 'application/json',
			handler: 'getJobListings'
		}
	];
	cb(null, routes);
};

module.exports = Careers;
