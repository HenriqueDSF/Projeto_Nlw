//dados
const proffys = [
   
    {  
         name: "Fábio Farias",
        avatar: "https://scontent.frvd2-1.fna.fbcdn.net/v/t1.0-9/104888198_3432237923472736_7557902697658098651_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFmLcN6HCGuSf-Gv62Jf2VkO3QjIV0KJVk7dCMhXQolWY6FuNoGhZTvznhF_TFIKARUA4My4zRRQGyttkiSBupn&_nc_ohc=U3q_yTXF5QwAX9bap6a&_nc_ht=scontent.frvd2-1.fna&oh=4dfa843702c7472a43546a1731d7d932&oe=5F54C845",
        whatsapp: "66992920231",
        bio: "Um excelente matemático do século XXI<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Educação Fisica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
    
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = + subjectNumber - 1
    return subjects [position]
}
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

      data.subject = getSubject(data.subject)
      proffys.push(data)


      return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

//servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquivos estaticos (css,scripts e imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.listen(5500)
 