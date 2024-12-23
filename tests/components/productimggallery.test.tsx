import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should render null if image list is empty', () => {
        
        const {container}= render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement();
    })

    it('should render images list if images is provided', () => {
        const imageUrls=['url1','url2'];
        
        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images=screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        imageUrls.forEach((url,index)=>{
            expect(images[index]).toHaveAttribute('src',url);
        })
    })
})