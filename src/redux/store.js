import contact from '../img/contact.jpg';
import mrfor from '../img/mrfour.jpg';
import denis from '../img/denis.jpg';
import ami from '../img/amina.jpg';
import iya from '../img/iya.jpg';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';


let store = {
    _state: {
        settings: {
            avatar: "../img/avatar.jpg"
        },
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: "1", name: "Hello! How are you?", like: 12 },
                { id: "2", name: "Cool project, guys!", like: 12 },
                { id: "3", name: "Hey, i`m working", like: 12 },
                { id: "4", name: "Rest! I need some rest!", like: 12 }
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}


export default store;