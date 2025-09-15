export function Register() {
    return (
        <section className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-blue-700 mb-2">Criar Conta</h1>
                    <p className="text-md text-gray-500">Cadastre-se para acessar a plataforma de teleatendimento.</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Seu nome"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Crie uma senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-2 rounded-lg shadow hover:scale-105 transition"
                    >
                        Registrar
                    </button>
                </form>
                <div className="text-center mt-6">
                    <span className="text-gray-600">Já possui uma conta?</span>
                    <a href="/login" className="ml-2 text-blue-600 font-semibold hover:underline">
                        Entrar
                    </a>
                </div>
            </div>
        </section>
    );
}