class DishesController {
    list(req, res) {
        console.log('got request for dishes');

        res.json([]);
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one dish with id ' + id);

        res.json({
            id
        });
    }

    add(req, res) {
        const data = req.body;
        console.log('got request for add dish', data);
        data.id = Date.now();

        res.json(data)
    }

    update(req, res){
        const data = req.body;
        console.log('got request for update dish', data);

        res.json(data)
    }

    delete(req, res){
        const id = Number(req.params.id);
        console.log('got request for delete dish', id);

        res.json({id});
    }
}

module.exports = new DishesController;