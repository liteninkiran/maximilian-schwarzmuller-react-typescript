import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';
import { type TCourseGoal } from './CourseGoal.tsx';
import { type ReactNode } from 'react';

type TProps = {
    goals: TCourseGoal[];
    onDeleteGoal: (id: number) => void;
}

function CourseGoalList({ goals, onDeleteGoal }: TProps) {
    const warning: ReactNode = (
        <InfoBox mode='warning' severity='medium'>
            Too many goals
        </InfoBox>
    );
    const hint: ReactNode = (
        <InfoBox mode='hint'>
            You have no course goals yet
        </InfoBox>
    );

    function goalListItemElement(goal: TCourseGoal): ReactNode {
        return (
            <li key={ goal.id }>
                <CourseGoal id={ goal.id } title={ goal.title } onDelete={ onDeleteGoal }>
                    <p>{ goal.description }</p>
                </CourseGoal>
            </li>
        );
    }

    if (goals.length === 0) {
        return hint;
    }

    return (
        <>
            { goals.length >= 4 ? warning : null }
            <ul>{ goals.map(goalListItemElement) }</ul>
        </>
    );
}

export default CourseGoalList;
