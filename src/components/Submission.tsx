import { useState } from 'react';
import './components.css';

export default function SubmissionForm({ fetchAllOpportunities }: { fetchAllOpportunities: () => Promise<void> }) {
    const [institutionInput, setInstitutionInput] = useState("");
    const [programmeNameInput, setProgrammeNameInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [forPre16, setForPre16] = useState(false);
    const [forYear12, setForYear12] = useState(false);
    const [forYear13, setForYear13] = useState(false);
    const [forUniversity, setForUniversity] = useState(false);
    const [forGraduates, setForGraduates] = useState(false);


    function isRequiredFilled() {
        const isInstitutionValid = institutionInput !== "" ? true : false
        const isProgrammeNameValid = programmeNameInput !== "" ? true : false
        const isDescriptionValid = descriptionInput !== "" ? true : false
        const isUrlValid = urlInput !== "" ? true : false

        return isInstitutionValid && isProgrammeNameValid && isDescriptionValid && isUrlValid
    }


    const handleSubmit = async () => {
        if (isRequiredFilled()) {
            try {

                const body = {
                    institution: institutionInput,
                    programme_name: programmeNameInput,
                    description: descriptionInput,
                    url: urlInput,
                    pre_16: forPre16 ? "True" : "False",
                    year_12: forYear12 ? "True" : "False",
                    year_13: forYear13 ? "True" : "False",
                    university_students: forUniversity ? "True" : "False",
                    graduates: forGraduates ? "True" : "False"
                }
                console.log(body)
                await fetch('https://overflow-app.herokuapp.com/submit', {
                    method: 'POST',
                    body: JSON.stringify(body),

                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                setInstitutionInput("");
                setProgrammeNameInput("");
                setDescriptionInput("");
                setUrlInput("");
                setForPre16(false);
                setForYear12(false);
                setForYear13(false);
                setForUniversity(false);
                setForGraduates(false);
                fetchAllOpportunities();
            } catch (error) {
                console.error(error.message);
            }

        } else {
            alert("Please make sure you've filled in all required(*) fields")
        }

    }
    

    return (
        <div className='submission_container'>
            <h2>Submit an Opportunity!</h2>
            <input value={institutionInput} onChange={e => setInstitutionInput(e.target.value)} placeholder='Institution' type='text' />
            <input value={programmeNameInput} onChange={e => setProgrammeNameInput(e.target.value)} placeholder='Programme Name' type='text' />
            <textarea value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)} placeholder='Description' ></textarea>
            <input value={urlInput} onChange={e => setUrlInput(e.target.value)} placeholder='URL' type='text' />
            <label>Pre-16 <input type='checkbox' checked={forPre16} onChange={() => setForPre16(!forPre16)} /></label>
            <label>Year 12<input type='checkbox' checked={forYear12} onChange={() => setForYear12(!forYear12)} /></label>
            <label>Year 13<input type='checkbox' checked={forYear13} onChange={() => setForYear13(!forYear13)} /></label>
            <label>Univeristy Students<input type='checkbox' checked={forUniversity} onChange={() => setForUniversity(!forUniversity)} /></label>
            <label>Graduates<input type='checkbox' checked={forGraduates} onChange={() => setForGraduates(!forGraduates)} /></label>
        
            <button onClick={() => handleSubmit()} className='submit-btn'>Submit</button>
        </div>
    )
}