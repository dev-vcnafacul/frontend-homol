import { OutlinedBox, SolidBox, UnsolvedBox } from "./styles";

export function QuestionBox({ number, active, solved }) {
    console.log({ number, active, solved });

    if (number === active) {
        return <SolidBox>{number}</SolidBox>;
    } else if (number < active && !solved) {
        return <UnsolvedBox>{number}</UnsolvedBox>;
    } else {
        return <OutlinedBox>{number}</OutlinedBox>;
    }
}
