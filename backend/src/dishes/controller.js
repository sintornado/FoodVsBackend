class DishesController {

    // const USERS_URL = 'http://5abbf59f15c1650014086afd.mockapi.io/dishes/dishes';
    
    list(req, res) {
        console.log('got request for dishes');

        // res.json();

        res.json([
            {id: 1, title: 'Борщ', price: 5, available: true},
            {id: 2, title: 'Гречка', price: 15, available: true},
            {id: 3, title: 'Котлета', price: 20, available: true},
            {id: 4, title: 'Салат', price: 18, available: true},
            {id: 5, title: 'Компот', price: 5, available: true},
            {id: 6, title: 'Суп', price: 15, available: true},
            {id: 7, title: 'Хлеб', price: 1, available: true},
            {id: 8, title: 'Сметана', price: 10, available: true}
        ]);
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