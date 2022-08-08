import { FETCH_WEATHER } from '../actions/index';

type Action = {
    type: string;
    payload: {
        data: number[]
    }
};

export default function(state = [], action: Action) {
    switch (action.type) {
    case FETCH_WEATHER:
        //return state.concat([ action.payload.data ]);
        return [action.payload.data, ...state];
    }

    return state;
}
