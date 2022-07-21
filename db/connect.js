const mongoose= require("mongoose")
const connectionString = "mongodb+srv://luwafemi:wFgffsx2lPnUJpbq@cluster0.ppvhn.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

async function main(){                  
    try {
           const conn = await mongoose.connect(connectionString, 
                { useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false,useCreateIndex : true })
            console.log(`MongoDB Connected: ${conn.connection.host}`);   
  } catch (error) {    
            console.log(error);
    }
}
main()                    