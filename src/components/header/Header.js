import react from 'react';

export const Header = () => {
    return (
        <header className="">
            <div className="container">
                <div className="row justify-content-center" style={{ justifyContent: 'center' }}>
                    <div className="col-2">Logo</div>
                    <div className="col-6">Nav</div>
                    <div className="col-2">More Buttons</div>
                </div>
            </div>
        </header>
    )
};