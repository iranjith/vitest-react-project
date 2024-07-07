import { render, screen } from '@testing-library/react';
import ExpandableText from '../../src/components/ExpandableText';
import userEvent from '@testing-library/user-event';


describe('ExpandableText', () => {
    const limit=255;
    const longText= 'a'.repeat(1+limit);
    const truncatedText= longText.substring(0,limit) + '...';

    it('should render full text if the text length is less than 255', () => {
        const shortText= "short text"
        render(<ExpandableText text={shortText} />);
    })

    it('should truncate text if the text length is greater than 255', () => {
        render(<ExpandableText text={longText}/>);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button= screen.getByRole("button");
        expect(button).toHaveTextContent(/more/i);
    })

    it('should expand text when show more button is clicked', async () => {
        render(<ExpandableText text={longText} />);

        const button=screen.getByRole('button');
        const user= userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i)

    })

    it('should collapse text when show less button is clicked', async () => {
        render(<ExpandableText text={longText} />);

        const showMoreButton=screen.getByRole('button',{name:/more/i});
        const user= userEvent.setup();
        await user.click(showMoreButton);
        
        const showLessButton=screen.getByRole('button',{name:/less/i});
        await user.click(showLessButton);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i)

    })


})
