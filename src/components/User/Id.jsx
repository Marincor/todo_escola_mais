import { useContext, useEffect } from "react"
import { UserIdContext } from "../../contexts/User/id"
import getUserById from "../../services/User/id"

export default function UserId({id}) {

    const {userInfo, setUserInfo} = useContext(UserIdContext)


    useEffect(()=>{

        // api request, getting user by id //

        try {

            console.log('loading')
            getUserById(id).then(res => setUserInfo(res))
        }

        catch(error) {

            console.log(error)
        }
        finally{

            console.log('loading off' )
        }

    }, [id])

    console.log(userInfo)


    return(

        <div>
                {userInfo?.map((task) =>{

                   return (

                    <li>
                            <h2>{task.title}</h2>
                            <p>{task.body}</p>

                    </li>
                   )

                })}
        </div>
    )
}