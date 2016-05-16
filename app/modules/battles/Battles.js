import React, { StyleSheet, View ,Text} from 'react-native'
import { connect } from 'react-redux'

import { Counters, Counter } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
  },
})

const renderCounters = (counters, decrement, increment, incrementWithDelay) => {
  return Object.keys(counters).map((id) => {
    const value = counters[id]
    return (
      <Counter
        key={id}
        decrementFn={() => decrement(id)}
        incrementFn={() => increment(id)}
        incrementWithDelayFn={() => incrementWithDelay(id)}>
        {value}
      </Counter>
    )
  })
}

const Battles = (props) => {
  const {
    actions,
    addNewCounter,
    counters,
    decrement,
    increment,
    incrementWithDelay
  } = props

  return (
    <View style={styles.container}>
      <Counters addFn={addNewCounter}>
        {renderCounters(counters, decrement, increment, incrementWithDelay)}
      </Counters>
      <Text style={styles.text} onPress={actions.routes.game()}>Start Game</Text>

    </View>
  )
}

Battles.displayName = 'Battles'

//it is a good practice to always indicate what type of props does your component
//receive. This is really good for documenting and prevent you from a lot of bug during
//development mode. Remember, all of these will be ignored once you set it to production.
Battles.propTypes = {
  addNewCounter: React.PropTypes.func.isRequired,
  counters: React.PropTypes.object.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  incrementWithDelay: React.PropTypes.func.isRequired
}

//Here's the most complex part of our app. connect is a function which selects,
//which part of our state tree you need to pass to your component. also, since
//my App component is pure function, i am injecting addNewCounter, increment and
//decrement functions wrapped with dispatch. I think this is the best and cleanest
//way to seperate your connect and your pure function.
export default connect(
  (state) => ({
    counters: state.battles.counters
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    increment: (id) => dispatch(actions.increment(id)),
    decrement: (id) => dispatch(actions.decrement(id)),
    incrementWithDelay: (id) => dispatch(actions.incrementWithDelay(id))
  })
)(Battles)
