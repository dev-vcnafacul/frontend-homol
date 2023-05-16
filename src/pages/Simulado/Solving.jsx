import Header from "components/Header";
import { QuestionBox } from "components/QuestionBox";
import { header } from "utils/data";
import { Label, Legend, QuestionContent, QuestionList, Timer, Title, Wrap } from "./styles";
import { Button } from "components/atoms";

/* caderno de questões fictício para o desenvolvimento da tela */
const book = new Array(100).fill(null).map(() => Math.round(Math.random() * 10));
const active = 34;

export function Solving() {
    return (
        <div>
            <Header solid {...header} />
            <Wrap>
                <Title>
                    Simulado do {"ENEM"}
                    <Timer>00:00:00</Timer>
                    <Button>Concluir Simulado</Button>
                </Title>
                <QuestionList>
                    {book.map((x, i) => (
                        <QuestionBox number={i + 1} active={active} solved={x > 2} />
                    ))}
                    <Legend>
                        <Label />
                        Questões não respondidas (clique para responder)
                    </Legend>
                </QuestionList>
                <QuestionContent></QuestionContent>
            </Wrap>
        </div>
    );
}
