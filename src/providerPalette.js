import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reducer as store} from "./redux/store";

import Palette from "./palette";

function ProviderPalette() {
    return(
        <Provider store={createStore(store)}>
            <Palette />
        </Provider>
    )
}

export default ProviderPalette