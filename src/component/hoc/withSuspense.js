import React from "react"
import Preloader from "../Common/Preloader/Preloader";

export const withSuspense = (Content) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
                <Content {...props} />
        </React.Suspense>
    }
}