// store, next, action
export const loggerMiddleware = (store) => {
    return function (next) {
        return function (action) {
            //Log actions
            console.log("[LOG]: " + action.type + new Date().toString()); 
            //Call the next middleWare in pipeline
            next(action);
            // log the modified state of app.
            console.log(store.getState());

        }
    }
}