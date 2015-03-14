/**
 * Created by shawnl on 13/03/15.
 */
var University = function(){};

util.inherits(University, pb.BaseController);

University.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('university', function(error, result){
		if(error){
			self.reqHandler.serve404();
		}
		else{
			output.content = result;
			cb(output);	
		}
	});
};
University.prototype.getImages = function(cb){
	var dao = new pb.DAO();
	dao.q('topic',{where:{name:'university-slideshow'}}, 
		function(err, result){
			if(err){console.log(err)}
			else{
				dao.q('media', { where: {media_topics:{$in:[result[0]._id+'']}}},
						function(err, results){
							cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, results)});
						});
			}
		});
};
University.getRoutes = function(cb){
	var routes = [
		{
			method: 'get',
			path: '/university',
			auth_required: false,
			content_type: 'text/html'
		},
		{
			method: 'get',
			path: '/api/get_university_slideshow',
			auth_required: false,
			content_type: 'application/json',
			handler: 'getImages'
		}
	];
	cb(null, routes);
};

module.exports = University;
