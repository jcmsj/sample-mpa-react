import style from "./registration.module.css";
import { Required } from "./Required";

export function Submission() {
    return <>
        <Required
            name="tc"
            inputProps={{
                id: "tc",
                required:true
            }}
        >
            I agree with the Terms &amp; Conditions
        </Required>
        <Required
            name="offers"
            inputProps={{
                id: "offers",
            }}
        >
            Receive best offers and updates.
        </Required>
        <input
            type="submit"
            value="Register"
            id="submit"
            className={style.card + " " + style.submit}
        />
        <hr />
        <span className={style.alternative}>Already have an account?
            <a href="/">&nbsp;Login</a>
        </span>
    </>
}
