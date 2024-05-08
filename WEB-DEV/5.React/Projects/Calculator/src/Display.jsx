import App from "./App"
export default function Display(props){
    return(
        <div className="flex items-end justify-end w-full bg-white min-h-14 ">
            <p className="overflow-auto">{props.value}</p>
        </div>
    )
}
 