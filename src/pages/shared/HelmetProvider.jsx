import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetProvider = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <title>Bistro boss || {pageTitle}</title>
            </Helmet>
        </>
    );
};

export default HelmetProvider;