import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'
import '../styles/chat.scss'


export default function Chat({children, open}) {
    const dialog = useRef()

    useEffect(() => {
        if(open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open])



   return (
    <dialog ref={dialog} >
        {children}
    </dialog>
   )
    // return createPortal(
    //     document.getElementById('chat')
    // )
}