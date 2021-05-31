import { useState } from 'react';
import './components.css';
import OpportunityCard, { IData } from './OpportunityCard';
import Modal from './ModalComponent';

interface IAllOpportunities {
    allOpportunities: IData[],
    setGetAllOpportunities: React.Dispatch<React.SetStateAction<IData[]>>
}

export default function AllOpportunities(props: IAllOpportunities) {
    const [searchValue, setSearchValue] = useState("");

    const [isModalOpen, setModalState] = useState(false);
    const [selectedAllOpportunities, setSelectedAllOpportunities] = useState<IData| null>(null)

    const toggleModal = () => setModalState(!isModalOpen);


    return (
        <div>
            <input placeholder='Search here' onChange={e => { setSearchValue(e.target.value) }} />
            
        <div className='all_opportunities_container' >
            
            {props.allOpportunities.filter((item) => {
                if (searchValue === "") {
                    return item
                } else if (item.institution.toLowerCase().includes(searchValue.toLowerCase()) || item.programme_name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item
                }
            }).map((item) => {
                return (<div className='opportunity_card'>

                    <OpportunityCard data={item} key={item.id} />
                    <button
                        className='modal_button'
                        onClick={() => {
                            setSelectedAllOpportunities(item)
                            toggleModal()
                        }}
                    >Find out more</button>
                </div>)
            })
            }

            <Modal
                institution={selectedAllOpportunities ? selectedAllOpportunities.institution: "No snippet selected"}
                programme_name={selectedAllOpportunities ? selectedAllOpportunities.programme_name: "No snippet selected"} 
                description={selectedAllOpportunities ? selectedAllOpportunities.description : "No snippet selected"} 
                link={selectedAllOpportunities ? selectedAllOpportunities.url: "No snippet selected"}
                isOpen={isModalOpen}
                onClose={toggleModal}/>

        </div>
</div>

    )
}

   // const [showForPre16, setShowForPre16] = useState();
    // const [showForYear12, setShowYear12] = useState();


    // function handleButtons() {
    //     props.allOpportunities.filter((item) => {
    //         if (item.year_12 === true) {
    //             console.log(item)
    //             return item
    //         }})
    // };