import React from 'react';

import Header from '../layout/Header';
import logo from '../../assets/logo.png';

import WrappedContainer from '../GoogleMap';

export default class Vendor extends React.Component {
    render() {
        return (
            <>
                <Header logo={logo} alt="WICit logo" heading="WICit" />
                <main>
                    <WrappedContainer />
                </main>
            </>
        );
    }
}