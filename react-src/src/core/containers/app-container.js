import { connect } from 'react-redux'
import App from '../components/app'

const mapStateToProps = (state) => {
  return {
    app:state.main.app
  }
}

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer
