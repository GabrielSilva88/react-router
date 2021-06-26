import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {

    return ReactDOM.createPortal(
        <div className='ui dimmer show modals visible acrive'>
            <dvi className='ui raiser very padded text container segment'>
                <h3>
                    I am Modal
                </h3>
            </dvi>,
            document.querySelector('#root')

        </div>
    )

}

export default Modal;