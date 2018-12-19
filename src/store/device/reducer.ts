import * as moment from 'moment';
import {AnyAction} from 'redux';
import {DeviceState} from 'src/store/device/DeviceState';

const defaultState: DeviceState = {
    ids: ['1', '2', '3', '4'],
    items: {
        '1': {
            id: '1',
            type: 'ios',
            name: 'iPhone SE',
            description: '',
            lastPoolTime: moment().subtract(10, 'minute').valueOf()
        },
        '2': {
            id: '2',
            type: 'windows',
            name: 'Home PC',
            description: '',
            lastPoolTime: moment().subtract(1, 'day').valueOf()
        },
        '3': {
            id: '3',
            type: 'windows',
            name: 'Work PC',
            description: '',
            lastPoolTime: moment().subtract(5, 'day').valueOf()
        },
        '4': {
            id: '4',
            type: 'android',
            name: 'LG Q6',
            description: '',
            lastPoolTime: moment().subtract(15, 'minute').valueOf()
        }
    }
};

export const devicesReducer = (state: DeviceState = defaultState, action: AnyAction): DeviceState => {
    switch (action.type) {

        // case GET_DEVICES.SUCCESS: {
        //     const items = action.payload || {};
        //     const ids = Object.keys(items);
        //     ids.forEach(id => {
        //         items[id].id = id
        //     });
        //     return {
        //         ...state,
        //         ids,
        //         items,
        //     };
        // }

        default:
            return state;
    }
};
