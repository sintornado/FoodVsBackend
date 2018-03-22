class UsersController {
    list(req, res) {
        console.log('got request for users');

        res.json([]);
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got request for one user with id ' + id);

        res.json({
            id
        });
    }

    add(req, res) {
        const data = req.body;
        console.log('got request for add user', data);
        data.id = Date.now();

        res.json(data)
    }

    update(req, res){
        const data = req.body;
        console.log('got request for update user', data);

        res.json(data)
    }

    delete(req, res){
        const id = Number(req.params.id);
        console.log('got request for delete user', id);

        res.json({id});
    }
}

module.exports = new UsersController;