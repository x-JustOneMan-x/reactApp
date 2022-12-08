const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: "1", name: "Hello! How are you?", like: 12 },
        { id: "2", name: "Cool project, guys!", like: 12 },
        { id: "3", name: "Hey, i`m working", like: 12 },
        { id: "4", name: "Rest! I need some rest!", like: 12 }
    ],
    newPostText: ''
};

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: state.newPostText,
                like: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            console.log(state.newPostText);
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReduser