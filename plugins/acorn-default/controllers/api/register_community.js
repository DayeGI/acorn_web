/**
 * Created by shawnl on 11/03/15.
 */


function RegisterCommunity() {};

//inheritance
util.inherits(RegisterCommunity, pb.BaseController);

RegisterCommunity.prototype.requestNotification = function(cb) {
	var self = this;

	this.getJSONPostParams(function(err, post) {
		var message = self.hasRequiredParams(post, ['name', 'email']);
		if(message) {
			cb({
				code: 400,
				content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, message)
			});
			return;
		}

		var cos = new pb.CustomObjectService();
		cos.loadTypeByName('community-notification-requests', function(err, contactType) {
			if(util.isError(err) || !pb.utils.isObject(contactType)) {
				cb({
					code: 400,
					content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('INVALID_UID'))
				});
				return;
			}

			var contact = {
				name: post.name + ' (' + pb.utils.uniqueId().toString() + ')',
				email: post.email,
				description: post.email,
				date: new Date()
			};

			pb.CustomObjectService.formatRawForType(contact, contactType);
			var customObjectDocument = pb.DocumentCreator.create('custom_object', contact);
			cos.findByType(contactType, { where : { email:post.email } }, 
			function(err, obj) {
				if(err){
					cb({content: pb.BaseController.apiResponse(pb.BaseController.API_FAILURE, err.toString())});
					return;
				}
				console.log('err ' +err);
				console.log(obj);
				console.log(obj.length);
				if (obj.length===0) {
					cos.save(customObjectDocument, contactType, function (err, result) {
						if (util.isError(err)) {
							cb({
								code: 500,
								content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('ERROR_SAVING'))
							});
							return;
						}
						else if (util.isArray(result) && result.length > 0) {
							cb({
								code: 500,
								content: pb.BaseController.apiResponse(pb.BaseController.API_ERROR, self.ls.get('ERROR_SAVING'))
							});
							return;
						}

						cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, obj.toString())});
					});
				}
				else {
					console.log('DUPLICATE CAUGHT');
					cb({content: pb.BaseController.apiResponse(pb.BaseController.API_FAILURE, 'Request already submitted')});
				}
			});
		});
	});
};

RegisterCommunity.getRoutes = function(cb) {
	var routes = [
		{
			method: 'post',
			path: '/api/community/early_access_reminder',
			auth_required: false,
			content_type: 'application/json',
			handler: 'requestNotification'
		}
	];
	cb(null, routes);
};

//exports
module.exports = RegisterCommunity;
