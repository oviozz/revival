
import React, { useState } from 'react';

function BuildingFilter({ setPropertyType, setSaleskind, clearFilter }) {

    const buildingTypes = {
        'Commercial': ['commercial', 'office', 'industrial', 'warehouses', 'manufacturing', 'trucks-stops', 'other-industrial'],
        'Land': ['land', 'residental-land', 'commercial-land', 'industrial-land'],
        'Farms': ['farms'],
    }

    const saleTypes = {
        'Sale': ['forSale', 'forlease'],
        'Auctions': ['auctions'],
    }

    const handleBuildingTypeChange = (event) => {
        const selectedValue = event.target.value;
        setPropertyType(selectedValue);
    };

    const handleSaleTypeChange = (event) => {
        const selectedValue = event.target.value;
        setSaleskind(selectedValue);
    };

    return (
        <div className={"lg:mr-5 lg:mt-0 mt-5 lg:flex gap-2 lg:space-y-0 space-y-2 items-center"}>
            <div>
                <h3 className={"font-semibold"}>Building Type:</h3>
                <select className={'rounded lg:w-fit w-full'} onChange={handleBuildingTypeChange}>
                    <option value="" disabled selected>Select Building Type</option>
                    {Object.keys(buildingTypes).map((category) => (
                        <optgroup label={category} key={category}>
                            {buildingTypes[category].map((buildingType) => (
                                <option key={buildingType} value={buildingType}>{buildingType}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
            <div>
                <h3 className={"font-semibold"}>Sale Type:</h3>
                <select className={'rounded lg:w-fit w-full'} onChange={handleSaleTypeChange}>
                    <option value="" disabled selected>Select Sale Type</option>
                    {Object.keys(saleTypes).map((category) => (
                        <optgroup label={category} key={category}>
                            {saleTypes[category].map((saleType) => (
                                <option key={saleType} value={saleType}>{saleType}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default BuildingFilter;
