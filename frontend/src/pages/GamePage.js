import React, { useState } from 'react';
import './GamePage.css';

const GamePage = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const scenarios = [
        {
            id: 0,
            question: "Ju jeni delegati i Shqipërisë. Komiteti po debaton një rezolutë mbi subvencionet e energjisë së rinovueshme. Një bllok i fuqishëm po shtyn për një klauzolë që dëmton ekonomitë në zhvillim. Çfarë bëni?",
            options: [
                { text: "Nënshkruani rezolutën menjëherë për të fituar favore.", points: 5, feedback: "Ju bëtë aleatë, por ekonomia e vendit tuaj mund të vuajë. Një fillim mesatar." },
                { text: "Propozoni në mënyrë diplomatike një amendament për të mbrojtur kombet në zhvillim.", points: 20, feedback: "Shkëlqyeshëm! Treguat lidership dhe mbrojtët interesat kombëtare duke mbetur bashkëpunues." },
                { text: "Protestoni me zë të lartë dhe dilni nga salla.", points: -10, feedback: "Kjo është jodiplomatike. Keni humbur respektin e komitetit." }
            ]
        },
        {
            id: 1,
            question: "Është koha për kaukusin e moderuar. Tema është 'Siguria Kibernetike Ndërkombëtare'. Nuk keni folur ende. Cila është lëvizja juaj?",
            options: [
                { text: "Ngrini lart pankartën tuaj për një mocion për të prezantuar një nën-temë.", points: 15, feedback: "Nisëm e shkëlqyer! Po drejtoni debatin." },
                { text: "Prisni që dikush tjetër të flasë dhe thjesht tundni kokën.", points: 0, feedback: "Duhet të jeni aktiv për të qenë një delegat i mirë. E sigurt, por e pa vënë re." },
                { text: "Kaloni një shënim Kryesisë duke kërkuar drekë.", points: -5, feedback: "Joprofesionale. Përqendrohuni në debat!" }
            ]
        },
        {
            id: 2,
            question: "Sapo shpërtheu një krizë! Një vend fqinj ka mbyllur kufijtë e tij. Komiteti është në kaos.",
            options: [
                { text: "Panik dhe bërtisni urdhra.", points: -10, feedback: "Kaosi kërkon lidership të qetë, jo më shumë zhurmë." },
                { text: "Hartoni një direktivë të nxituar pa u konsultuar me të tjerët.", points: 5, feedback: "Veprim i shpejtë, por lëvizjet e njëanshme rrallë kanë sukses në OKB." },
                { text: "Formoni një bllok me aleatët rajonalë dhe hartoni një direktivë të përbashkët.", points: 20, feedback: "E përkryer. Bashkëpunimi shumëpalësh është çelësi për zgjidhjen e krizave." }
            ]
        }
    ];

    const handleOptionClick = (points) => {
        setScore(score + points);
        if (step < scenarios.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetGame = () => {
        setStep(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <div className="game-page container fade-in">
            <header className="game-header">
                <h1>Simulatori i Delegatit</h1>
                <p className="lead">Testoni instinktet tuaja diplomatike në këtë skenar interaktiv.</p>
            </header>

            <div className="game-card">
                {!showResult ? (
                    <>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${((step + 1) / scenarios.length) * 100}%`}}></div>
                        </div>
                        <h2 className="scenario-question">{scenarios[step].question}</h2>
                        <div className="options-grid">
                            {scenarios[step].options.map((option, index) => (
                                <button 
                                    key={index} 
                                    className="btn btn-option" 
                                    onClick={() => handleOptionClick(option.points)}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                        <p className="current-score">Pikët Aktuale Diplomatike: {score}</p>
                    </>
                ) : (
                    <div className="result-section fade-in">
                        <h2>Simulimi Përfundoi</h2>
                        <div className="final-score">
                            <span>{score}</span> / {scenarios.length * 20}
                        </div>
                        <p className="result-text">
                            {score >= 40 ? "Delegat i Shkëlqyer! Jeni gati për Asamblenë e Përgjithshme." : 
                             score >= 20 ? "Punë e mirë. Me pak më shumë praktikë, do të jeni një lider i fortë." : 
                             "Diplomacia është e vështirë. Rishikoni udhëzuesit e studimit dhe provoni përsëri!"}
                        </p>
                        <button className="btn btn-restart" onClick={resetGame}>Luaj Përsëri</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePage;
