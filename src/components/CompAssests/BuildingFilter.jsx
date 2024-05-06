
import React, { useState } from 'react';
import { FilterX } from 'lucide-react';

function BuildingFilter({ setPropertyType, setSaleskind, setPriceRange, clearFilter }) {

    const buildingTypes = {
        'Commercial': ['commercial', 'office', 'industrial', 'warehouses', 'manufacturing', 'trucks-stops', 'other-industrial'],
        'Land': ['land', 'residental-land', 'commercial-land', 'industrial-land'],
        'Farms': ['farms'],
    }

    const saleTypes = {
        'Sale': ['forSale', 'forlease'],
        'Auctions': ['auctions'],
    }

    const priceRanges = [
        { label: '$0 - $500,000', min: 0, max: 500000 },
        { label: '$500,001 - $1,000,000', min: 500001, max: 1000000 },
        { label: '$1,000,001 - $2,000,000', min: 1000001, max: 2000000 },
        { label: '$2,000,001 - $5,000,000', min: 2000001, max: 5000000 },
        { label: '$5,000,001+', min: 5000001, max: Infinity },
    ];

    const handleBuildingTypeChange = (event) => {
        const selectedValue = event.target.value;
        setPropertyType(selectedValue);
    };

    const handleSaleTypeChange = (event) => {
        const selectedValue = event.target.value;
        setSaleskind(selectedValue);
    };

    const handlePriceRangeChange = (event) => {
        const selectedValue = event.target.value;
        const selectedPriceRange = priceRanges.find(range => range.label === selectedValue);
        setPriceRange(selectedPriceRange);
    };

    return (
        <div className={"lg:mr-5 lg:mt-0 mt-5 lg:flex gap-2 lg:space-y-0 space-y-2 items-center"}>
            <button onClick={clearFilter} className={"lg:mt-5 flex gap-2 bg-red-200 hover:bg-red-300 text-red-800 font-semibold py-2 px-4 rounded shadow border border-gray-400"}>
                <FilterX /> Clear Filter
            </button>
            <div>
                <h3 className={"font-semibold"}>Building Type:</h3>
                <select id="buildingTypeDropdown" className={'rounded lg:w-fit w-full'} onChange={handleBuildingTypeChange}>
                    <option value="" disabled selected>Select Building Type</option>
                    {Object.keys(buildingTypes).map((category, index) => (
                        <optgroup label={category} key={`buildingType-${index}`}>
                            {buildingTypes[category].map((buildingType, subIndex) => (
                                <option key={`buildingType-${index}-${subIndex}`} value={buildingType}>{buildingType}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
            <div>
                <h3 className={"font-semibold"}>Sale Type:</h3>
                <select id="saleTypeDropdown" className={'rounded lg:w-fit w-full'} onChange={handleSaleTypeChange}>
                    <option value="" disabled selected>Select Sale Type</option>
                    {Object.keys(saleTypes).map((category, index) => (
                        <optgroup label={category} key={`saleType-${index}`}>
                            {saleTypes[category].map((saleType, subIndex) => (
                                <option key={`saleType-${index}-${subIndex}`} value={saleType}>{saleType}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
            <div>
                <h3 className={"font-semibold"}>Price Range:</h3>
                <select id="priceRangeDropdown" className={'rounded lg:w-fit w-full'} onChange={handlePriceRangeChange}>
                    <option value="" disabled selected>Select Price Range</option>
                    {priceRanges.map((priceRange, index) => (
                        <option key={`priceRange-${index}`} value={priceRange.label}>{priceRange.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default BuildingFilter;
