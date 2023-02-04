interface BotaoProps { 
    cor?: string
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    const {cor } = props 
    return(
        <button onClick={() => props.onClick()} className={`
            bg-gradient-to-l from-${cor}-400 to-${cor}-700
            text-white font-bold px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}