export default function generatePass() {
    let password: string = ''
    let characters:string = 'Aa@#1234567890FDSfjsdFKdsfjsdf'

    for(let i = 0; i < 8; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}