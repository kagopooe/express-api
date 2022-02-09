const express = require('express')
const res = require('express/lib/response')
const projectRoutes = require('./routes/projectRoutes')
const testimonialRoutes = require("./routes/testimonialRoutes")

const app = express()

app.use(express.json())

app.get('/' ,(req,res) => {
    res.send({msg: "Welcome to Kago's backend"})

})






app.use("/foodItems", projectRoutes)
app.use ("/testimonials", testimonialRoutes)







const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
