import mongoose from 'mongoose'
import app from './app'



const port = 5000

main().catch(err => console.log(err));
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log(` Database Connection successful`);
    }
    catch (error) { ` Failed to connect database ` }
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
main();