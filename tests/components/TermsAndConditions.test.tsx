import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => { 
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions />)

        const heading= screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Terms & Conditions");

        const checkBox= screen.getByRole('checkbox');
        expect(checkBox).toBeInTheDocument();
        expect(checkBox).not.toBeChecked();

        const button= screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();

    })

    it('should enable button when checkbox checked', async () => {
        render(<TermsAndConditions />);

        const checkbox=screen.getByRole("checkbox");
        const user=userEvent.setup();
        await user.click(checkbox);

        expect(screen.getByRole('button')).toBeEnabled();
    })
 })