import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <dir>
            I'm some other page!
            <Link to="/">Go home</Link>
        </dir>
    );
}