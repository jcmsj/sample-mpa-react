import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./Nav"
import "./layout.css";

export function Layout(props) {
    return <>
        <React.StrictMode>
            <main>
                {props.children}
            </main>
            <Nav />
        </React.StrictMode>
    </>
}

/**
 * @param {JSX.Element} page 
 */
export function create(page) {
    root.render(
        <Layout>
            {page}
        </Layout>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));