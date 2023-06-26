import NavBar from '@/ui/NavBar'
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'


interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>

            </Head>
            <nav>
                <NavBar />
            </nav>
            <main style={{ padding: "20px 50px" }}>
                {children}
            </main>
        </>
    )
}

export default Layout