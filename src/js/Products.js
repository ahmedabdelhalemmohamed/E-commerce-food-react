const products = [
    {
        name: "Burger",
        price: 3,
        image: "./foods/fastFood/burger/burger1.jpg",
        category: "Fast Food"
    },
    {
        name: "Burger",
        price: 4,
        image: "./foods/fastFood/burger/burger2.jpg",
        category: "Fast Food"
    },
    {
        name: "Hot Dog",
        price: 4,
        image: "./foods/fastFood/hotDog/hotDog1.jpg",
        category: "Fast Food"
    },
    {
        name: "Hot Dog",
        price: 5,
        image: "./foods/fastFood/hotDog/hotDog2.jpg",
        category: "Fast Food"
    },
    {
        name: "Shawarma",
        price: 5,
        image: "./foods/fastFood/shawarma/shawarma1.jpg",
        category: "Fast Food"
    },
    {
        name: "Shawarma",
        price: 6,
        image: "./foods/fastFood/shawarma/shawarma2.jpg",
        category: "Fast Food", 
        discount: 50
    },
    {
        name: "Chicken Wrap",
        price: 6,
        image: "./foods/fastFood/chickenWrap/chickenWrap1.jpg",
        category: "Fast Food", 
        discount: 20
    },
    {
        name: "Chicken Wrap",
        price: 7,
        image: "./foods/fastFood/chickenWrap/chickenWrap2.jpg",
        category: "Fast Food", 
        discount: 20
    },
    {
        name: "Spaghetti",
        price: 3,
        image: "./foods/italian/spaghetti/spaghetti1.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Spaghetti",
        price: 4,
        image: "./foods/italian/spaghetti/spaghetti2.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Penne",
        price: 4,
        image: "./foods/italian/penne/penne1.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Penne",
        price: 5,
        image: "./foods/italian/penne/penne2.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Fettuccine",
        price: 5,
        image: "./foods/italian/fettuccine/fettuccine1.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Fettuccine",
        price: 6,
        image: "./foods/italian/fettuccine/fettuccine2.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Lasagna",
        price: 6,
        image: "./foods/italian/lasagna/lasagna1.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Lasagna",
        price: 7,
        image: "./foods/italian/lasagna/lasagna2.jpg",
        category: "Italian", 
        discount: 20   },
    {
        name: "Kebab",
        price: 7,
        image: "./foods/arabic/kebab/kebab1.jpg",
        category: "Arabic", 
        discount: 20  },
    {
        name: "Kebab",
        price: 8,
        image: "./foods/arabic/kebab/kebab2.jpg",
        category: "Arabic", 
        discount: 20  },
    {
        name: "Grilled Chicken",
        price: 8,
        image: "./foods/arabic/grilledChicken/grilledChicken1.jpg",
        category: "Arabic", 
        discount: 20  },
    {
        name: "Grilled Chicken",
        price: 9,
        image: "./foods/arabic/grilledChicken/grilledChicken2.jpg",
        category: "Arabic", 
        discount: 20  },
    {
        name: "Caesar Salad",
        price: 3,
        image: "./foods/healthy/caesarSalad/caesarSalad1.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Caesar Salad",
        price: 4,
        image: "./foods/healthy/caesarSalad/caesarSalad2.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Greek Salad",
        price: 4,
        image: "./foods/healthy/greekSalad/greekSalad1.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Greek Salad",
        price: 5,
        image: "./foods/healthy/greekSalad/greekSalad2.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Quinoa Salad",
        price: 5,
        image: "./foods/healthy/quinoaSalad/quinoaSalad1.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Quinoa Salad",
        price: 6,
        image: "./foods/healthy/quinoaSalad/quinoaSalad2.jpg",
        category: "Healthy", 
        discount: 20   },
    {
        name: "Chocolate Cake",
        price: 3,
        image: "./foods/sweets/chocolateCake/chocolateCake1.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Chocolate Cake",
        price: 4,
        image: "./foods/sweets/chocolateCake/chocolateCake2.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Cheesecake",
        price: 4,
        image: "./foods/sweets/cheesecake/cheesecake1.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Cheesecake",
        price: 5,
        image: "./foods/sweets/cheesecake/cheesecake2.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Brownies",
        price: 5,
        image: "./foods/sweets/brownies/brownies1.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Brownies",
        price: 6,
        image: "./foods/sweets/brownies/brownies2.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Donuts",
        price: 6,
        image: "./foods/sweets/donuts/donuts1.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Donuts",
        price: 7,
        image: "./foods/sweets/donuts/donuts2.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Cupcakes",
        price: 7,
        image: "./foods/sweets/cupcakes/cupcakes1.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Cupcakes",
        price: 8,
        image: "./foods/sweets/cupcakes/cupcakes2.jpg",
        category: "Sweets", 
        discount: 20  },
    {
        name: "Coffee",
        price: 3,
        image: "./foods/drinks/coffee/coffee1.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Coffee",
        price: 4,
        image: "./foods/drinks/coffee/coffee2.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Cappuccino",
        price: 4,
        image: "./foods/drinks/cappuccino/cappuccino1.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Cappuccino",
        price: 5,
        image: "./foods/drinks/cappuccino/cappuccino2.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Espresso",
        price: 5,
        image: "./foods/drinks/espresso/espresso1.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Espresso",
        price: 6,
        image: "./foods/drinks/espresso/espresso2.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Iced Coffee",
        price: 6,
        image: "./foods/drinks/icedCoffee/icedCoffee1.jpg",
        category: "Drinks", 
        discount: 20  },
    {
        name: "Iced Coffee",
        price: 7,
        image: "./foods/drinks/icedCoffee/icedCoffee2.jpg",
        category: "Drinks", 
        discount: 20  },
];

export default products;