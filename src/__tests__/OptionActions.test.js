import { OptionActions } from '../store/actions/OptionActions'
import { ACTIONS } from '../store/action-constants/Actions'

describe('actions', () => {
  it('should create an action to toggle an option', () => {
    const value = true
    const id = '11';
    const expectedAction = {
      type: ACTIONS.OPTIONS_BY_ID.OPTIONS_BY_ID_TOGGLE,
      payload:{ 
            value,
            id,
        }
    }
    expect(OptionActions.OptionToggle({ value,id })).toEqual(expectedAction)
  })
})