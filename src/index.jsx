import { useState } from 'react';
import { create } from './Layout'
import { User } from './lib/User';
import { PersonalData } from './lib/PersonalData';
import { UserUI } from './UserUI';
import { LoginForm, LoginState } from './login';
export function Visitor() {
    return <>
        <h1>Welcome visitor!</h1>
        <p>
            To see your data please login or register!
        </p>
    </>;
}

/**
 * 
 * @param {User} user 
 */
function verify(user) {
    return user.equals(User.load())
}

export default function App() {
    const [authorized, setAuthorization] = useState(false);
    /**
     * @type {[loginState:import("login").LoginState]}
     */
    const [loginState, setLoginState] = useState(LoginState.START);
    return <>
        {authorized ?
            <UserUI p={PersonalData.load()} />
            : (<>
                <Visitor />
                <LoginForm
                    state={loginState}
                    verify={u => {

                        const v = verify(u)
                        if (!v) setLoginState(LoginState.AGAIN);
                        setAuthorization(v)
                    }
                    }
                />
            </>
            )
        }
    </>;
}

create(<App />);