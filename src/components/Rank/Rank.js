import React from 'react';
import './Rank.css';

const Rank = () => {
    return (
        <div className="rank-wrapper center">
            <div className="message">
                {`Andrei your current rank is...`}
            </div>
            <div className="show-rank">
                {`#5`}
            </div>
        </div>
    );
};

export default Rank;
