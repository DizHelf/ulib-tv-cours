import {type ButtonHTMLAttributes, type FC} from 'react';
import cls from './Button.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
	CLEAR = 'clear',

}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
    const {className, children, theme = ButtonTheme.CLEAR, ...otherProps} = props;

    return (
        <button
            className={classNames(cls.Button,
                {},
                [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
