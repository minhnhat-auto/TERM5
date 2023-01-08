let users = [
    {
        email: "abc@gmail.com", password: "minhnhat"
    }
]

export const signIn = (req, res) => {
    let result = users.find(user => user.email == req.body.email);
    if (result) {
        if (result.password == req.body.password) {
            res.status(200).send(
               {messeage: "success"}
        )
        } else {
            res.status(200).send({
                messeage: "wrong passw"
            })
        }
    }else{
        res.status(200).send({
            messeage: "user not found!"
        })
    }
}