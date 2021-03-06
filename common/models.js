
module.exports = {
    user: {
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    commodity: {
        name: String,
        price: Number,
        imgSrc: String
    },
    cart:{
        uId: { type: String },
        cId: { type: String },
        cName: { type: String },
        cPrice: { type: String },
        cImgSrc: { type:String } ,
        cQuantity: { type: Number },
        cStatus : { type: Boolean, default: false  }
    },
    score_table: {
        id: { type: String },
        color: { type: String }
    },
    week_eva: {
        eva: { type: String },
        eva_id: { type: Number }
    },
    diary: {
        id: { type: Number },
        content: { type: String }
    },
    diary_week: {
        id: { type: Number },
        amount: { type: Number }
    }
};
