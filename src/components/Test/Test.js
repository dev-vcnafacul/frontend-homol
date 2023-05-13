import SubjectsByNote from "./SubjectsByNote";
import { Wrap } from "./styles";

function Test() {
    return (
        <>
            {/* colocar o header da dash professor */}
            <Wrap>
                <SubjectsByNote />
            </Wrap>
            <br></br>
            <br></br>
            <h2>SubjectsByDay</h2>
            <br></br>
            <br></br>
            <h2>ModularSubjects</h2>
        </>
    );
}

export default Test;
