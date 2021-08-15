import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {Box, Text} from 'native-base';

import {Paper, IPaperProps} from './Paper';

describe('Paper', () => {
    let component: ShallowWrapper;

    const paperProps: IPaperProps = {
        elevation: 2,
        h: 80,
        w: 200,
        m: 20,
        p: 20,
        square: true,
        outlined: true,
        bgColor: '#BBB',
        borderColor: '#000',
        fontSize: 'lg',
        lineHeight: 80,
    };

    it('should render Box with default props', () => {
        const boxDefaultProps = {
            shadow: 1,
            h: 60,
            w: 'auto',
            m: 0,
            p: '0 24px',
            borderWidth: 0,
            borderRadius: '6px',
            bgColor: '#FFF',
            borderColor: '#AFAFAF',
            textAlign: 'center',
        };

        component = shallow(<Paper>Paper Component</Paper>);

        const box = component.find(Box);
        const {children, ...boxProps} = box.props();

        expect(boxProps).toStrictEqual(boxDefaultProps);
    });

    it('should render Text with default props', () => {
        const textDefaultProps = {
            fontSize: 'md',
            lineHeight: '60px',
            flexShrink: 1,
        };

        component = shallow(<Paper>Paper Component</Paper>);

        const text = component.find(Text);
        const {children, ...textProps} = text.props();

        expect(textProps).toStrictEqual(textDefaultProps);
        expect(children?.toString()).toEqual('Paper Component');
    });

    it('should render Box with custom props', () => {
        const boxCustomProps = {
            shadow: 2,
            h: 80,
            w: 200,
            m: 20,
            p: 20,
            borderWidth: '1px',
            borderRadius: 0,
            bgColor: '#BBB',
            borderColor: '#000',
            textAlign: 'center',
        };

        component = shallow(<Paper {...paperProps}>Paper Component</Paper>);

        const box = component.find(Box);
        const {children, ...boxProps} = box.props();

        expect(boxProps).toStrictEqual(boxCustomProps);
    });

    it('should render Text with custom props', () => {
        const textCustomProps = {
            fontSize: 'lg',
            lineHeight: 80,
            flexShrink: 1,
        };

        component = shallow(<Paper {...paperProps}>Paper Component</Paper>);

        const text = component.find(Text);
        const {children, ...textProps} = text.props();

        expect(textProps).toStrictEqual(textCustomProps);
        expect(children?.toString()).toEqual('Paper Component');
    });
});
