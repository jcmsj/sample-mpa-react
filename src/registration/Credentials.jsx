import { useState } from 'react';
import { SecretLacks, User } from "../lib/User"
import EmailField from "../lib/EmailField";
import SecretField from "../lib/SecretField";
import { Required } from './Required';
import { useInputDefaults } from '../lib/useInput';
/**
 * @typedef {{user:User}} UserProps;
 */

/**
 * @param {UserProps & {clone:User}} param0
 */
export default function Credentials({ user, clone }) {
    const [invalidEmail, onEmail] = useInputDefaults(user, "email");
    const [lacks, setLacking] = useState(User.isUnsecure(""))
    const [matches, setMatches] = useState(false)
    return <>
        <h2>Credentials</h2>
        <EmailField
            error={invalidEmail}
            onInput={onEmail}
        />
        <SecretField
            error={lacks.length > 0}
            name="new-password"
            autoComplete="new-password"
            id="new-password"
            onChange={e => {
                setLacking(user.setIfSecure(e.target.value))
                setMatches(e.target.value == clone.email)
            }}
        />
        <SecretField 
            label="🔒 Confirm Passphrase"
            error={!matches}
            onChange={e => {
                setMatches(e.target.value == user.secret)
                clone.secret = e.target.value 
            }}
            id="confirm-password"
        />
        <PhraseList lacks={lacks}/>
    </>
}

/**
 * 
 * @param {{lacks:SecretLacks}} param0 
 */
function PhraseList({lacks}) {
    return <span className="clex" style={{rowGap: "2vh"}}>
    <h3>Passphrase requirements:</h3>
    <Required
        inputProps={{disabled:true}}
        checked={!lacks.includes(SecretLacks.LENGTH)}
    >
        Is at least {User.minLength} characters long.
    </Required>
    <Required
        inputProps={{disabled:true}}
        checked={!lacks.includes(SecretLacks.UPPER)}
    >
        Has an uppercase letter.
    </Required>
    <Required
        inputProps={{disabled:true}}
        checked={!lacks.includes(SecretLacks.DIGIT)}
    >
        Contains a digit.
    </Required>
</span>
}