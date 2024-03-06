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
        console.log(goals);
        setGoals([]);
    }

    return (
        <main>
            <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
                <h1>Your Course Goals</h1>
            </Header>
            <button onClick={ handleAddGoal }>
                Add Goal
            </button>
            <CourseGoal title="Learn React + TS">
                <p>Learn it from the ground up</p>
            </CourseGoal>
        </main>
    );
}
