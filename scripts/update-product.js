require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const keyBy = require('lodash/keyBy');
const inquirer = require('inquirer');
const stripe = require('stripe')(process.env.GATSBY_STRIPE_KEY);

(async () => {
    try {
        const products = await stripe.products.list({})
        console.log(
            products.data.map(
                p =>
                    `${p.id} | ${p.name} | ${p.description.substring(0, 10)}${
                        p.description.length > 10 ? '...' : ''
                    }`
            )
        )
        const productMap = keyBy(products.data, 'id');

        const questions = [
            {
                type: 'input',
                name: 'productId',
                message: 'Product ID'
            },
            {
                type: 'input',
                name: 'productName',
                message: 'Product Name',
                default: (answers) => productMap[answers.productId].name
            },
            {
                type: 'input',
                name: 'productImageUrls',
                message: 'Image urls'
            }
        ]

        const {
            productId,
            productName,
            productImageUrls
        } = await inquirer.prompt(questions)

        const product = await stripe.products.update(productId, {
            name: productName,
            images: productImageUrls
                ? productImageUrls.split(',').map(i => i.trim())
                : []
        })

        console.log(`\n${product.name} was successfully updated`)
    } catch (e) {
        console.log(e)
    }
})()
