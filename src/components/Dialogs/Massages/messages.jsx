
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogsReduser';
import Message from './message/message';
import './messages.scss';

const Messages = (props) => {

    let state = props.store.getState().dialogsPage;

    let messageElement = state.messages.map(mess => <Message image={mess.image} text={mess.text} path={mess.path} />);

    let newMessage = React.createRef();

    let onMessageSend = () => {
        let text = newMessage.current.value;
        if (text != "") props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <div className="dialogs__list">
            <div className="dialogs__messages">
                {messageElement}
            </div>
            <div className="dialogs__send">
                <textarea ref={newMessage} name="add-mesaage" placeholder="your message" value={state.newMessageText} onChange={onMessageChange} ></textarea>
                <button onClick={onMessageSend}>
                    <svg width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg"><path d="m578.93 269.92-415.52-207.65c-10.406-5.1992-22.762-4.6406-32.66 1.4727-9.8984 6.1133-15.93 16.91-15.945 28.543v124.54c0.027344 7.7031 2.6875 15.168 7.5352 21.152 4.8438 5.9883 11.59 10.145 19.121 11.777l134.4 30.238-134.4 30.238c-7.5312 1.6328-14.277 5.7891-19.121 11.777-4.8477 5.9844-7.5078 13.449-7.5352 21.152v124.54c0.015625 11.633 6.0469 22.43 15.945 28.543 9.8984 6.1133 22.254 6.6719 32.66 1.4727l415.52-206.53c4.5938-1.5117 7.6992-5.8008 7.6992-10.641 0-4.8359-3.1055-9.1289-7.6992-10.637z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default Messages;

