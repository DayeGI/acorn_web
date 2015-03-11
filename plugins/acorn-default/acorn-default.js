/**
 * Portfolio - A portfolio site theme for PencilBlue
 *
 * @author Shawn Lim <blake@pencilblue.org>
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

			cos.saveType(contactValues, function(err, contactType) {
				cb(null, true);
			});
		}
		else {
			cb(null, true);
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
