import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 my-8'>
                <div>
                    <img className='rounded-md drop-shadow-lg' src="https://i.ibb.co/NKjc0cB/pexels-fauxels-3184429.png" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl py-2 text-primary font-bold'>Business Deal</h1>
                    <p>Negotiation is the noun form of the verb “to negotiate.” A negotiation is a give-and-take process between two or more parties that want to find a common ground and reach an agreement so they can settle a matter that concerns both parties or find a solution to a problem.

                        The following vocabulary related to negotiations will help boost your confidence when negotiating in the business world.

                        The article will break down these negotiation phrases into the following parts of a negotiation: Making an Offer, Clarifying an Opinion, Special Conditions, Expressing Doubt, and Reassuring and Closing a Deal. Each section will have short mini-dialogues. Finally, there will be a dialogue that uses phrases from each section.</p>
                    <button className="btn bg-primary border-0 text-white font-bold px-4 my-4">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;