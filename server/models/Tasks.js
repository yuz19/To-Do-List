const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const taskSchema=new Schema({
   title:{
    type:String,
    required:true
   },
   body:{
    type:String,
    required:true
   },

},{ timestamps:true });

// slug:{
//    type:String,
//    required:true,
//    unique:true
// }
// taskSchema.pre('validate',function(next){
//    if(this.title){
//       this.slug=slugify(this.title,{lower: true,strict: true})
//    }

// })
const Task=mongoose.model('Task',taskSchema)

module.exports=Task