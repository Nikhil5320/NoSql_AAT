import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props.contact[0]);
    console.log("NNNPNNNN");
    const renderContactList = Array.from(props.contact).map((contacts) => {
        return(
            <ContactCard contacts={contacts}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;