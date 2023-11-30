import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/userService";
import {getAllVms} from "../../services/vmService";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [vms, setVms] = useState([])

    // when the Home component mounts get all users
    useEffect(() => {
        getAllUsers()
            .then(data => {
                    setUsers(data)
                }
            )
    }, [])

    // when the Home component mounts get all vms
    useEffect(() => {
        getAllVms()
            .then(data => {
                    setVms(data)
                    // set loading to false
                    setIsLoading(false)
                }
            )
    }, [])

    return (
        <div className="home">
            {isLoading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="home-content">
                    <h1 className="page-title">Existing users:</h1>
                    <div className="users-list">
                        <ul>
                            {users.map(user => {
                                return (
                                    <li className="user" key={user.id}>
                                        {user.username}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <hr className="horizontal-divider"/>

                    <h1 className="page-title">Existing vms:</h1>
                    <div className="vms-list">
                        <ul>
                            {vms.map(vm => {
                                return (
                                    <li className="vm" key={vm.id}>
                                        {vm.vm_name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
