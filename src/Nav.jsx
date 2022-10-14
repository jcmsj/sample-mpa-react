import styles from "./nav.module.css" 

export default function Nav() {
    return <nav className={styles.nav}>
        <a href="./index.html">
            <Ico icon="🏠">Home</Ico>
        </a>
        <a href="./about.html">
            <Ico icon="&#8505;"> About</Ico>
        </a>
        <a href="./register.html">
            <Ico icon="👤"> Registration</Ico>
        </a>
    </nav>;
}

export function Ico({icon,children}) {
    return <>
        <span className={styles.ico}>{icon}</span><br/>
        {children}
    </>
}