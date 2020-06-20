import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <React.Fragment>
            <p className="message">
                {`This magic Brain will detect faces in your pictures. Give it a try!`}
            </p>
            <div className="form-wrapper center">
                <form className="img-search center">
                    <input type="text" className="enter-url" placeholder="Enter URL" onChange={onInputChange} />
                    <input type="button" className="submit" onClick={onButtonSubmit} action='#' value='submit' />
                </form>
            </div>
            
        </React.Fragment>
    );
};

export default ImageLinkForm;