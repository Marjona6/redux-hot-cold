import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Should dispatch makeGuess when form is submitted', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch} />);
		const value = "10";
		// what is this next line doing exactly?
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
	});

	it('Should reset input when form is submitted', () => {
		const wrapper = mount(<GuessForm dispatch={() => {}}/>);
		const input = wrapper.find('input[type="text"]');
		input.node.value = 10;
		wrapper.simulate('submit');
		expect(input.node.value).toEqual('');
	});
});