import { Provider } from "react-redux"
import Routes from "./src/Routes"
import { store } from "./src/store"

export default () => {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}