
import React, {useState, useEffect, useRef} from 'react';
import {Button, Pagination, Tabs} from 'flowbite-react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import {BsBuildingFillAdd} from 'react-icons/bs';
import {List, ModalDialog} from "@mui/joy";
import BuildingModalCard from "./BuildingModalCard.jsx";
import BuildingCardSkeleton from "./BuildingCardSkeleton.jsx";
import parseAddress from "../../utils/GlobalUtil/parseAddress.jsx";
import BuildingDetailPage from "./BuildingDetailPage.jsx";
import BuildingEditConfirmPage from "./BuildingEditConfirmPage.jsx";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";
import {FaExclamationCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import BuildingFilter from "../../components/CompAssests/BuildingFilter.jsx";
import GoogleSearchInput from "./GoogleSearchInput.jsx";

function AddBuildingModal() {

    const tabsRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    const [maxPage, setMaxPage] = useState(0)
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [buildingData, setBuildingData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [fullAddress, setFullAddress] = useState('690 Alameda St, Los Angeles, CA');
    const [error, setError] = useState(false)
    const [propertyType, setPropertyType] = useState('');
    const [salesKind, setSaleskind] = useState('');
    const [inputError, setInputError] = useState(false)

    const clearFilters = () => {
        if (propertyType.trim() !== "" || salesKind.trim() !== "") {
            setPropertyType('');
            setSaleskind('');
        }
    };

    useEffect(() => {
        setError(false)
        const fetchData = async () => {
            try {
                setLoading(true);
                const {error, city, state, zipcode} = parseAddress(fullAddress);

                setInputError(error)

                const url = `https://socalwarehouseapi.vercel.app/getcombineddata?zipcode=${zipcode}&city=${city}&state=${state}&page=${currentPage}&propertyType=${propertyType}&salekind=${salesKind}`;
                const response = await fetch(url);

                if (response.status === 500) {
                    setError(true)
                }


                const data = await response.json();

                if (data.propertyData.length > 0) {
                    setMaxPage(data.maxPage)
                    setBuildingData(data.propertyData);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        if (fullAddress) {
            fetchData();
        }
    }, [fullAddress, currentPage, propertyType, salesKind]);

    const onCloseModal = () => {
        setOpenModal(false);
        setCurrentPage(1);

    };


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setFullAddress(searchInput);
    };

    return (
        <>
            <Button className={"bg-logoBlue"} onClick={() => setOpenModal(true)}>
                <BsBuildingFillAdd size={20} className={'mr-2'}/>
                Add Building
            </Button>

            <Modal open={openModal} onClose={onCloseModal} popup="true">
                <ModalDialog layout={'fullscreen'}>
                    <ModalClose variant="solid"/>

                    <List
                        sx={{
                            overflowY: 'scroll',
                        }}
                    >
                        <Tabs aria-label="Default tabs" style="default" ref={tabsRef}
                              onActiveTabChange={(tab) => setActiveTab(tab)}>
                            <Tabs.Item active title="Find Buildings">
                                {
                                    error ?
                                        (
                                            <div className={"text-5xl text-center text-gray-300"}>
                                                Failed to Fetch
                                            </div>
                                        ) :
                                        (
                                            <div className={""}>
                                                <div className={"lg:flex justify-between items-center"}>
                                                    <form className="flex items-center " onSubmit={handleSearchSubmit}>
                                                        <GoogleSearchInput inputError={inputError} searchValue={searchInput || fullAddress} setFullAddress={setFullAddress} />

                                                        <button type="submit"
                                                                className="p-2.5 ms-2 text-sm font-medium text-white bg-[#146CA3] rounded-lg border border-blue-700 hover:bg-[#146CA3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                                 fill="none"
                                                                 viewBox="0 0 20 20">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                            </svg>
                                                            <span className="sr-only">Search</span>
                                                        </button>

                                                    </form>
                                                    <BuildingFilter clearFilter={clearFilters} setPropertyType={setPropertyType} setSaleskind={setSaleskind} />
                                                </div>

                                                {loading ? (
                                                    <ul className={"p-2 flex flex-wrap gap-5 mt-5"}>
                                                        {Array.from({length: 10}, (_, index) => (
                                                            <BuildingCardSkeleton key={index}/>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <>
                                                        <div className={"p-2 flex flex-wrap gap-5 mt-5 "}>
                                                            {buildingData.map(building => (
                                                                <BuildingModalCard
                                                                    addBuilding={() => tabsRef.current?.setActiveTab(1)}
                                                                    key={building.ID}
                                                                    building={building}/>
                                                            ))}
                                                        </div>

                                                        <div className={"lg:block hidden"}>
                                                            <div className={`flex flex-col items-center mt-3`}>
                                                                <Pagination currentPage={currentPage} totalPages={maxPage}
                                                                            onPageChange={onPageChange} showIcons/>
                                                            </div>
                                                        </div>

                                                        <div className={"lg:hidden block"}>
                                                            <div className={`flex flex-col items-center mt-3`}>
                                                                <Pagination layout="table" currentPage={currentPage}
                                                                            totalPages={maxPage} onPageChange={onPageChange} showIcons/>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )
                                }
                            </Tabs.Item>

                            <Tabs.Item disabled title="Page Detail">
                                <div className={""}>
                                    <BuildingDetailPage tabFowardAction={() => tabsRef.current?.setActiveTab(2)}/>
                                </div>
                            </Tabs.Item>

                            <Tabs.Item disabled title="Add Building">
                                <div className={""}>
                                    Tab 3
                                </div>

                                {/*<BuildingEditConfirmPage />*/}
                            </Tabs.Item>

                        </Tabs>
                    </List>


                </ModalDialog>
            </Modal>
        </>
    );
}

export default AddBuildingModal;
