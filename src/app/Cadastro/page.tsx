import { Mail, Lock, User } from "lucide-react";

export default function Cadastro() {

    return (
        <main className="h-screen bg-[url('/fundo.jpg')] bg-cover bg-center">
            <title>DevFusion</title>
            <div className="absolute inset-0 flex justify-center items-center">
                <form
                    id="cadastro-form"
                    className="bg-transparent p-8 rounded-lg shadow-lg max-w-sm w-full"
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">Cadastro</h2>
                    <div className="mb-4 relative">
                        <label htmlFor="name" className="block text-sm font-medium text-white">Nome</label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu nome"
                                required
                            />
                            <User className="text-white ml-2" size={20} />
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu email"
                                required
                            />
                            <Mail className="text-white ml-2" size={20} />
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-white">Senha</label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite sua senha"
                                required
                            />
                            <Lock className="text-white ml-2" size={20} />
                        </div>
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-white">Confirmar Senha</label>
                        <div className="flex items-center border-b border-gray-300">
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                className="w-full p-2 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirme sua senha"
                                required
                            />
                            <Lock className="text-white ml-2" size={20} />
                        </div>
                    </div>
                    <button
                        id="cadastrar-btn"
                        type="button"
                        className="w-full py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-200"
                    >
                        Cadastrar
                    </button>
                    <div className="text-center mt-4 text-white">
                        <p className="text-sm">Já tem uma conta? <a id="login-link" href="/login" className="text-blue-300 hover:underline">Login</a></p>
                    </div>
                </form>
            </div>
        </main>
    );
}
