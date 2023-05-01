interface TituloProps {
    titulo: string
    subtitulo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`font-black text-3-l mb-2 text-gray-900 dark:text-gray-100`}>{props.titulo}</h1>
            <h1 className={`font-normal text-sm text-gray-600 dark:text-gray-200`}>{props.subtitulo}</h1>
        </div>
    )
}