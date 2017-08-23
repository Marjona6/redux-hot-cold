import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';
import store from '../store';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});
});