/**
 * Contact Form designed for Acorn Web
 *
 * @author Shawn Lim <shawnl@istuary.com>
 * @copyright 2015 Istuary Media
 * 
 **/
function Contact(){}

/**
 * Called when the application is being installed for the first time.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
Contact.onInstall = function(cb) {
  var self = this;
  var cos = new pb.CustomObjectService();

  cos.loadTypeByName('contact-requests', function(err, contactType) {
    if(!contactType) {
      var contactValues = {
        name: 'contact-requests',
        fields: {
          name: {field_type: 'text'},
          phone: {field_type: 'text'},
          email: {field_type: 'text'},
          company: {field_type: 'text'},
          comment: {field_type: 'text'},
          date: {field_type: 'date'}
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
};

/**
 * Called when the application is uninstalling this plugin.  The plugin should
 * make every effort to clean up any plugin-specific DB items or any in function
 * overrides it makes.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
Contact.onUninstall = function(cb) {
  cb(null, true);
};

/**
 * Called when the application is starting up. The function is also called at
 * the end of a successful install. It is guaranteed that all core PB services
 * will be available including access to the core DB.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
Contact.onStartup = function(cb) {
  cb(null, true);
};

/**
 * Called when the application is gracefully shutting down.  No guarantees are
 * provided for how much time will be provided the plugin to shut down.
 *
 * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
 * The result should be TRUE on success and FALSE on failure
 */
Contact.onShutdown = function(cb) {
  cb(null, true);
};

//exports
module.exports = Contact;
