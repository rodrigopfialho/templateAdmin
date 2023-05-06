/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const {usuario} = useAuth()
    return (
        <Link href="/perfil">
            <img
                src={usuario?.imageUrl ?? '/images/avatar.svg'} 
                alt="avatar do usuário" 
                className={`
                    h-10 w-10 rounded-full cursor-pointer border
                    ${props.className}
                `}
            />
        </Link>
    )
}