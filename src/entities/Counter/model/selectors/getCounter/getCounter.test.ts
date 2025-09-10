import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 1 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 1 });
    });
});
