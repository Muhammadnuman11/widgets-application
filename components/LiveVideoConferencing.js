// components/LiveVideoConferencing.js
import React from 'react';

const LiveVideoConferencing = ({ embedCode }) => {
    return (
        <div className="w-96 h-full border rounded-lg shadow-sm">
            <div className='w-full h-full' dangerouslySetInnerHTML={{__html: embedCode}} />
        </div>
    );
};

export default LiveVideoConferencing;
