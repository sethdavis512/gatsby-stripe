import React from 'react';
import styled from 'styled-components';

const StyleProductDetailGrid = styled.div`
    display: grid;
`

const ProductDetailGrid = ({ children }) => {
    return <StyleProductDetailGrid>{children}</StyleProductDetailGrid>;
}

export default ProductDetailGrid;
