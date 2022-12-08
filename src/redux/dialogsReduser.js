import contact from '../img/contact.jpg';

import mrfor from '../img/mrfour.jpg';
import denis from '../img/denis.jpg';
import ami from '../img/amina.jpg';
import iya from '../img/iya.jpg';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    contacts: [
        { id: "1", name: "Andrew", avatar: mrfor },
        { id: "2", name: "DeNis", avatar: denis },
        { id: "3", name: "Ami", avatar: ami },
        { id: "4", name: "ms. Stories", avatar: iya }
    ],
    messages: [
        { image: contact, text: "Lorem ipsum dolor sit amet consectetur", path: 'in' },
        { image: contact, text: "Hello!", path: 'out' },
        { image: contact, text: "How are you?", path: 'in' }
    ],
    newMessageText: ''
};

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                image: contact,
                text: state.newMessageText,
                path: 'out'
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReduser;