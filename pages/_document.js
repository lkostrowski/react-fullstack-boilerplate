/**
 * Default page rendered by NEXT.
 * I get's rendered on server side, so this code runs only in Node
 */

import React from 'react';
import Document_, { Head, Main, NextScript } from 'next/document';
import { renderStatic } from 'glamor/server';
import htmlEscape from 'htmlescape';

/**
 * Base styles injecting to html
 */
import '../styles/baseStyles';

/**
 * Injecting config from server to client global object
 */
const clientConfigMap = require('../config');

const clientConfig = clientConfigMap;

export default class Document extends Document_ {
    constructor(props) {
        super(props);
        const { __NEXT_DATA__, ids } = props;
        if (ids) {
            __NEXT_DATA__.ids = this.props.ids;
        }
    }

    static async getInitialProps({ renderPage }) {
        const page = renderPage();
        const styles = renderStatic(() => page.html);
        return { ...page, ...styles };
    }

    /* eslint-disable react/no-danger */
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta charSet="utf-8" />
                    <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
                    <title>Page</title>
                    {/*<link rel="shortcut icon" href="/static/favicon.ico" />*/}
                    <base href="/" />
                </Head>
                <body>
                    <Main />
                    <script
                        dangerouslySetInnerHTML={{ __html: `window.envConfig = ${htmlEscape(clientConfig)}` }}
                    />
                    <NextScript />
                </body>
            </html>
        );
    }

    /* eslint-enable react/no-danger */
}

