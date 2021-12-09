import React from "react";
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