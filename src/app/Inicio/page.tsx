'use client';

import { User, Settings, LogOut, ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [isEditing, setIsEditing] = useState(false);
    const [isAccountVisible, setIsAccountVisible] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleAccountClick = () => {
        setIsAccountVisible(!isAccountVisible);
    };

    const handleBackClick = () => {
        setIsEditing(false);
        setIsAccountVisible(false);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogout = () => {
        if (isClient) {
            router.push('/login'); 
        }
    };

    return (
        <main className="h-screen bg-[url('/fundo.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl bg-transparent bg-opacity-60 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center mb-8 text-white">Bem-vindo</h1>

                <div className="text-white">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <User className="w-16 h-16 text-white bg-gray-800 p-3 rounded-full" />
                            <div>
                                <h2 className="text-xl font-medium">Vinicius Henrique</h2>
                                <p className="text-sm text-gray-300">Desenvolvedor Full Stack</p>
                            </div>
                        </div>
                        <button
                            id="logout"
                            className="text-white hover:underline flex items-center space-x-2"
                            onClick={handleLogout} 
                        >
                            <LogOut className="w-5 h-5 text-white" />
                            <span>Sair</span>
                        </button>
                    </div>

                    <div className="flex justify-center space-x-8">
                        <button
                            id="editar-perfil"
                            onClick={handleEditClick}
                            className="p-4 bg-white text-black rounded-lg hover:shadow-lg transition duration-300"
                        >
                            <Settings className="w-6 h-6 mb-2" />
                            <span>Editar Perfil</span>
                        </button>
                        <button
                            id="minha-conta"
                            onClick={handleAccountClick}
                            className="p-4 bg-white text-black rounded-lg hover:shadow-lg transition duration-300"
                        >
                            <User className="w-6 h-6 mb-2" />
                            <span>Minha Conta</span>
                        </button>
                    </div>

                    {isEditing && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 text-black">
                            <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all scale-95 hover:scale-100 max-w-md w-full relative">
                                <button
                                    onClick={handleBackClick}
                                    className="absolute top-4 left-4 text-black hover:text-gray-600 transition duration-300"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <h3 className="text-xl font-semibold text-center mb-4 text-black">Editar Perfil</h3>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="nome" className="block text-sm font-medium text-black">Nome</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                            placeholder="Digite seu nome"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="foto" className="block text-sm font-medium text-black">Foto</label>
                                        <input
                                            type="file"
                                            id="foto"
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="sobre" className="block text-sm font-medium text-black">Sobre Mim</label>
                                        <textarea
                                            id="sobre"
                                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                                            placeholder="Escreva algo sobre você"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full p-4 bg-black text-white rounded-lg hover:shadow-lg transition duration-300"
                                    >
                                        Salvar Alterações
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {isAccountVisible && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all scale-95 hover:scale-100 max-w-md w-full relative">
                                <button
                                    onClick={handleBackClick}
                                    className="absolute top-4 left-4 text-black hover:text-gray-600 transition duration-300"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <h3 className="text-xl font-semibold text-center mb-4 text-black">Minha Conta</h3>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-black">Nome:</label>
                                    <p className="text-sm text-gray-600">Vinicius Henrique</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-black">E-mail:</label>
                                    <p className="text-sm text-gray-600">vinicius@example.com</p>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <label className="block text-sm font-medium text-black mr-2">Senha:</label>
                                    <p className="text-sm text-gray-600">
                                        {isPasswordVisible ? 'senha123' : '******'}
                                    </p>
                                    <button
                                        onClick={togglePasswordVisibility}
                                        className="ml-2 text-gray-500 hover:text-black"
                                    >
                                        {isPasswordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
