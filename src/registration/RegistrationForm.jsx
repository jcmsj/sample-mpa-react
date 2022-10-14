import { create } from '../Layout';
import { User } from "../lib/User";
import { PersonalData } from '../lib/PersonalData';
import Credentials from './Credentials';
import { PersonalDataUI, WorkData } from './PersonalData';
import { Submission } from './Submission';
import Card from "../lib/Card"

export default function Registration() {
    const user = new User();
    const data = new PersonalData();
    const clone = new User();
    return <>
        <form
            action='/'
            onSubmit={e => {
                if (user.equals(new User(user.email,clone.secret))) {
                    user.cache();
                    data.cache();
                } else {
                    e.preventDefault()
                }
            }}
        >
            <Card>
                <Credentials user={user} clone={clone} />
            </Card>
            <Card>
                <PersonalDataUI pd={data} />
            </Card>
            <Card>
                <WorkData pd={data} />
            </Card>
            <Card>
                <Submission />
            </Card>
        </form>
    </>
}

create(<Registration />);