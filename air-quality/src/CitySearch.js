import React, { useState } from 'react'

const CitySearch = ({ getAirQuality }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const formattedCity = inputValue.replace(/ /g, '-');
        getAirQuality(formattedCity);
    };
    return (
        <form onSubmit={handleSearch} className="mb-4 d-flex">
            <input
                type="text"
                placeholder="Enter city..."
                onChange={handleInputChange}
                className="form-control"
            />
            <button type="submit" className="btn btn-primary h-100">Search</button>
        </form>
    )
}

export default CitySearch