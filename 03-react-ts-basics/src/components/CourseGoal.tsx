import { type PropsWithChildren } from 'react';

type TProps = {
    id: number;
    title: string;
    onDelete: (id: number) => void;
}
type TCProps = PropsWithChildren<TProps>;

const CourseGoal = ({ id, title, onDelete, children }: TCProps) => {
    return (
        <article>
            <div>
                <h2>{ title }</h2>
                { children }
            </div>
            <button onClick={ () => onDelete(id) }>Delete</button>
        </article>
    );
}

export default CourseGoal;
export type TCourseGoal = {
    id: number;
    title: string;
    description: string;
}
