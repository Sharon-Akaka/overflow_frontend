import React from 'react';
import './components.css';

interface IOpportunityCard {
    data: IData,
}

export interface IData {
    id: number,
    institution: string,
    programme_name: string,
    description: string,
    url: string,
    pre_16: boolean,
    year_12: boolean,
    year_13: boolean,
    university_students: boolean,
    graduates: boolean
}

export default function OpportunityCard(props: IOpportunityCard) {
    const { data } = props


    return (
        <div >
            <h2>{data.institution}</h2>
            <h3>{data.programme_name}</h3>
            <p>{data.description}</p>
            <a className="anchor_tag" href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a>

        </div>
    )

}