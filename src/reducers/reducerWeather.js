import {FETCH_WEATHER} from "../actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data,...state]
    }
    return state;
}
