export default(state = [],action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
    /*
    dont
    return document.querySelector('input')
    return axios.get('./posts')

    do

    return (state+action)

  */
};