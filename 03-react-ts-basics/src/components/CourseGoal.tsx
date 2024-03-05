type Props = {
    title: string;
    description: string;
}

export default function CourseGoal({ title, description }: Props) {

    return (
        <article>
            <div>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
            <button>Delete</button>
        </article>
    );
}
