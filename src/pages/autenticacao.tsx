/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AuthInput } from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    const { cadastrar, login, loginGoogle} = useAuth()

    function exibirErro(msg, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    async function submeter() {
        try {
            if (modo === 'login') {
               await login(email, senha)
            } else {
               await cadastrar(email, senha)
            }
            } catch(e) {
                exibirErro(e?.message ?? 'Erro desconhecido!')
            }    
        }
    
    return (
        <div className={`flex h-screen justify-center items-center`}>
            <div className=" hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/collection/8536824" 
                    alt="Imagem da tela de Autenticação"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com sua conta' : 'Cadastre-se na plataforma'}
                </h1>

                {erro ? (
                    <div className={`
                        bg-red-400 flex items-center
                        text-white py-3 px-5 my-2 border border-red-700 rounded-lg`
                    }>
                        {IconeAtencao(6)}
                        <span className={`ml-3`}>{erro}</span>
                    </div>

                ): (
                    false
                )}


                <AuthInput
                    label="Email"
                    tipo="text"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />

                <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3 
            `}>
                    Entrar com o Google
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`text-blue hover:text-blue-700 font-semibold cursor-pointer`}>
                            {' '}Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz partte da nossa comunudade?
                        <a onClick={() => setModo('login')} className={`text-blue hover:text-blue-700 font-semibold cursor-pointer`}>
                            {' '}Entre com seu Login
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}