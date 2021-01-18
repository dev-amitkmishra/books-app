import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../components/atoms/search';

configure({ adapter: new Adapter() });

describe('Search', () => {
    it('should be defined', () => {
        expect(Search).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Search name='search test' />
        );
        expect(tree).toMatchSnapshot();
    });
});