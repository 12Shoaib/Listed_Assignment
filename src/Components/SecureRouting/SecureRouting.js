import { Outlet, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {loginStatus} from '../../Recoil/RecoilAtom'


const SecureRouting = () => {
    const login = useRecoilValue(loginStatus)

    return(
        <div>
            {
                login ?
                <Outlet />
                :
                <Navigate to='/'/>
            }

        </div>
    )
}

export default SecureRouting
