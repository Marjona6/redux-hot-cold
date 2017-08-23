import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {
	// dummy data goes here
		it('Should start with an empty array of guesses', () => {
			// I don't understand the '__UNKNOWN' thing
			const state = reducer(undefined, {type: '__UNKNOWN'});
			expect(state.guesses).toEqual([]);
			expect(state.feedback).toEqual('Make your guess!');
			expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
			expect(state.correctAnswer).toBeLessThanOrEqual(100);
			expect(state.showInfoModal).toEqual(false);
		});

		// I don't understand why we need/want this test
		it('Should return the current state on an unknown action', () => {
			let currentState = {};
			const state = reducer(currentState, {type: '__UNKNOWN'});
			expect(state).toBe(currentState);
		});

		describe('newGame', () => {
			it('Should start a new game', () => {
				// simulate existing game mid-game
				let state = {
					guesses: [1, 4, 5, 11],
					feedback: 'Wowsers',
					correctAnswer: -1 // Negative unlike real game
				};
				state = reducer(state, newGame());
				expect(state.guesses).toEqual([]);
				expect(state.feedback).toEqual('Make your guess!');
				expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
				expect(state.correctAnswer).toBeLessThanOrEqual(100);
			});
		});

		describe('makeGuess', () => {
			it('Should make a guess', () => {
				// Fix the correct answer so we know what we're aiming for
	            let state = {
	                guesses: [],
	                feedback: '',
	                correctAnswer: 100
	            };

	            state = reducer(state, makeGuess(25));
	            expect(state.guesses).toEqual([25]);
	            expect(state.feedback).toEqual('You\'re Ice Cold...');

	            state = reducer(state, makeGuess(60));
	            expect(state.guesses).toEqual([25, 60]);
	            expect(state.feedback).toEqual('You\'re Cold...');

	            state = reducer(state, makeGuess(80));
	            expect(state.guesses).toEqual([25, 60, 80]);
	            expect(state.feedback).toEqual('You\'re Warm');

	            state = reducer(state, makeGuess(95));
	            expect(state.guesses).toEqual([25, 60, 80, 95]);
	            expect(state.feedback).toEqual('You\'re Hot!');

	            state = reducer(state, makeGuess(100));
	            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
	            expect(state.feedback).toEqual('You got it!');
			});
		});

		describe('toggleInfoModal', () => {
			it('Should toggle info modal on', () => {
				let state = {
					showInfoModal: false
				};
				state = reducer(state, toggleInfoModal());
				expect(state.showInfoModal).toEqual(true);
			});

			it('Should toggle info modal off', () => {
				let state = {
					showInfoModal: true
				};
				state = reducer(state, toggleInfoModal());
				expect(state.showInfoModal).toEqual(false);
			});
		});
	});