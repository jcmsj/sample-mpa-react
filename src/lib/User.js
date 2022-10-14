import fromJSON from "./fromJSON";

/**
 * @readonly
 * @enum {number}
 */
export const SecretLacks = {
    LENGTH: 0,
    DIGIT: 1,
    CHAR: 2,
    UPPER: 3,
}

/**
 * @desc Holds authorization info of a user
 */
export class User {
    /** @type {string} */
    email;
    /** @type {string} */
    /* username; */
    /** @type {string} */
    secret;
    constructor(email= "", secret = "") {
        this.email = email;
        this.secret = secret;
    }

    /**
     * 
     * @param {User} other 
     */
    equals(other) {
        return this.email == other.email && this.secret == other.secret;
    }

    static minLength = 8;

    /**
     * @type {[SecretLacks, RegExp]}
     */
    static patterns = {
        1: /\d/,
        2: /\w/,
        3: /[A-Z]/,
    }
    /**
     * @param {string} secret 
     * @returns {SecretLacks[]}
     */
    static isUnsecure(secret) {
        return [
            ...(secret.length < this.minLength ? [SecretLacks.LENGTH] : []),
            ...Object.entries(this.patterns)
                .reduce((arr, [v, pattern]) =>
                    pattern.test(secret) ? arr : [parseInt(v), ...arr],
                    [])
        ];
    }
    /**
     * 
     * @param {string} secret 
     */
    setIfSecure(secret) {
        const lacks = User.isUnsecure(secret);
        if (lacks.length == 0) {
            this.secret = secret;
        }

        return lacks;
    }

    static KEY = "user"
    cache() {
        localStorage.setItem(User.KEY,
            JSON.stringify(this)
        )
    }

    /**
     * 
     * @param {string} text 
     * @returns {User}
     */
    static fromJSON(text) {
        return fromJSON(text, new this())
    }

    static load() {
        return this.fromJSON(
            localStorage.getItem(this.KEY)
        );
    }
}