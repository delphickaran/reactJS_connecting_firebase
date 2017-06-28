export const select = (subject) => {
    console.log("clicked",subject.name);
    return {
        type: "USER_SELECTED",
        payload: subject
    }
};