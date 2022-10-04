import Card from "../components/Card"
import Default from "../components/Default"

export const menu = (name) => {
    console.log(name)
    switch (name) {
        case 'Feed':
            return <Card />
        default:
            return <Default />
            
    }
}