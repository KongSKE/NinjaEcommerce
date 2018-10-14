const axios = require('axios')
const URL = require('../config/database')

class Feedback {
    async addFeedback(data){
        try{
            console.log(data)
            const response = await axios.post(URL.addFeedback,{},{
                headers:{
                    'name': data.name,
                    'feedback' : data.feedback,
                }
            })
            return response.data
        }catch(e){
            console.log('add feedback error')
            return e.data
        }
        
    }

    async getFeedbacks(){
        try {
            const response = await axios.get(URL.getFeedbacks)
            return response.data
        } catch (error) {
            console.log('get feedbacks error')
        }
    }
}
module.exports = Feedback