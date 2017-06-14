module.exports = function (app) {
    let controller = app.controllers.product;
    let validate = app.controllers.authentication.validate;

    app.route("/products")
        .get(validate, controller.findAll);

    app.route("/products/:_id")
        .get(validate, controller.findById);
};