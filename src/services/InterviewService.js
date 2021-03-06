import { getDatabase, get, ref } from "@firebase/database";

//const db = get(getDatabase()).ref("/projects");
const database = getDatabase()

const db = get(ref(database, "/projects"));


const getAll = () => {
    return db;
};


const create = (data) => {
    return db.push(data)
};

const update = (key, data) => {
    return db.child(key).update(data)
};

const remove = (key) => {
    db.child(key).remove()
};

const removeAll = () => {
    return db.remove()
};


export default {
    getAll,
    create,
    update,
    remove,
    removeAll
};