import { createContext, useContext, useEffect, useReducer } from "react"
import {GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE} from '../actions/actions'
import coursesData from '../utils/data'

import reducer from '../reducers/courses_reducer'

const initialState = {
    courses:[],
    single_course: {},
    categories: [],
}

const CoursesContext = createContext();


export const CoursesProvider = ({children}) => {
    const [state, dispatch] = useReducer( reducer,initialState);

    const fetchCourse = () =>{
        dispatch({type: GET_COURSES, payload: coursesData})
    }

    const fetchSingleCourse = (id) =>{
        const singleCourse = coursesData.find((course) => course.id === id )
        dispatch({type: GET_SINGLE_COURSE, payload: singleCourse})
    }
    const fetchCategories = () => {
        const categories = [...new Set(coursesData.map(item => item.category))];
        dispatch({type: GET_CATEGORIES, payload: categories});
    }
 
    useEffect(() => {
        fetchCourse();
        fetchCategories();
    }, []);

    return (
        <CoursesContext.Provider value = {{
            ...state,
            fetchSingleCourse
        }}>
            {children}
        </CoursesContext.Provider>
    )
}

export const useCoursesContext = () => {
    return useContext(CoursesContext);
}

