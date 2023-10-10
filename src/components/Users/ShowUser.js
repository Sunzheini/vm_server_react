import React from "react";

export default function ShowUser(props) {
    const { userData } = props; // Destructure the user data prop

    console.log('userData:', userData);

    return (
        <div>
            {/* Check if userData exists before accessing its properties */}
            {userData && (
                <div>
                    {/* Access properties like username */}
                    <p>Username: {userData.username}</p>
                </div>
            )}
        </div>
    );
}
