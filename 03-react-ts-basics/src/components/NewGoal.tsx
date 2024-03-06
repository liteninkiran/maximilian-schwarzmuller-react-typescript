import { type FormEvent } from 'react';

function NewGoal(): JSX.Element {

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input name="goal" id="goal" type="text" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input name="summary" id="summary" type="text" />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;
