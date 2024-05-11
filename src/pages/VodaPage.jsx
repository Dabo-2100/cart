import { useEffect, useRef, useState } from "react"

export default function VodaPage() {
    const [balance, setBalance] = useState(2600);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let trans = localStorage.getItem("transactions");
        if (trans) {
            let final = JSON.parse(trans);
            if (Array.isArray(final)) {
                setTransactions(final)
            }
        }
        let bal = localStorage.getItem("balance");
        if (bal) {
            setBalance(+bal);

        }
    }, []);
    const addValue = useRef();
    const deposit = () => {
        let objTrans = {
            type: "deposit",
            startBalance: balance,
            value: +addValue.current.value,
            endBalance: balance + +addValue.current.value,
        }
        saveTransAction(objTrans, (balance + +addValue.current.value));
        setBalance(+balance + +addValue.current.value);
        addValue.current.value = "";

    }

    function withdraw() {
        if (balance >= +addValue.current.value) {
            let objTrans = {
                type: "withdraw",
                startBalance: balance,
                value: +addValue.current.value,
                endBalance: balance - +addValue.current.value,
            }
            saveTransAction(objTrans, (balance - +addValue.current.value));
            setBalance(balance - +addValue.current.value);
            addValue.current.value = "";
        }
        else {
            alert('Can not widthdraw bigger than 100')
        }
    }

    function saveTransAction(obj, newBalance) {
        let oldTras = [...transactions];
        oldTras.push(obj);
        setTransactions(oldTras);
        localStorage.setItem("balance", newBalance);
        localStorage.setItem("transactions", JSON.stringify(oldTras));
    }

    return (
        <div className="col-12">
            <h1 className="col-12">Your Balance is : {balance}</h1>
            <input ref={addValue} className="form-control" type="number" />
            <button className="col-6 btn btn-primary" onClick={deposit}>Deposit </button>
            <button className="col-6 btn btn-danger" onClick={() => { withdraw() }}>Withdraw </button>

            <table className="table table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th>-</th>
                        <th>transaction type</th>
                        <th>Before Balance</th>
                        <th>transcation value</th>
                        <th>After Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{el.type}</th>
                                    <th>{el.startBalance}</th>
                                    <th>{el.type == "withdraw" ? -1 * el.value : el.value}</th>
                                    <th>{el.endBalance}</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
