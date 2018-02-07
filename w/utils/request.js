var app = getApp();
module.exports = {
  productInfoUrl: function (id){
    return app.getBaseUrl() + '/api/product/info/' + id;
  },
  productListUrl: function (id) {
    return app.getBaseUrl() + '/api/product/list/' + id;
  }
}