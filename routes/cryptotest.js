const bcrypt=require('bcryptjs');

(async ()=>{
    let hash=await bcrypt.hashSync('My password', 8);
    console.log(hash)

})();