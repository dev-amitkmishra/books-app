import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from '../components/atoms/label';

configure({ adapter: new Adapter() });

describe('Label', () => {
    it('should be defined', () => {
        expect(Label).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Label name='label test' />
        );
        expect(tree).toMatchSnapshot();
    });
});