import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Paper} from '../../../components/Paper/Paper';
import CenterView from '../CenterView';
import {text} from '@storybook/addon-knobs';

storiesOf('Paper', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => <Paper>{text('Paper text', 'Hello World')}</Paper>);
