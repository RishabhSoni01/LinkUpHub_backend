const mongoose =require("mongoose");


mongoose.set("strictQuery", false);
exports.connectDatabase=()=>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((con)=>console.log(`Database is connected successfully :${con.connection.host}`))
    .catch((err)=>console.log(err));
};

// SMTP_SERVICE="gmail"
// SMTP_HOST:"smtp.gmail.com"
// SMTP_PORT:3000
// SMTP:MAIL:"rishabh@gmail.com"
// SMTP_PASSWORD:"hashpass"