import React from 'react';
import './PageHeader.css'; // Optional: Import CSS if needed

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <h1 className="display-4 text-white animated slideInDown mb-4">{title}</h1>
                <nav aria-label="breadcrumb" className="animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">{subtitle}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;


