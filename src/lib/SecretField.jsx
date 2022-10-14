import { TextField } from "@mui/material";

/**
 * @param {import("@mui/material").TextFieldProps} props
 */

export default function SecretField(props) {
    return <TextField
        variant="outlined"
        type="password"
        label="🔒 Passphrase"
        required
        {...props} />;
}