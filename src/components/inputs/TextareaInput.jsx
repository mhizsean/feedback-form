// TextArea.js
import React, { useState } from 'react';

const TextArea = ({ label, name, onChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
        onChange(name, val);
    };

    return (
        <div>
            <label>{label}</label>
            <textarea value={value} onChange={handleChange} rows="4" />
        </div>
    );
};

export default TextArea;
