
export const updateObjectInArray = (items, itemsId, objectPropName, newObjectProps) =>{

    return items.map((u) => {
        if (u[itemsId] === objectPropName) {
            return { ...u, ...newObjectProps }
        }
        return u;
    })
}