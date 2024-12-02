import { Profile } from "../components/Profile";
import { SearchBox } from "../components/SearchBox";
import { MenuBar } from "../components/MenuBar";
import { Pages } from "../components/Pages";
import { NewList } from "../components/NewList";


export function Sidebar(){
    return <div className="flex flex-col bg-white pr-4">
        <Profile/>
        <SearchBox/>
        <MenuBar/>
        <Pages/>
        <NewList/>
    </div>
}