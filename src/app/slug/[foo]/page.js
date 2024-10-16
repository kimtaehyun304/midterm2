//import { useRouter } from "next/router"


export default function Slug(props){

    //const {router} = useRouter()
    //{router.pathname}
    return(
        <div>
            <h1>
                파라미터 {props.params.foo} / {props.searchParams.pid}
            </h1>
        <h2>src/app/slug/page.js </h2>
        </div>
    )
}

