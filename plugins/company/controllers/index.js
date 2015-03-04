// Instantiate the controller
var Index = function(){};

// Extend the base controller
util.inherits(Index, pb.BaseController);

Index.prototype.render = function(cb) {
    // Allows us to call this.[whatever] from inside anonymous functions 
    var self = this;
    var PluginService = pb.PluginService;
    var output = {
        content_type: 'text/html',
        code: 200
    };

    //Load all the nav index from the company plugin
    //index 1
    pb.plugins.getSetting('top_navigation_index_1', 'company', function(err, index1) {
        //index 2
        pb.plugins.getSetting('top_navigation_index_2', 'company', function(err, index2) {
            //index 3
            pb.plugins.getSetting('top_navigation_index_3', 'company', function(err, index3) {
                //index 4
                pb.plugins.getSetting('top_navigation_index_4', 'company', function(err, index4) {
                    //index 5
                    pb.plugins.getSetting('top_navigation_index_5', 'company', function(err, index5) {
                        //index 6
                        pb.plugins.getSetting('top_navigation_index_6', 'company', function(err, index6) {
                            //index 7
                            pb.plugins.getSetting('top_navigation_index_7', 'company', function(err, index7) {
                                // Register the custom directives
                                self.ts.registerLocal('top_navigation_index_1', index1);
                                self.ts.registerLocal('top_navigation_index_2', index2);
                                self.ts.registerLocal('top_navigation_index_3', index3);
                                self.ts.registerLocal('top_navigation_index_4', index4);
                                self.ts.registerLocal('top_navigation_index_5', index5);
                                self.ts.registerLocal('top_navigation_index_6', index6);
                                self.ts.registerLocal('top_navigation_index_7', index7);
                                // Register external libaries
                                self.ts.registerLocal('main_css_src', PluginService.genPublicPath('company', 'css/main.css'));
                                self.ts.registerLocal('modernizr_js_src', PluginService.genPublicPath('company', 'js/modernizr.custom.09145.js'));
                                self.ts.registerLocal('tweenMax_js_src', PluginService.genPublicPath('company', 'js/greensock-js/src/uncompressed/TweenMax.js'));
                                self.ts.registerLocal('main_js_src', PluginService.genPublicPath('company', 'js/main.js'));

                                //Load the headline setting from the company plugin
                                pb.plugins.getSetting('landing_page_headline', 'company', function(err, headline) {
                                    //Load the subheader setting
                                    pb.plugins.getSetting('landing_page_subheader', 'company', function(err, subheader) {
                                        // Register the custom directives
                                        self.ts.registerLocal('landing_page_headline', headline);
                                        self.ts.registerLocal('landing_page_subheader', subheader);
                                        self.ts.load(path.join('index'), function(error, result) {
                                            output.content = result;
                                            cb(output);
                                        });
                                    });
                                });
                                
                            });
                        });
                    });
                });
            });
        });
    });
};

// Define the routes for the controller
Index.getRoutes = function(cb) {
    var routes = [{
        method: 'get',
        path: "/",
        auth_required: false,
        content_type: 'text/html'
    }];
    cb(null, routes);
};

// Export the controller so it can be loaded into the application
module.exports = Index;