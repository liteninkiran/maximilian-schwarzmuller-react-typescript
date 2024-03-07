import { type ComponentPropsWithoutRef } from "react";

type TButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type TAnchorProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

type TProps = TButtonProps | TAnchorProps;

export default function Button(props: TProps) {
    if (props.el === 'anchor') {
        return (
            <a className='button' {...props}></a>
        );
    } else {
        return (
            <button className='button' {...props}>
    
            </button>
        );
    }
}
