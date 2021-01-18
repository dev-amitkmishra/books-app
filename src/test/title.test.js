import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../components/atoms/title';

configure({ adapter: new Adapter() });

describe('Title', () => {
    it('should be defined', () => {
        expect(Title).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Title name='Title test' />
        );
        expect(tree).toMatchSnapshot();
    });
    it('should title match', () => {
        const tree = shallow(
            <Title title='testing title' />
        );
        expect(tree.prop('title')).toEqual('testing title')
    })
});