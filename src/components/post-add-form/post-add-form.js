import React from "react";

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем думаешь сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-info"
                onClick={() => onAdd('Goooood')}>
                Добавить
            </button>
        </div>
    )
}

export default PostAddForm;