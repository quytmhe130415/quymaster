class Food {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
        this.image = Math.random() > 0.5 ? 'http://placekitten.com/640/360' : `https://moitruong.com.vn/Upload/hoa%20thuan%20voi%20thien%20nhien.jpg`;
    }
}
module.exports = Food;