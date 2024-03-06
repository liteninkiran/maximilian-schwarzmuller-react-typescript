//  React
import { useState } from 'react';

//  Components
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';

// Types
import { type TCourseGoal } from './components/CourseGoal.tsx';

// Assets
import goalsImg from './assets/goals.jpg';

export default function App() {
    const [goals, setGoals] = useState<TCourseGoal[]>([]);

    function handleAddGoal(): void {
        const newGoal: TCourseGoal = {
            id: Math.random(),
            title: 'Learn React & TS',
            description: 'Learn it in depth',
        }
        setGoals(prevGoals => [...prevGoals, newGoal]);
        // console.log(goals);
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
        return (<CourseGoalList goals={ goals }></CourseGoalList>);
    }

    function mainElement(): JSX.Element {
        return (
            <main>
                { headerElement()   }
                { buttonElement()   }
                { goalListElement() }
            </main>
        );
    }

    return mainElement();
}
