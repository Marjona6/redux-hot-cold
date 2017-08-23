import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});

	it('Should hide the info modal if showInfoModal is false', () => {
        const wrapper = shallow(<Header showInfoModal={false} />);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    });

    it('Should render the info modal if showInfoModal is true', () => {
        const wrapper = shallow(<Header showInfoModal={true} />);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    });
});