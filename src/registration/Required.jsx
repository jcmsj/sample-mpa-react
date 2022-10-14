/**
 * 
 * @param {{children:JSX.Element, 
 *  checked:boolean, 
 *  inputProps:import('react').InputHTMLAttributes, 
 *  labelProps:import('react').React.LabelHTMLAttributes<HTMLLabelElement,
 *  name:string
 * }} param0 
 * @returns 
 */
export function Required({ checked, name = "", children, inputProps, labelProps }) {
    return <span style={{ display: "flex", columnGap: "2vw" }}>
        <input type="checkbox"
            name={name}
            checked={checked}
            {...inputProps}
        />
        <label
            htmlFor={name}
            {...labelProps}
        >
            {children}
        </label>
    </span>;
}