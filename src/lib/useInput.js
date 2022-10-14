import { useState } from 'react';

/**
 * @param {(e: React.FormEvent)=>any?} callback
 * @returns {[boolean, (e:React.FormEvent)=>void, React.Dispatch<React.SetStateAction<boolean>>]}
 * @desc A hook that provides a boolean state. The return value of the callback when nullish flips the value. It is meant to be used for the error/onInput attributes in the MUI form components or similar ones.
 */
 export function useInput(callback, initialValue=true) {
    const [lacks, setLacks] = useState(initialValue)
    return [
        lacks, 
        e => setLacks(
            (callback(e)  ?? null) == null
        ), 
        setLacks
    ];
}

/**
 * @desc Simplifies the usage of useInput when the native input.checkValidity is needed.
 * @param {object} o
 * @param {string} key
 */
 export function useInputDefaults(o, key) {
    return useInput(e => o[key] = e.target.checkValidity() ? e.target.value : null
    );
}

export default useInput;