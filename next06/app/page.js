"use client";
import { useState } from "react";
import { textExemples } from "./textExemples";

export default function Home() {
  const [textChallenge, setTextChallenge] = useState("");
  const [digitedText, setDigitedText] = useState("");
  const [initialTime, setInitialTime] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  function changeTheme() {
    document.documentElement.classList.toggle("dark");
  }

  function changetextChallenge() {
    const id = Math.floor(Math.random() * 10);

    setTextChallenge(textExemples[id]);
  }

  function resetVelocimeter() {
    setDigitedText("");
    setInitialTime(null);
    //changetextChallenge()
    setTextChallenge("");
  }

  function textVelocimeter(e) {
    setDigitedText(e.target.value);

    if (initialTime === null) {
      const date = new Date();
      const initial = date.getTime();
      setInitialTime(initial);
    }

    if (digitedText === textChallenge) {
      const date = new Date();
      const final = date.getTime();

      const resultTime = final - initialTime;
      const result = resultTime;

      setFinalResult(result);
      resetVelocimeter();
    }
  }

  function newTestVelocimeter() {
    if (textChallenge === "") {
      setFinalResult(null);
      changetextChallenge();
    } else return;
  }

  return (
    <>
      <div className="flex justify-end dark:bg-gray-800 dark:text-white">
        <button
          className="bg-blue-500 text-white p-2 m-2"
          onClick={changeTheme}
        >
          Alternar tema
        </button>
      </div>
      <main
        className=" flex min-h-screen max-w-3xl mx-auto flex-col items-center justify-center px-12 gap-5
      dark:bg-gray-800 dark:text-white"
      >
        <h1 className="text-4xl font-bold">Teste de velocidade de Digitação</h1>

        <p>
          Para começar o teste, clique na caixa de texto abaixo e comece a
          digitar o texto exibido acima dela. O cronometro começará
          automaticamente assim que você começar a digitar. Quando você terminar
          de digitar o texto corretamente aperte enter e o tempo que você levou
          será exibido.
        </p>

        <h3 className="text-center">
          {textChallenge
            ? textChallenge
            : "clique na caixa de texto para iniciar o teste"}
        </h3>

        <textarea
          className="border border-black p-2 w-full dark:text-black "
          placeholder="Digite o texto aqui..."
          row={30}
          cols={30}
          value={digitedText}
          onInput={textVelocimeter}
          onClick={newTestVelocimeter}
        ></textarea>

        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => {
            setFinalResult(null);
            resetVelocimeter();
          }}
        >
          Reiniciar
        </button>

        <div>
          {finalResult ? 
            <p className="border-4 border-lime-500 p-4 rounded-2xl ">
              {`Tempo de digitação: ${(finalResult / 1000).toFixed(3).replace(".", ",")} segundos`}
            </p>
           : null}
        </div>
      </main>
    </>
  );
}
