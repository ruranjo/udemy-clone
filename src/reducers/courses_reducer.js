import { GET_COURSES, GET_SINGLE_COURSE, GET_CATEGORIES } from "../actions/actions"

const sidebar_reducer = (state, action) =>{
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state, categories: action.payload
            }
        break;
        
        case GET_SINGLE_COURSE:
            return {
                ...state, single_course :  action.payload
            }
        break;

        case GET_COURSES:
            return {
                ...state, courses: action.payload
            }
        break;

        default:
            throw new Error(`No matching "${action.type}" - action type`);
        break;
      }
}

export default sidebar_reducer

/*
import {
    GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE
} from "../actions";

const courses_reducer = (state, action) => {
    if(action.type === GET_COURSES){
        return {
            ...state,
            courses: action.payload
        }
    }

    if(action.type === GET_SINGLE_COURSE){
        return {
            ...state,
            single_course: action.payload
        }
    }

    if(action.type === GET_CATEGORIES){
        return {
            ...state,
            categories: action.payload
        }
    }

    throw new Error(`No matching "${action.type}" - action type`);
}

export default courses_reducer;

*/