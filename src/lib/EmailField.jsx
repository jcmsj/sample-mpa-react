import { TextField } from "@mui/material";

/**
 * @param {import("@mui/material").TextFieldProps} props
 */

export default function EmailField(props) {
    return <TextField
        variant="outlined"
        label="✉ Email"
        name="email"
        type="email"
        required
        {...props} />;
}