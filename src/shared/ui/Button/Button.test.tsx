import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('with only first param', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
    });
});
