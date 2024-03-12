import React, { useEffect } from "react";
import NestedNavigation from "../../components/NestedNavigation";
import "../../styles/pages/dictionary/DictionaryPage.css";

const DictionaryPage = () => {
    useEffect(() => {
        // Scroll to the section specified in the URL anchor
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    // Dictionary terms organized by category and sorted alphabetically
    const dictionaryTerms = [
        {
            category: "Firearms Terms",
            terms: [
                { term: "Example Firearms Term 1", explanation: "Example explanation for Firearms Term 1." },
                { term: "Example Firearms Term 2", explanation: "Example explanation for Firearms Term 2." }
                // Add more firearms terms and explanations as needed
            ]
        },
        {
            category: "Hunting Terms",
            terms: [
                { term: "Example Hunting Term 1", explanation: "Example explanation for Hunting Term 1." },
                { term: "Example Hunting Term 2", explanation: "Example explanation for Hunting Term 2." }
                // Add more hunting terms and explanations as needed
            ]
        },
        {
            category: "Legal Terms",
            terms: [
                { term: "Example Legal Term 1", explanation: "Example explanation for Legal Term 1." },
                { term: "Example Legal Term 2", explanation: "Example explanation for Legal Term 2." }
                // Add more legal terms and explanations as needed
            ]
        },
        {
            category: "Medical Terms",
            terms: [
                { term: "Example Medical Term 1", explanation: "Example explanation for Medical Term 1." },
                { term: "Example Medical Term 2", explanation: "Example explanation for Medical Term 2." }
                // Add more medical terms and explanations as needed
            ]
        },
        {
            category: "Outdoor Terms",
            terms: [
                { term: "Example Outdoor Term 1", explanation: "Example explanation for Outdoor Term 1." },
                { term: "Example Outdoor Term 2", explanation: "Example explanation for Outdoor Term 2." }
                // Add more outdoor terms and explanations as needed
            ]
        },
        {
            category: "Self Defense Terms",
            terms: [
                { term: "Example Self Defense Term 1", explanation: "Example explanation for Self Defense Term 1." },
                { term: "Example Self Defense Term 2", explanation: "Example explanation for Self Defense Term 2." }
                // Add more self-defense terms and explanations as needed
            ]
        }
    ];

    // Function to render dictionary terms within a section
    const renderTerms = (terms) => {
        return terms.map((item, index) => (
            <React.Fragment key={index}>
                <p className="dictionary-term">{item.term}</p>
                <p className="dictionary-explanation">{item.explanation}</p>
            </React.Fragment>
        ));
    };

    return (
        <div className="dictionary-container">
            <NestedNavigation />

            {/* Render dictionary sections */}
            {dictionaryTerms.map((category, index) => (
                <div key={index} className="dictionary-section" id={category.category.toLowerCase().replace(/\s/g, "-")}>
                    <h2 className="dictionary-section-heading">{category.category}</h2>
                    {renderTerms(category.terms)}
                </div>
            ))}
        </div>
    );
};

export default DictionaryPage;
