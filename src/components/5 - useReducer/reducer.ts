
type CounterAction = {
    type: 'inc' | 'dec', 
    payload: number
}

export const initState = {
    count: 0
}

export const reducer = (state = initState, action: CounterAction) => {
    switch (action.type) {
        case 'inc':
            return {
                ...state,
                count: state.count + action.payload
            }

        case 'dec':
            return {
                ...state,
                count: state.count - action.payload
            }
    
        default:
            return state
    }
}