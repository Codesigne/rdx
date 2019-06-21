export function setFilters(event) {
    console.log(event);
    
    return{
        type: 'SET_FILTERS',
        payload:{
            event
        }
    }
}