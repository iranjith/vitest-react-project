import { render, screen } from '@testing-library/react' //shortcut to import: type 'itr'
import UserAccount from "../../src/components/UserAccount";

describe('UserAccount', () => {
    it('should render Username when Name is provided', () => {
        render(<UserAccount user={{ id: 0, name: "Ranjith" }} />);

        // screen.debug();
        const name= screen.getByText("Ranjith")
        expect(name).toBeInTheDocument();
    })

    it('should render Edit button when user is Admin', () => {
        render(<UserAccount user={{ id: 1, name: "Ranjith", isAdmin:true  }} />);

        const button= screen.getByRole("button");
         expect(button).toBeInTheDocument();
         expect(button).toHaveTextContent(/edit/i);

    })

    it('should not render Edit button when user is not Admin', () => {
        render(<UserAccount user={{ id: 1, name: "Ranjith", isAdmin:false  }} />);

        const button= screen.queryByRole("button");
         expect(button).not.toBeInTheDocument();
    })
    
})