import React from 'react';
import Head from 'next/head';

interface GlobalHeadProps {
    title: string;
}

const GlobalHead: React.FunctionComponent<GlobalHeadProps> = ({title}: GlobalHeadProps) => (
    <Head>
        <title>{title}</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
        />
    </Head>
);

export default GlobalHead;
