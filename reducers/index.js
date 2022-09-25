import { combineReducers } from "redux";
import Picture from "./Picture";
import Preview from './Preview';
import DB_Insert from "./DB_Insert";
import User from './User';
import RecipeViewerData from './RecipeViewerData';
export default combineReducers({
    Picture,
    Preview,
    DB_Insert,
    User,
    RecipeViewerData
})