import React from 'react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../Store/store';

/**
 * Root index component. It's not used because routes are pointing / to /marketplace view
 * with the same url
 */
class Homepage extends React.Component {
    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div />
        );
    }
}

export default withRedux(initStore, state => ({}))(Homepage);
