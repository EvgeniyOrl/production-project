import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('init counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
