import { getAuth } from "firebase/auth";
import { collection, 
    getFirestore, 
    limit, 
    onSnapshot, 
    orderBy, 
    query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import timeConverter from "./timeConverter";

const LeaderBoard = () => {

    const [top10, setTop10] = useState([])
    const [uid, setUid] = useState(null)

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const result = await query(collection(getFirestore(), 'players'), 
                orderBy('score', 'asc'), 
                limit(10)
            );

            let leaderList = []

            onSnapshot(result, function(snapshot) {
                snapshot.docChanges().forEach(function(change) {
                const message = change.doc.data();
                
                leaderList.push(message)
                });
              });
            console.log(leaderList)
            await setTop10(leaderList)
        }

        const getUid = () => {
            if(getAuth().currentUser) setUid(getAuth().currentUser.uid)
        }

        getUid()
        fetchLeaderboard()
    },[])

    return (
        <div>
            {top10.length ?
            <div>
                <div>TOP 10</div>
                <div className="topTable">
                    {top10.map(line => (
                    <div className={line.id === uid ? "lineYou" : "lineElse"} key={line.id}>
                        <div className="nameField">{line.id === uid ? "YOU" : line.name}</div>
                        <div>{timeConverter(line.score)}</div>
                    </div>
                ))} 
                </div>
            </div>: null}
        </div>
    )

}

export default LeaderBoard
