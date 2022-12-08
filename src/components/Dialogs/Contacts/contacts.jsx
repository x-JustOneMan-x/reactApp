
import ContactItem from './Contact/contact';
import './contacts.scss';


const Contacts = (props) => {

    let state = props.store.getState().dialogsPage;

    let contactElement = state.contacts.map(cont => <ContactItem name={cont.name} id={cont.id} avatar={cont.avatar} />);

    return (
        <div className="dialogs__contacts">
            {contactElement}
        </div>
    );
}

export default Contacts;