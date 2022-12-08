
import Contacts from './Contacts/contacts';

import Messages from './Massages/messages';


import './dialogs.scss';

const Dialogs = (props) => {
    return (
        <div className="dialogs cloud__container">
            <Contacts store={props.store} />
            <Messages store={props.store} />
        </div>
    );
}

export default Dialogs;