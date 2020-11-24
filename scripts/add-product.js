require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const inquirer = require('inquirer');
const stripe = require('stripe')(process.env.GATSBY_STRIPE_KEY);

(async () => {
    try {
        const questions = [
            {
                type: 'input',
                name: 'productName',
                message: 'Name'
            },
            {
                type: 'input',
                name: 'productDescription',
                message: 'Description'
            },
            {
                type: 'input',
                name: 'productImageUrls',
                message: 'Image urls'
            },
            {
                type: 'input',
                name: 'productPrice',
                message: 'Price'
            }
        ]

        const {
            productImageUrls,
            productPrice,
            productDescription,
            productName
        } = await inquirer.prompt(questions)

        const product = await stripe.products.create({
            description: productDescription,
            name: productName,
            images: productImageUrls
                ? productImageUrls.split(',').map(i => i.trim())
                : []
        })

        const price = await stripe.prices.create({
            unit_amount: Number(productPrice) * 100,
            currency: 'usd',
            product: product.id
        })

        console.log(`\n${product.name} was successfully posted for ${price.unit_amount}`)

    } catch (e) {
        console.log(e)
    }
})()
