/**
 * Created by shawnl on 13/03/15.
 */
var Products = function(){};

util.inherits(Products, pb.BaseController);

Products.prototype.render = function(cb){
	var self = this;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('products', function(error, result){
		output.content = result;
		cb(output);
	});
};
Products.prototype.getAllProducts = function(cb){
	var cos = new pb.CustomObjectService();
	cos.loadTypeByName('product_line', function(err, custObjType) {
		var options = {
			fetch_depth: 3
		};
		cos.findByTypeWithOrdering(custObjType, options, function(err, parents) {
			console.log(parents);
			cb({content: pb.BaseController.apiResponse(pb.BaseController.API_SUCCESS, parents)});
		});
	});
};
Products.prototype.getProduct = function(cb){
	var self    = this;
	var product = this.pathVars.product;
	var output = {
		content_type: 'text/html',
		code: 200
	};
	self.ts.load('products/'+product, function(error, result){
		if(error){
			self.reqHandler.serve404();
		}
		else{
			output.content = result;
			cb(output);
		}

	});
	
};

Products.getRoutes = function(cb){
	var routes = [
		{
			method: 'get',
			path: '/products',
			auth_required: false,
			content_type: 'text/html'
		},
		{
			method: 'get',
			path: '/products/:product',
			auth_required: false,
			content_type: 'text/html',
			handler: 'getProduct'
		},
		{
			method: 'get',
			path: 'api/products/all',
			auth_required: false,
			content_type: 'text/html',
			handler: 'getAllProducts'
		}
	];
	cb(null, routes);
};

module.exports = Products;
