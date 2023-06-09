import useAuth from "../../data/hook/useAuth";
import { IconAjustes, IconeCasa, IconeSino, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    const {logout} = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 
        `}>
            <div className={`flex flex-col items-center justify-center
                            h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}>
                <Logo />                
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Inicio" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconAjustes}/>
                <MenuItem url="/notificacao" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem 
                    onClick={logout} 
                    texto="Sair" 
                    icone={IconeSair}
                    className={`
                         text-red-600 dark:text-red-400
                         dark:hover:text-white hover:bg-red-400
                         hover:text-white`}
                    />
            </ul>
        </aside>
    )
}