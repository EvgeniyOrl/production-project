import { Button } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';
import { ButtonTheme } from './Button';

describe('Button', () => {
    test('with only first param', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
    });
});
