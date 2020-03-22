var bizUI = new Vue({
  el: '#bizUI',
  data: {
    isActive: 'sales',
    catalogActive: 'APPLIANCES',
    money: 5000,
    products: 5000,
    taxes: 5000,
    earnings: 5000,
    sales: 5000,
    blackoutShow: false,
    sellBizShow: false,
    changeProductPriceShow: false,
    oldPrice: null,
    newPrice: '',
    salesList: [
      {
          date: '11.03.2020',
          time: '18:05',
          fullName: 'Oliver Black',
          amount: 32,
          earn: 250,
          data: {
              name: "Бутерброд",
              type: "PRODUCTS"
          }
      },
      {
        date: '12.03.2020',
        time: '12:25',
        fullName: 'Swallow Slut',
        amount: 1111,
        earn: 20000,
        data: {
          name: "Противозачаточные",
          type: "PRODUCTS"
        }
      }
    ],
    productList: [
      {
        price: 250,
        data: {
          name: "Бутерброд",
          type: "PRODUCTS"
        }
      }
    ],
    popularProducts: [
      {
          amount: 5,
          price: 5000,
          data: {
              name: "Пицца"
          }
      },
      {
        amount: 3,
        price: 2000,
        data: {
            name: "Бутер"
        }
      },
      {
        amount: 4,
        price: 15000,
        data: {
            name: "Колес"
        }
      },
      {
        amount: 10,
        price: 4444,
        data: {
            name: "ЧайОК"
        }
      },
      {
        amount: 2,
        price: 100000,
        data: {
            name: "Руки-базуки"
        }
      },
      {
        amount: 1,
        price: 1,
        data: {
            name: "Песня Моргенштерна"
        }
      }
    ]
  },
  methods: {
    closeOnlyOverBlackout(e) {
      if (document.querySelector('.blackout') === e.target) {
        this.blackoutShow = false;
        this.sellBizShow = false;
        this.changeProductPriceShow = false;
      }
    }
  }
})