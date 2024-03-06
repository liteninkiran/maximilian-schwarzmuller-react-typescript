import { type FormEvent } from 'react';

function NewGoal(): JSX.Element {

    function handleSubmit(event: FormEvent): void {
        event.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;
