class DailyOrdersController {
    list(req, res) {
        console.log('got request for orders');

        res.json([]);
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one order with id ' + id);

        res.json({
            id
        });
    }

    add(req, res) {
        const data = req.body;
        console.log('got request for add order', data);
        data.id = Date.now();

        res.json(data)
    }

    update(req, res){
        const data = req.body;
        console.log('got request for update order', data);

        res.json(data)
    }

    delete(req, res){
        const id = Number(req.params.id);
        console.log('got request for delete order', id);

        res.json({id});
    }
}

module.exports = new DailyOrdersController;