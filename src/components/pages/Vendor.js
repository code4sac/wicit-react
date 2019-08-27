import React from 'react';

import Header from '../layout/Header';
import LocationBar from '../LocationBar';
import logo from '../../assets/logo.png';

import WrappedContainer from '../GoogleMap';
import GoogleMap from '../GoogleMap';

export default class Vendor extends React.Component {
    render() {
        return (
            <>
                <Header logo={logo} alt="WICit logo" heading="WICit" />
                <main>
                    <LocationBar />
                    <WrappedContainer />
                </main>
            </>
        );
    }
}
