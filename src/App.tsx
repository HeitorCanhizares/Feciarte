import { useState } from "react";

const App = () => {
    const [steps, setSteps] = useState(0);
    return (
        <>
            {steps === 0 && (
                <div className="h-screen w-screen">
                    <img src="/images/img_01.png" className="h-full w-screen" />
                    <button
                        className="btn absolute right-[35%] top-[92%] h-12 rounded-3xl p-2 underline"
                        onClick={() => setSteps(1)}
                    >
                        <img src="/images/play.svg" alt="" className="h-full" />
                        Play
                    </button>
                </div>
            )}
            {steps === 1 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_02.png" className="h-full w-screen" />
                    <div className="absolute right-[30%] top-[35%] flex flex-col gap-1 text-xl underline md:gap-4 md:text-3xl">
                        <button
                            className="btn-ghost h-fit w-fit bg-base-200 bg-transparent hover:bg-transparent"
                            onClick={() => setSteps(3)}
                        >
                            5 Filmes
                        </button>
                        <button
                            className="btn-ghost h-fit w-fit bg-base-200 bg-transparent hover:bg-transparent"
                            onClick={() => setSteps(3)}
                        >
                            12 Filmes
                        </button>
                        <button
                            className="btn-ghost h-fit w-fit bg-base-200 bg-transparent hover:bg-transparent"
                            onClick={() => setSteps(3)}
                        >
                            Nenhum
                        </button>
                        <button
                            className="btn-ghost h-fit w-fit bg-base-200 bg-transparent hover:bg-transparent"
                            onClick={() => setSteps(4)}
                        >
                            +30 Filmes
                        </button>
                    </div>
                </div>
            )}
            {steps === 3 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_03.png" className="h-full w-screen" />
                    <button
                        className="btn-ghost absolute left-0 top-0 h-fit w-fit bg-base-200 bg-transparent text-2xl underline hover:bg-transparent"
                        onClick={() => setSteps(0)}
                    >
                        Voltar ao início
                    </button>
                </div>
            )}
            {steps === 4 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_04.png" className="h-full w-screen" />
                    <button
                        className="btn-ghost absolute left-0 top-0 h-fit w-fit bg-base-200 bg-transparent text-2xl underline hover:bg-transparent"
                        onClick={() => setSteps(0)}
                    >
                        Voltar ao início
                    </button>
                </div>
            )}
        </>
    );
};

export default App;
