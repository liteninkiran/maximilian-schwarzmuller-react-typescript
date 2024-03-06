import { useState } from 'react';
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';

type CourseGoal = {
    id: number;
    title: string;
    description: string;
}

export default function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal(): void {
        const newGoal: CourseGoal = {
            id: Math.random(),
            title: 'Learn React & TS',
            description: 'Learn it in depth',
        }
        setGoals(prevGoals => [...prevGoals, newGoal]);
        console.log(goals);
    }

    function headerElement() : JSX.Element {
        return (
            <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
                <h1>Your Course Goals</h1>
            </Header>
        );
    }

    function buttonElement() : JSX.Element {
        return (
            <button onClick={ handleAddGoal }>
                Add Goal
            </button>
        );
    }

    function goalListElement(): JSX.Element {
        return (
            <ul>
                { goals.map(goalListItemElement) }
            </ul>
        );
    }

    function goalListItemElement(goal: CourseGoal): JSX.Element {
        return (
            <li key={ goal.id }>
                <CourseGoal title={ goal.title }>
                    <p>{ goal.description }</p>
                </CourseGoal>
            </li>
        );
    }

    function mainElement(): JSX.Element {
        return (
            <main>
                { headerElement() }
                { buttonElement() }
                { goalListElement() }
            </main>
        );
    }

    return mainElement();
}
