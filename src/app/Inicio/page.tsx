"use client";

import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <main className="h-screen flex flex-col items-center justify-center bg-[url('/fundo.jpg')] bg-cover bg-center text-white">
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg text-center w-96">
                <h1 className="text-2xl font-bold mb-4">Bem-vindo!</h1>
                <User className="w-16 h-16 text-white mx-auto mb-4" />
                
                <div className="flex flex-col gap-4">
                    <div className="text-left">
                        <label className="font-medium">Nome:</label>
                        <p className="w-full border rounded-lg p-2 mt-1 bg-transparent text-white border-white">Seu nome</p>
                    </div>

                    <div className="text-left">
                        <label className="font-medium">Email:</label>
                        <p className="w-full border rounded-lg p-2 mt-1 bg-transparent text-white border-white">seu@email.com</p>
                    </div>

                    <div className="text-left relative">
                        <label className="font-medium">Senha:</label>
                        <div className="flex items-center border rounded-lg p-2 mt-1 border-white">
                            <p className="w-full bg-transparent text-white">{showPassword ? "SenhaCriptografada123" : "••••••••"}</p>
                            <button onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff className="w-5 h-5 text-white" /> : <Eye className="w-5 h-5 text-white" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
