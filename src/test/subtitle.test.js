import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Subtitle from '../components/atoms/subtitle';

configure({ adapter: new Adapter() });

describe('Subtitle', () => {
    it('should be defined', () => {
        expect(Subtitle).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Subtitle name='subtitle test' />
        );
        expect(tree).toMatchSnapshot();
    });
});