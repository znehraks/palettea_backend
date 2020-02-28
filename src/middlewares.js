export const isAuthenticated = (request) => {
    if(!request.user){
        throw Error("You need to login to perform this action");
    }
    return;
};

export const isAdm = (request) => {
    if(!request.user.isAdmin){
        throw Error("You are not admin");
    }
    return;
}