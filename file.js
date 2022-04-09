function singup() {
    var a = []
    var work = readlinesync.question("what you want to do")
    if (work == "singup") {
        var validName = /[a-zA-Z]/
        var name1 = readlinesync.question("enter your name")
        if (validName.test(name1)) {
            a.push(name1)
            var passwordcheack = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
            var password = readlinesync.question("enter password")
            if (passwordcheack.test(password)) {
                var rechack_password = readlinesync.question("enter password")
                if (password === rechack_password) {
                    a.push(password)
                    console.log("password is correct")
                    var chackemail = /^[A-Za-z0-9]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.]{2,}$/
                    var email_id = readlinesync.question("enter email id")
                    if (chackemail.test(email_id)) {
                        a.push(email_id)
                        console.log("imail is valid")
                        var Mnomber = readlinesync.question("enter mobile number")
                        var chackMnomber = /^[789][0-9]{9}$/
                        if (chackMnomber.test(Mnomber)) {
                            a.push(Mnomber)
                            console.log("valid moblie number")
                            var i = 0
                            var obj = {}
                            var list = ["Name", "Password", "Email Id", "Mobile No"]
                            while (i < list.length) {
                                obj[list[i]] = a[i]
                                i++
                            }
                            var list_2 = []
                            list_2.push(obj)
                            var jsons = JSON.stringify(list_2, null, 3);
                            fs.writeFileSync('file1.json', jsons)
                                // console.log(obj)
                        } else {
                            console.log("not valid mobile number")
                        }

                    } else {
                        console.log("not valid email id")
                    }
                } else {
                    console.log("not conform password")
                }

            } else {
                console.log("enter strong password")
            }
        } else {
            console.log("not valid name")
        }
    }
}
var fs = require("fs")
var readlinesync = require("readline-sync")
const path = "file1.json";
var File_Exit = (fs.existsSync(path))
if (File_Exit == false) {
    singup()
} else {
    const login_signup = readlinesync.question("enter your choice login or signup page :")
    if (login_signup === "signup") {
        var a = []
        d = fs.readFileSync('file1.json', "utf-8")
        const data = JSON.parse(d)
        var name1 = readlinesync.question("enter the name")
        var validName = /[a-zA-Z]/
        if (validName.test(name1)) {
            var passwordcheack = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
            var password = readlinesync.question("enter password")
            if (passwordcheack.test(password)) {
                var rechack_password = readlinesync.question("enter password")
                if (password === rechack_password) {
                    for (var i in data) {
                        for (var j in data[i]) {
                            if (data[i][j] === name1 && data[i][j] === password) {
                                var j8 = data[i][j]
                            }
                        }
                    }
                    if (name1 === j8 && password === j8) {
                        console.log("data is already exist")
                        console.log(data)
                    } else {
                        a.push(name1)
                        a.push(password)
                        var chackemail = /^[A-Za-z]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
                        var email_id = readlinesync.question("enter email id")
                        if (chackemail.test(email_id)) {
                            a.push(email_id)
                            console.log("imail is valid")
                            var Mnomber = readlinesync.question("enter mobile number")
                            var chackMnomber = /^[789][0-9]{9}$/
                            if (chackMnomber.test(Mnomber)) {
                                a.push(Mnomber)
                                console.log("valid moblie number")
                                var i = 0
                                var obj = {}
                                var list = ["Name", "Password", "Email Id", "Mobile No"]
                                while (i < list.length) {
                                    obj[list[i]] = a[i]
                                    i++
                                }

                                data.push(obj)
                                var jsons = JSON.stringify(data, null, 3);
                                fs.writeFileSync('file1.json', jsons)
                                    // console.log(obj)
                            } else {
                                console.log("not valid mobile nomber")
                            }
                        } else {
                            console.log("invalid imail id")
                        }
                    }
                } else {
                    console.log("password recheake wrong")
                }

            } else {
                console.log("enter strong password")
            }

        } else {
            console.log("invlid name")
        }
    } else {
        var name2 = readlinesync.question("enter user name")
        if (name2 == "login") {
            var password1 = readlinesync.question("enter password")
            d = fs.readFileSync('file1.json', "utf-8")
            const data = JSON.parse(d)
            for (var i in data) {
                for (var j in data[i]) {
                    if (data[i][j] === (name2, password1)) {
                        console.log(data[i])
                    }
                }
            }
        }
    }
}