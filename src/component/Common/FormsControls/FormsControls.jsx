import React from "react";
import { Field } from "redux-form";
import stile from './FormsControls.module.css';

export const Element = (Element) => ({ input, meta, ...props }) => {

    let isErrors = meta.touched && meta.error;

    return (
        <div className={stile.formControl + ' ' + (isErrors ? stile.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            <div>
                {isErrors && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

// export const createFild = (placeholder, name, Input, validators, props = {}, text = '') => {
//     <div>
//         <Field placeholder={placeholder} name={name} component={Input}
//             validate={validators}
//             {...props}
//         />{text}
//     </div>
// }