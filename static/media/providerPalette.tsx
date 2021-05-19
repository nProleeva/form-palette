import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {reducer as store} from "./redux/store";

import Palette from "./palette";
import React from "react";

const ProviderPalette:React.FC<{}> = () => {
    return(
        <Provider store={createStore(store)}>
            <Palette />
        </Provider>
    )
}

export default ProviderPalette