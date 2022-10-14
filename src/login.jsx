import { Button, Card } from "@mui/material";
import { User } from "./lib/User";
import styles from "./login.module.css"
import cardStyles from "./lib/card.module.css"
import SecretField from "./lib/SecretField";
import EmailField from "./lib/EmailField";
import { useInputDefaults } from "./lib/useInput";

/**
 * @readonly
 * @enum {string}
 */
export const LoginState = {
    START: "START",
    AGAIN: "AGAIN"
}

/**
 * @param {{verify:(u:User) => void>, state:LoginState}} param0 
 */
export function LoginForm({ verify, state }) {
    const user = new User(); //Not stateful
    const [lacksEmail, onEmail] = useInputDefaults(user, "email")
    return <form
        onSubmit={e => {
            e.preventDefault()
            verify(user)
        }}
    >
        <Card
            className={"login clex " + cardStyles.card}
        >
            <label style={{color:"red"}}>
            {state == "AGAIN" ? "Incorrect username or password!":""}
            </label>
            <EmailField
                id="email"
                error={lacksEmail}
                onChange={onEmail}
            />
            <SecretField
                onChange={e =>
                    user.secret = e.target.value
                }
            />
            <Button
                className={styles.btn}
                variant="contained"
                type="submit"
            >Login
            </Button>
        </Card>
    </form>
}