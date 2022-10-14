import { Card } from "@mui/material";
import { PersonalData } from "./lib/PersonalData";

/**
 * @param {{label:string,data:string}} param0 
 */
export function Part({ label, data }) {
    return <p>
        <b>{label}: </b>
        <br />
        {data}
    </p>
}

const style = {
    padding: "2vh 2vw",
    margin: "2vh 2vw"
}
/**
 * @param {{p:PersonalData}} props 
 */
export function UserUI({ p }) {
    return <>
        <Card
            style={style}
        >
            <h2>Personal Information</h2>
            <Part
                label="Name"
                data={p.lastName + ", " + p.firstName} />
            <Part
                label="Birthdate"
                data={p.birthDate}
            />
            <Part
                label="Sex"
                data={p.sex}
            />
            <Part
                label="Address"
                data={p.address}
            />
            <Part
                label="Country"
                data={p.country}
            />
        </Card>
        <Card
            style={style}
        >

            <h2>Work Information</h2>
            <Part
                label="Company name"
                data={p.company}
            />
            <Part
                label="Company address"
                data={p.companyAddress}
            />
        </Card>
    </>;
}