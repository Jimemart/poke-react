import React from "react";
import { InputStyled } from "../../../UI";

export const Input = props => {
    const { onInputChange, id, placeholder } = props;
    return (
        <InputStyled
            type="number"
            onChange={onInputChange}
            value={id}
            placeholder={placeholder}
        />
    );
};
