/**
 * Created by shawnl on 13/03/15.
 */
var AboutUs = function(){};

util.inherits(AboutUs, pb.BaseController);

AboutUs.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	//Load the headline setting from the company plugin
	pb.plugins.getSetting('mission_statement', 'acorn-default', function(err, mission) {
		//Load the subheader setting
		pb.plugins.getSetting('company_description', 'acorn-default', function(err, description) {
			// Register the custom directives
			self.ts.registerLocal('mission_statement', mission);
			self.ts.registerLocal('company_description', description);
			
			//office contact information
			var cos = new pb.CustomObjectService();
			cos.loadTypeByName('office-contact-info', function(err, officeContactType){
				cos.findByType(officeContactType, null, function(err, results){
					for(var i=0; i<results.length; i++){
						self.ts.registerLocal(results[i].name+'_title', results[i].office_title);
						self.ts.registerLocal(results[i].name+'_address', results[i].address);
						self.ts.registerLocal(results[i].name+'_phone', results[i].phone);
						self.ts.registerLocal(results[i].name+'_fax', results[i].fax);
						self.ts.registerLocal(results[i].name+'_email', results[i].email);
					}
					cos.loadTypeByName('company-values', function(err, companyValuesType){
						cos.findByType(companyValuesType, null, function(err, results) {
							for(var i=0; i<results.length; i++) {
								self.ts.registerLocal('v'+i+'_header', results[i].header);
								self.ts.registerLocal('v'+i+'_description', results[i].description);
							}
							self.ts.load('about_us', function(error, result){
								output.content = result;
								cb(output);
							});
						});
					});
				});
			});

		});
	});
};

AboutUs.getRoutes = function(cb){
	var routes = [{
		method: 'get',
		path: '/about',
		auth_required: false,
		content_type: 'text/html'
	}];
	cb(null, routes);
};

module.exports = AboutUs;
