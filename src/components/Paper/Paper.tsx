import React from 'react';
import {Box, Text} from 'native-base';

export interface IPaperProps {
    children?: React.ReactChild;
    bgColor?: string;
    borderColor?: string;
    elevation?: number;
    fontSize?:
        | number
        | 'xxs'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | number[]
        | string[]
        | Record<string, string>
        | undefined;
    h?: number | string;
    lineHeight?: number | string;
    m?: number | string;
    outlined?: boolean;
    p?: number | string;
    square?: boolean;
    w?: number | string;
}

export const Paper = ({
    children,
    bgColor,
    borderColor,
    elevation,
    fontSize,
    lineHeight,
    outlined,
    h,
    m,
    p,
    w,
    square,
}: IPaperProps) => {
    const defaultProps = {
        shadow: elevation ? elevation : 1,
        h: h ? h : 60,
        w: w ? w : 'auto',
        m: m ? m : 0,
        p: p ? p : '0 24px',
        borderWidth: outlined ? '1px' : 0,
        borderRadius: square ? 0 : '6px',
        bgColor: bgColor ? bgColor : '#FFF',
        borderColor: borderColor ? borderColor : '#AFAFAF',
        textAlign: 'center',
    };

    return (
        <Box {...defaultProps}>
            <Text fontSize={fontSize ? fontSize : 'md'} lineHeight={lineHeight ? lineHeight : '60px'} flexShrink={1}>
                {children}
            </Text>
        </Box>
    );
};
