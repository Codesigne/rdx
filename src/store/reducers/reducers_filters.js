let filters = {
    fule: {
        "petrol": {
            name: "petrol",
            checked: 1
        },
        "diesel": {
            name: "diesel",
            checked: 0
        },
        "cng": {
            name: "cng",
            checked: 1
        },
    },
    transmission: {
        "manual": {
            name: "manual",
            checked: 1
        },
        "automatic": {
            name: "automatic",
            checked: 0
        },
    },
}

function reducers_filters(store = filters, action) {
    return store
}
export default reducers_filters;