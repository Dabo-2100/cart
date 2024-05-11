import { useEffect, useState } from "react"

export default function CartPage() {
    const [userInfo, setUserInfo] = useState(
        {
            username: "Ahmed",
            userAge: 20,
        }
    );

    function addToArr() {
        let oldObj = { ...userInfo };
        oldObj.userAge++;
        setUserInfo(oldObj);
    }

    useEffect(() => {

    }, []);
    return (
        <div className="col-12" id="CartPage">
            <button onClick={() => { addToArr() }}>Add New Item</button>
            {
                userInfo.userAge
            }
        </div>
    )
}
