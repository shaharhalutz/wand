import { NAME } from './constants'
import BattlesMod from './BattlesMod'
import reducer from './reducer'
import * as actions from './actions'

//to reduce the number of bugs, make sure not to export action types.
//action types are internal only and only actions and reducer should access them

export default {
  NAME,
  BattlesMod,
  reducer,
  actions
}
