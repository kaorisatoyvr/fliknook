import React from 'react';
import { useParams } from 'react-router-dom';

function Individual() {
    const { id } = useParams();
    return (
        <div>
             Individual {id} 
        </div>
    )
}
export default Individual;