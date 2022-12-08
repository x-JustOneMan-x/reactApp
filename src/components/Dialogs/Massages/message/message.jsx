
const Message = (props) => {
    let messClass = 'message message-' + props.path;
    return (
        <div className={messClass}>
            <div className="message__avatar">
                <img src={props.image} alt="" />
            </div>
            <div className="message__content">
                {props.text}
            </div>
        </div>
    );
}

export default Message;