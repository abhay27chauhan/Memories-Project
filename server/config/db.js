import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://memories:memoriesreactproject@cluster0.m6prm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

export default connectDB;