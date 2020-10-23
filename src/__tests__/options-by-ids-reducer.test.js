import { optionsByIdsReducer } from '../store/reducers/options-by-ids-reducer';
import { OptionActions } from '../store/actions/OptionActions'

describe('toggle an option reducer', () => {

    const initialState = {
        '11': { id: '11', name: 'Aashiya Jayavant', selected: false}
    ,}
  it('should return the initial state', () => {
    expect(optionsByIdsReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle toggle option', () => {
    expect(
        optionsByIdsReducer(initialState, OptionActions.OptionToggle({ id: '11', value: true }))
    ).toEqual({
        '11': { id: '11', name: 'Aashiya Jayavant', selected: true}
    ,})

  })
})