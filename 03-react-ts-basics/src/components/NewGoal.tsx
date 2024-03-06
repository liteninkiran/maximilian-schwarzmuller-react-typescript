import { useRef, type FormEvent } from 'react';

function NewGoal(): JSX.Element {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const newGoal = goal.current!.value;
        const newSummary = summary.current!.value;
        console.log(newGoal, newSummary);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input name="goal" id="goal" type="text" ref={ goal } />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input name="summary" id="summary" type="text" ref={ summary } />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;
