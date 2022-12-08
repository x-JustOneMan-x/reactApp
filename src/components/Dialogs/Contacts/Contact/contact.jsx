import { NavLink } from 'react-router-dom';


const ContactItem = (props) => {
    let url = '/dialogs/' + props.id;
    return (
        <div className="contacts__item">
            <span><NavLink to={url}>
                <span className="contacts__item-ava">
                    <img src={props.avatar} alt="" />
                </span>
                <span className='contacts__item-name'>{props.name}</span></NavLink></span>
        </div>
    );
}

export default ContactItem;