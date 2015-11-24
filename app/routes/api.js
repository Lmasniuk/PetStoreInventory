var Item = require('../models/item.js');

module.exports = function(app, express) {
  var apiRouter = express.Router();

  apiRouter.route('/items')
    // create an item
    // TODO: validation
    .post(function(req, res) {
      var item = new Item();
      item.type = req.body.type;
      item.name = req.body.name || '';
     // item.description = req.body.description || '';
      item.quantity = req.body.quantity || 1;
     // item.location = req.body.location || '';
      item.brand = req.body.brand || '';
      item.price = req.body.price || '';
      item.condition = req.body.condition || '';
      item.contact = req.body.contact || '';
      item.date_added = new Date().toISOString();

      item.save(function(err) {
        if (err)
          return res.send(err);
        else
          res.json({ message: 'Item created!' });
      });
    })

    // get all items
    .get(function(req, res) {
      Item.find(function(err, items) {
        if (err)
          res.send(err);
        else
          res.json(items);
      });
    });


  apiRouter.route('/items/:itemId')
    // get an item
    .get(function(req, res) {
      Item.findById(req.params.itemId, function(err, item) {
        if (err) res.send(err);
        res.json(item);
      });
    })

    // edit an item
    // TODO: validation
    .put(function(req, res) {
      Item.findById(req.params.itemId, function(err, item) {
        if (err) res.send(err);

        if (req.body.location) item.location = req.body.location;
        if (req.body.quantity) item.quantity = req.body.quantity;
        if (req.body.price)    item.price = req.body.price;
        if (req.body.brand)    item.brand = req.body.brand;
        if (req.body.name)     item.name = req.body.name;

        item.save(function(err) {
          if (err)
            res.send(err);
          else
            res.send({ message: 'Item updated!' });
        });

      });
    })

    // delete an item
    .delete(function(req, res) {
      Item.remove({
        _id: req.params.itemId
      }, function(err, item) {
        if (err)
          res.send(err);
        else
          res.json({ message: 'Successfully deleted' });
      });
    });


  return apiRouter;
};
