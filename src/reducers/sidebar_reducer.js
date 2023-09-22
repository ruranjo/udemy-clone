import {CLOSE_SIDEBAR, OPEN_SIDEBAR} from '../actions/actions.js'

const sidebar_reducer = (state, action) =>{
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {
                ...state, isSidebarOpen:true
            }
        break;
        
        case CLOSE_SIDEBAR:
            return {
                ...state, isSidebarOpen:false
            }
        break;

        default:
            throw new Error(`No matching "${action.type}" - action type`);
        break;
      }
}

export default sidebar_reducer;

