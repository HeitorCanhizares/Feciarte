import { useState } from "react";

const App = () => {
    const [steps, setSteps] = useState(0);
    return (
        <>
            {steps === 0 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_01.png" className="h-full w-screen" />
                    <button
                        className="btn absolute left-[50%] top-[80%] h-[10vh] w-[20%] rounded-3xl bg-base-200 text-3xl shadow-2xl "
                        onClick={() => setSteps(1)}
                    >
                        <img src="/images/play.svg" alt="" className="w-12" />
                        Play
                    </button>
                </div>
            )}
            {steps === 1 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_02.png" className="h-full w-screen" />
                    <button
                        className="btn-ghost absolute left-[55%] top-[35%] h-fit w-fit bg-base-200 bg-transparent text-3xl hover:bg-transparent"
                        onClick={() => setSteps(3)}
                    >
                        5 Filmes
                    </button>
                    <button
                        className="btn-ghost absolute left-[55%] top-[47%] h-fit w-fit bg-base-200 bg-transparent text-3xl hover:bg-transparent"
                        onClick={() => setSteps(3)}
                    >
                        12 Filmes
                    </button>
                    <button
                        className="btn-ghost absolute left-[55%] top-[57%] h-fit w-fit bg-base-200 bg-transparent text-3xl hover:bg-transparent"
                        onClick={() => setSteps(3)}
                    >
                        Nenhum
                    </button>
                    <button
                        className="btn-ghost absolute left-[55%] top-[65%] h-fit w-fit bg-base-200 bg-transparent text-3xl hover:bg-transparent"
                        onClick={() => setSteps(4)}
                    >
                        +30 Filmes
                    </button>
                </div>
            )}
            {steps === 3 && (
                <div className=" flex h-screen w-screen justify-center">
                    <img src="/images/img_03.png" className="h-full w-screen" />
                    <button
                        className="btn-ghost absolute left-0 top-0 h-fit w-fit bg-base-200 bg-transparent text-3xl underline hover:bg-transparent"
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
                        className="btn-ghost absolute left-0 top-0 h-fit w-fit bg-base-200 bg-transparent text-3xl underline hover:bg-transparent"
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
