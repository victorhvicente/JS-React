import {Link} from "react-router-dom";
import Gallery from "./Gallery.js";
import { Profile } from './Gallery.js';
import Avatar from './Avatar.js';
import PackingList from "./PackingList.js";
import List from "./List.js";


export default function Atividade03() {
    
    return (
        <>
            <h1>Atividade03</h1>
            <br/>
            <Profile />
            <br/>
            <Avatar />
            <br/>
            <PackingList />
            <br/>
            <List />
        </>
    );
}