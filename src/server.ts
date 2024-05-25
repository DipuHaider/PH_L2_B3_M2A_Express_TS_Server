import app from "./app";
import config from "./app/config"
import mongoose from "mongoose";

async function main() {

    try{
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
          console.log(`PH_L2_B3_M2A_Express_TS_Server listening on port ${config.port}`)
        })
    }catch(err){
        console.log(err)
    }
}

main();

