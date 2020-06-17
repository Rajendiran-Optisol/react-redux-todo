import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                    <main>
                        {this.props.children}
                    </main>
                <Footer />
            </>
        );
    }
}

export default Layout;