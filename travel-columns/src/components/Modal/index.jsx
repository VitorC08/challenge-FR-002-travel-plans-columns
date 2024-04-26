import { ModalWrapper } from "./sytle";

export function Modal({onClose}){
    return(
    <ModalWrapper>
        <h3>🎉 Parabéns 🎉</h3>
        <p>A confirmação da compra chegará no seu email cadastrado.</p>
        <button onClick={onClose}> Fechar </button>
    </ModalWrapper>
    )
}