function sendNotification(email) {
     if (email.split('@') != 1)
        return "Invalid Email"


    const notification = email.split('@')
    const username = "zihad.ph";
    const domainName = "gmail.com"
    const notificationMassege = "username+sent you an email from+domainName"

    return notificationMassege
}
