import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => { 
    const renderComponent=()=>{
        render(<TermsAndConditions />)

        return{
            heading: screen.getByRole("heading"),
            checkBox:screen.getByRole('checkbox'),
            button:screen.getByRole("button")
        }
    }

    it('should render with correct text and initial state', () => {
        const {heading, checkBox, button}= renderComponent()

        render(<TermsAndConditions />)

        expect(heading).toHaveTextContent("Terms & Conditions");
        expect(checkBox).not.toBeChecked();
        expect(button).toBeDisabled();

    })

    it('should enable button when checkbox checked', async () => {
        const {checkBox, button}= renderComponent()

        render(<TermsAndConditions />);

        const user=userEvent.setup();
        await user.click(checkBox);

        expect(button).toBeEnabled();
    })
 })