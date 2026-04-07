import { useState } from "react";

const UseInputField = (defaultValue) => {
    const [value,setValue] = useState(defaultValue);

    const handleFieldOnChange = e => {
        setValue(e.target.value);
    }
    return [value,handleFieldOnChange];
}
export default UseInputField;