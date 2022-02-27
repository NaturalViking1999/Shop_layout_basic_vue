const App = {
    data() {
        return {
            products: [{
                title: 'LG TV 4K',
                description: 'It is TV',
                imageLink: 'https://img.mvideo.ru/Big/10026890bb.jpg',
                cost: 50000,
                count: 0
            },
            {
                title: 'Apple iPhone 13 128GB',
                description: 'It is a smartphone',
                imageLink: 'https://img.mvideo.ru/Big/small_pic/480/30059036bb.jpg',
                cost: 75000,
                count: 0
            },
            {
                title: 'Notebook Acer Nitro 5',
                description: 'It is a fridge',
                imageLink: 'https://img.mvideo.ru/Big/30059619bb.jpg',
                cost: 100000,
                count: 0
            },
            {
                title: 'Fridge Haier',
                description: 'It is a notebook',
                imageLink: 'https://img.mvideo.ru/Pdb/20037268b.jpg',
                cost: 200000,
                count: 0
            },
            {
                title: 'Headphones Huawey',
                description: 'It is a notebook',
                imageLink: ' https://img.mvideo.ru/Big/50168570bb.jpg',
                cost: 12500,
                count: 0
            },
            {
                title: 'Electric Oven Gorenje',
                description: 'It is the electric oven',
                imageLink: 'https://img.mvideo.ru/Big/20076802bb.jpg',
                cost: 25000,
                count: 0
            }
            ],
            cart: [],
            inputValue: '',
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            newProduct: {}
        }
    },
    methods: {
        addToCart(index) {
            if (this.products[index].count < 1) {
                this.products[index].count += 1;
                this.cart.push(this.products[index]);
            }
        },
        //Реализация добавления в корзину товара по имени, ссылки на изображение и стоимости
        // addToCart2() {
        //     for (let key in this.products) {
        //         if (this.products[key].title === this.inputValue && this.products[key].imageLink === this.inputValue2 && this.products[key].cost === this.inputValue3) {
        //             this.addToCart(key);
        //         }
        //     }
        // },
        addToShop() {
            if (this.inputValue !== '' && this.inputValue2 !== '' && this.inputValue3 !== '' && this.inputValue3 > 0) {
                this.newProduct.title = this.inputValue;
                this.newProduct.description = this.inputValue1;
                this.newProduct.imageLink = this.inputValue2;
                this.newProduct.cost = this.inputValue3;
                this.newProduct.count = 0;
                this.products.push(this.newProduct);
                alert('Success! Product added to shop.')
                // localStorage.setItem("myShop", JSON.stringify(this.products));
                this.inputValue = '';
                this.inputValue2 = '';
                this.inputValue1 = '';
                this.inputValue3 = '';
            }
        },
        deleteFromShop(index) {
            this.products.splice(index, 1);
        },
        addProduct(key) {
            this.cart[key].count += 1;
        },
        removeProduct(key) {
            if (this.cart[key].count <= 1) {
                this.cart.splice(key, 1);
            }
            else {
                this.cart[key].count -= 1;
            }
        },
        updateCount() {
            for (let index in this.products) {
                this.products[index].count = 0;
            }
        }
    }
}

Vue.createApp(App).mount('#app');