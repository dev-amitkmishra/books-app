import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/atoms/button';

configure({ adapter: new Adapter() });
const mockFn = jest.fn();

describe('Button', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });

    it('should render correctly', () => {
        const tree = shallow(
            <Button id="button" type="button" text='button' isTop={false} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should call click handler when button is clicked', () => {
        const tree = shallow(
          <Button text="button" type="button" isTop={false} clickHandler={ mockFn } />
        );

        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });

});