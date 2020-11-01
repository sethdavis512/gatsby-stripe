import React from 'react';
import styled from 'styled-components';

const StyleProductDetailGrid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    padding: 1rem 2rem;
    margin: 0 auto;
    justify-content: center;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 1rem 4rem;
        max-width: calc(768px - 2rem);
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(4, 1fr);
        padding: 1rem 4rem;
        max-width: calc(960px - 2rem);
    }
`

const ProductDetailGrid = ({ children }) => {
    return <StyleProductDetailGrid>{children}</StyleProductDetailGrid>;
}

export default ProductDetailGrid;
