module.exports = function (app) {
    let Product = app.models.product;

    let controller = {};

    controller.findAll = function (req, res) {
        Product.find(req.query)
            .populate("items")
            .exec()
            .then(function (products) {
                res.status(200).json(products);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    controller.findById = function (req, res) {
        Product.findById(req.params._id)
            .populate("items")
            .exec()
            .then(function (product) {
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({
                        error: "Product not found."
                    });
                }
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    return controller;
};