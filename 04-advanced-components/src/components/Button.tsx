import { type ComponentPropsWithoutRef } from "react";

type TButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };
type TAnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string };
type TProps = TButtonProps | TAnchorProps;

function isAnchorProps(props: TProps): props is TAnchorProps {
    return 'href' in props;
}

export default function Button(props: TProps) {
    if (isAnchorProps(props)) {
        return (<a className='button' {...props}></a>);
    }

    return (<button className='button' {...props}></button>);
}
