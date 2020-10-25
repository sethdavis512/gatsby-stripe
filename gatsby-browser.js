/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require('react')

const { CartProvider } = require('./src/contexts/cart/CartProvider')

exports.wrapRootElement = ({ element }) => {
    return (
        <CartProvider>
            {element}
        </CartProvider>
    )
}
