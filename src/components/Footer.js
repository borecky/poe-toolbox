import React from 'react';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    return (
        <footer className="sticky-footer text-secondary">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <small className='text-secondary'>Last updated {formattedDate}</small>
                        <p></p>
                        <small className='text-secondary'>Check out the code on <a href="https://github.com/yourusername/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a></small>
                        <p>&copy; 2024 PanProkurator</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;