import React from "react";

import {Button} from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color='success'>Все</Button>
           {/* <button type="button" className="btn btn-outline-info">Все</button> */}
           <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;


// btn btn-outline-secondary