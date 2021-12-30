import React, { useState } from "react";
import styles from './Paginator.module.css'

const Paginator = ({ portinSize = 10, ...props }) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portinSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portinSize + 1;
    let rightPortionPageNumber = portionNumber * portinSize;

    

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={`${props.currentPage === p ?
                        styles.selectedPage : styles.pageNumber}`}
                        key={p}
                        onClick={(event) => {props.onSetCurrentPage(p)}}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;