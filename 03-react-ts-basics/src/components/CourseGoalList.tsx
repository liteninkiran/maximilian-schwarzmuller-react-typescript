import CourseGoal from './CourseGoal.tsx';
import { type TCourseGoal } from './CourseGoal.tsx';

type TProps = {
    goals: TCourseGoal[],
}

function CourseGoalList({ goals }: TProps) {

    function goalListItemElement(goal: TCourseGoal): JSX.Element {
        return (
            <li key={ goal.id }>
                <CourseGoal title={ goal.title }>
                    <p>{ goal.description }</p>
                </CourseGoal>
            </li>
        );
    }

    return (<ul>{ goals.map(goalListItemElement) }</ul>);
}

export default CourseGoalList;
