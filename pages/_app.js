import React from 'react';
import '../styles.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

export default function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}