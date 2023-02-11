import { collection, query, onSnapshot } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

export const getData = () => {
    const data = query(collection(firestore, "notification"));
    const databaseInfo = [];
    const dataIds = [];
    onSnapshot(data, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            databaseInfo.push(doc.data().message);
            dataIds.push(doc.id)
        });
    });
    return {
        'databaseInfo': databaseInfo,
        'dataIds': dataIds
    }
}