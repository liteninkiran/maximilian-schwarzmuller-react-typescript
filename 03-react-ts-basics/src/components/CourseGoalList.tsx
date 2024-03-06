import CourseGoal from './CourseGoal.tsx';
import { type TCourseGoal } from './CourseGoal.tsx';

type TProps = {
    goals: TCourseGoal[];
    onDeleteGoal: (id: number) => void;
}

function CourseGoalList({ goals, onDeleteGoal }: TProps) {

    function goalListItemElement(goal: TCourseGoal): JSX.Element {
        return (
            <li key={ goal.id }>
                <CourseGoal id={ goal.id } title={ goal.title } onDelete={ onDeleteGoal }>
                    <p>{ goal.description }</p>
                </CourseGoal>
            </li>
        );
    }

    return (<ul>{ goals.map(goalListItemElement) }</ul>);
}

export default CourseGoalList;
