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
 * @param {UserProps} param0
 */
export default function Credentials({ user }) {
    const [invalidEmail, onEmail] = useInputDefaults(user, "email");
    const [matches, setMatches] = useState(false);
    const [lacks, setLacking] = useState(User.isUnsecure(""))
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
            onInput={e => setLacking(
                user.setIfSecure(e.target.value)
            )}
        />
        <SecretField 
            label="🔒 Confirm Passphrase"
            error={!matches}
            onInput={e => setMatches(e.target.value == user.secret)}
            id="confirm-password"
        />
        <span className="clex" style={{rowGap: "2vh"}}>
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
    </>
}