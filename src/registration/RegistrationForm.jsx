import { useState } from 'react';
import { create } from '../Layout';
import { User } from "../lib/User";
import { PersonalData } from '../lib/PersonalData';
import Credentials from './Credentials';
import { PersonalDataUI, WorkData } from './PersonalData';
import { Submission } from './Submission';
import Card from "../lib/Card"

export default function Registration() {
    const [user, _] = useState(new User());
    const [data, __] = useState(new PersonalData());
    return <>
        <form
        action='/'
        onSubmit={() => {
            user.cache();
            data.cache();
        }}
        >
            <Card>
                <Credentials user={user} />
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