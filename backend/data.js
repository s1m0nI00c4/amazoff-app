import bcrypt from 'bcryptjs';

export const data = {
    users: [
        {
            name: "Simon",
            email: "admin@email.com",
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true
        },
        {
            name: "John",
            email: "user@email.com",
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false
        }

    ],
    products: [
        {
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'
        },
        {
            name: 'Puma fit shirt',
            category: 'Shirts',
            image: '/images/product-2.jpg',
            price: 100,
            countInStock: 1,
            brand: 'Puma',
            rating: 4,
            numReviews: 1,
            description: 'High quality product'
        },
        {
            name: 'Levis slim shirt',
            category: 'Shirts',
            image: '/images/product-3.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Levis',
            rating: 3.5,
            numReviews: 20,
            description: 'High quality product'
        },
        {
            name: 'Nike slim pants',
            category: 'Pants',
            image: '/images/product-4.jpg',
            price: 150,
            countInStock: 10,
            brand: 'Nike',
            rating: 4,
            numReviews: 90,
            description: 'High quality product'
        },
        {
            name: 'Puma slim pants',
            category: 'Pants',
            image: '/images/product-5.jpg',
            price: 90,
            countInStock: 20,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 12,
            description: 'High quality product'
        },
        {
            name: 'Levis fit pants',
            category: 'Pants',
            image: '/images/product-6.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Levis',
            rating: 5,
            numReviews: 10,
            description: 'High quality product'
        },
    ]
}