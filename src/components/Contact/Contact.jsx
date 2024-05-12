import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"

const Contact = ({ data: { name, number, id }, onDelete }) => {
    return (
    <>
        <div className={css.details}>
            <p>
                <span><svg><FaUser /></svg></span>
                {name}
            </p>
            <p>
                <span><svg><FaPhoneAlt /></svg></span>
                {number}
            </p>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </>
    )
}

export default Contact