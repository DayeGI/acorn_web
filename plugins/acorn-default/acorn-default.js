/**
 * Portfolio - A portfolio site theme for PencilBlue
 *
 * @author Shawn Lim <shawnl@istuary.com>
 * @copyright 2014 PencilBlue, LLC
 */
function AcornDefault(){}

/**
 * Called when the application is being installed for the first time.
 *
 * @param cb A callback that must be called upon completion.  cb(err, result).
 * The result is ignored
 */
AcornDefault.onInstall = function(cb) {
    cb(null, true);
};

/**
 * Called when the application is uninstalling this plugin.  The plugin should
 * make every effort to clean up any plugin-specific DB items or any in function
 * overrides it makes.
 *
 * @param cb A callback that must be called upon completion.  cb(err, result).
 * The result is ignored
 */
AcornDefault.onUninstall = function(cb) {
    cb(null, true);
};

/**
 * Called when the application is starting up. The function is also called at
 * the end of a successful install. It is guaranteed that all core PB services
 * will be available including access to the core DB.
 *
 * @param cb A callback that must be called upon completion.  cb(err, result).
 * The result is ignored
 */
AcornDefault.onStartup = function(cb) {
	// To register settings page 
	
    //pb.AdminSubnavService.registerFor('plugin_settings', function(navKey, localization, plugin) {
    //    if(plugin.uid === 'acorn-default') {
    //        return [
    //            {
    //                name: 'home_page_settings',
    //                title: 'Home page settings',
    //                icon: 'home',
    //                href: '/admin/plugins/portfolio/settings/home_page'
    //            }
    //        ];
    //    }
    //    return [];
    //});
	var cos = new pb.CustomObjectService();

	cos.loadTypeByName('community-notification-requests', function(err, contactType) {
		if(!contactType) {
			var contactValues = {
				name: 'community-notification-requests',
				fields: {
					name: {field_type: 'text'},
					description: {field_type: 'text'},
					email: {field_type: 'text'}
				}
			};

			cos.saveType(contactValues, function(err, contactType) {});
		}
	});
	
	cos.loadTypeByName('office-contact-info', function(err, markers) {
		if(!markers) {
			var officeType = {
				name: 'office-contact-info',
				fields: {
					name: {field_type: 'text'},
					office_title: {field_type: 'text'},
					address: {field_type: 'text'},
					phone: {field_type: 'text'},
					fax: {field_type: 'text'},
					email: {field_type: 'text'}
				}
			};

			cos.saveType(officeType, function(err, markers) {
				//var office = {
				//	name: '',
				//	office_title: '',
				//	address: '',
				//	phone: '',
				//	fax: '',
				//	email: ''
				//};
				//
				//pb.CustomObjectService.formatRawForType(office, officeType);
				//var customObjectDocument = pb.DocumentCreator.create('custom_object', office);
                //
				//cos.save(customObjectDocument, officeType, function(err, result) {});
			});
		}
	});
	cos.loadTypeByName('company-values', function(err, companyValueType) {
		if(!companyValueType) {
			var cvType = {
				name: 'company-values',
				fields: {
					header: {field_type: 'text'},
					description: {field_type: 'text'}
				}
			};
			cos.saveType(cvType, function(err, result){})
		}
	});
	cos.loadTypeByName('job-listings', function(err, jobListingType) {
		if(!jobListingType) {
			var jLType = {
				name: 'job-listings',
				"fields" : {
					"active" : { "field_type" : "boolean" },
					"location" : { "field_type" : "text" }, 
					"experience" : { "field_type" : "text" }, 
					"education" : { "field_type" : "text" }, 
					"responsibilities" : { "field_type" : "wysiwyg" }, 
					"skills" : { "field_type" : "wysiwyg" }, 
					"compensation" : { "field_type" : "wysiwyg" }
				}
			};
			cos.saveType(jLType, function(err, result){
				cos.loadTypeByName('job-category', function(err, jobCategoryType) {
					if(!jobCategoryType) {
						var jCType = {
							name: 'job-category',
							"fields" : {
								"active" : { "field_type" : "boolean" },
								"jobs" : { "field_type" : "child_objects" , "object_type" : "custom:job-listings" }
							}
						};
						cos.saveType(jCType, function(err, result){})
					}
				});
			})
		}
	});

	var course_type_checker = function(){
		cos.loadTypeByName('course_type', function(err, courseTypeType) {
			if(!courseTypeType) {
				var cTType = {
					name: 'course_type',
					"fields" : {
						"active" : { "field_type" : "boolean" },
						"courses" : { "field_type" : "child_objects" , "object_type" : "custom:courses" },
						"hover_image" : { "field_type" : "peer_object", "object_type" : "media" }
					}
				};
				cos.saveType(cTType, function(err, result){})
			}
		});
	};
	cos.loadTypeByName('courses', function(err, coursesType) {
		if(err) console.log(err);
		else if(!coursesType) {
			var cType = {
				name: 'courses',
				"fields" : {
					"active" : { "field_type" : "boolean" },
					"dates" : { "field_type" : "text" },
					"time" : { "field_type" : "text" },
					"venue" : { "field_type" : "text" },
					"course_details" : { "field_type" : "wysiwyg" }
				}
			};
			cos.saveType(cType, function(err, result){
				if(err) console.log(err);
				else course_type_checker();
			})
		}
		else{
			course_type_checker();
		}
	});
	var product_type_checker = function(){
		cos.loadTypeByName('product_line', function(err, type) {
			if(!type) {
				var pLType = {
					name: 'product_line',
					"fields" : {
						"active" : { "field_type" : "boolean" },
						"name" : { "field_type" : "text" },
						"tagline" : { "field_type" : "text" },
						"image" : { "field_type" : "peer_object", "object_type" : "media" },
						"products" : { "field_type" : "child_objects" , "object_type" : "custom:products" }
					}
				};
				cos.saveType(pLType, function(err, result){})
			}
		});
	};
	cos.loadTypeByName('products', function(err, type) {
		if(err) console.log(err);
		else if(!type) {
			var pType = {
				name: 'products',
				"fields" : {
					"active" : { "field_type" : "boolean" },
					"product_id" : { "field_type" : "text" },
					"image" : { "field_type" : "peer_object", "object_type" : "media" }
				}
			};
			cos.saveType(pType, function(err, result){
				if(err) console.log(err);
				else product_type_checker();
			})
		}
		else{
			product_type_checker();
		}
	});



	cb(null, true);
};

/**
 * Called when the application is gracefully shutting down.  No guarantees are
 * provided for how much time will be provided the plugin to shut down.
 *
 * @param cb A callback that must be called upon completion.  cb(err, result).
 * The result is ignored
 */
AcornDefault.onShutdown = function(cb) {
    cb(null, true);
};

//exports
module.exports = AcornDefault;
