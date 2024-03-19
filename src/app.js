
const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'

const dbname = "proj-2"

MongoClient.connect(url, (error, rest1) => {

    if (error) {
        return console.log("Error in connection")
    }
    console.log("All Done")

    const db = rest1.db(dbname)

    db.collection('user').insertOne({

        FName : "Osama",
        LName : "Tamer",
        Age : 22,
        City : "Tama"

    } , (error, data) => {
        if (error) {
            return console.log("ERROR insert !")
        }
        console.log(data.insertedId)
    })

    // ***********************************************************

    db.collection('user').insertMany(
        [
            {
                FName : "Osama",
                LName : "Tamer",
                Age : 22,
                City : "Tama"
            },
            {
                FName : "Peter",
                LName : "Tamer",
                Age : 23,
                City : "Tama"
            },
            {
                FName : "Fady",
                LName : "Tamer",
                Age : 16,
                City : "Tama"
            },
            {
                FName : "marmar",
                LName : "Hany",
                Age : 20,
                City : "Tama"
            },
            {
                FName : "Fam",
                LName : "Gamil",
                Age : 22,
                City : "Tama"
            },
        ], (error , data) => {
            if(error){
                return console.log("ERROR insert(2)")
            }
            console.log(data.insertedCount)
        }
    )



 // ***********************************************************

    // db.collection('user').findOne({_id: mongodb.ObjectId('65f9d496a01018a1e912ecf1')}
    // ,(error,users) => {
    //     if(error){
    //         console.log("ERROR find data !!")
    //     }
    //     console.log(users)
    // })


    // db.collection('user').findOne({FName: "Osama"}
    // ,(error,users) => {
    //     if(error){
    //         console.log("ERROR find data !!")
    //     }
    //     console.log(users)
    // })

    // db.collection('user').find({FName: "Osama"}).limit(2).toArray((error,users) => {
    //     if(error){
    //         return console.log("ERROR IN FIND DATA")
    //     }
    //     console.log(users)
    // })  
    
    db.collection('user').find({FName: "Osama"}).limit(2).count((error,users) => {
        if(error){
            return console.log("ERROR IN FIND DATA")
        }
        console.log(users)
    }) 



})

