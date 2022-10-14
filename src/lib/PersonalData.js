import fromJSON from "./fromJSON";
/**
 * @readonly
 * @enum {string}
 */
 export const Sex = {
    MALE: "male",
    FEMALE: "female"
}

/**
 * @typedef {{firstName:string, lastName:string, phone:string, gender, Gender, country:string, birthDate:Date, address:string, company:string, companyAddress:string}} PersonalDataProps
 */
/**
 * @desc Groups common info about a person.
 */

export class PersonalData {
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {string} */
    phone;
    /** @type {Sex} */
    sex;
    /** @type {string} */
    country;
    /** @type {Date} */
    birthDate;
    /** @type {string} */
    address;
    /** @type {string} */
    company;
    /** @type {string} */
    companyAddress;

    static KEY = "data";
    cache() {
        localStorage.setItem(PersonalData.KEY, JSON.stringify(this));
    }

    static load() {
        return this.fromJSON(
            localStorage.getItem(PersonalData.KEY)
        );
    }
    /**
     *
     * @param {string} text
     * @returns {PersonalData}
     */
    static fromJSON(text) {
        return fromJSON(text, new this());
    }
}
