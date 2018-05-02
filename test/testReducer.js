import reducer from 'reducers';
import actions from 'actionCreators';

describe('Test reducer', () => {
    it('Return initial state with test action', () => {
        expect(reducer(undefined, actions.boilerPlateTest())).toEqual({});
    });
});
