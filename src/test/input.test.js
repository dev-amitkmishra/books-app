import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../components/atoms/input';

configure({ adapter: new Adapter() });
const mockFn = jest.fn();

describe('Input', () => {
    it('should be defined', () => {
        expect(Input).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Input name='input test' />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render placeholder text', () => {
        const placeholderText = "Search book";
        const tree = shallow(
            <Input name='input test' type="text" value="" changeHandler={ mockFn } placeholderText={placeholderText} />
        );
        expect(tree.prop('placeholder')).toEqual(placeholderText);
    });

});