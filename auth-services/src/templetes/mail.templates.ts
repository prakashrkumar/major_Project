export const sendMailTemplate=(otp:number)=>{
    return `
    html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OTP Verification</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#f4f7fc;
    font-family:Arial, Helvetica, sans-serif;
}

.container{
    width:100%;
    max-width:600px;
    margin:40px auto;
    background:#ffffff;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

.header{
    background:linear-gradient(135deg,#2563eb,#1e40af);
    padding:35px;
    text-align:center;
}

.header h1{
    color:#fff;
    font-size:32px;
}

.content{
    padding:40px 35px;
    color:#444;
    line-height:1.8;
}

.content h2{
    color:#111827;
    margin-bottom:20px;
}

.otp-box{
    width:220px;
    margin:30px auto;
    background:#eff6ff;
    border:2px dashed #2563eb;
    border-radius:12px;
    text-align:center;
    padding:18px;
    font-size:34px;
    font-weight:bold;
    color:#2563eb;
    letter-spacing:8px;
}

.expiry{
    text-align:center;
    color:#dc2626;
    font-size:16px;
    font-weight:600;
    margin-top:15px;
}

.note{
    margin-top:25px;
    background:#fff7ed;
    padding:18px;
    border-left:5px solid #f97316;
    border-radius:8px;
    color:#555;
}

.footer{
    background:#111827;
    text-align:center;
    padding:25px;
    color:#d1d5db;
    font-size:14px;
}

.footer a{
    color:#60a5fa;
    text-decoration:none;
}

.founder{
    color:#fff;
    font-weight:bold;
    margin-top:10px;
}
</style>

</head>
<body>

<div class="container">

    <div class="header">
        <h1>OTP Verification</h1>
    </div>

    <div class="content">

        <h2>Hello,</h2>

        <p>
            Thank you for choosing our website. To complete your verification,
            please use the One-Time Password (OTP) below:
        </p>

        <div class="otp-box">
           ${otp}
        </div>

        <div class="expiry">
            ⏰ This OTP will expire in 5 minutes.
        </div>

        <div class="note">
            <strong>Security Notice:</strong><br>
            Never share your OTP with anyone. Our team will never ask for your OTP.
            If you didn't request this verification, please ignore this email.
        </div>

        <p style="margin-top:30px;">
            Regards,<br><br>
            <strong>Prakash Kumar</strong><br>
            Founder
        </p>

    </div>

    <div class="footer">

        Need Help?<br><br>

        Support Email:<br>

        <a href="mailto:prakashr17032000@gmail.com">
            prakashr17032000@gmail.com
        </a>

        <div class="founder">
            © 2026 Prakash Kumar. All Rights Reserved.
        </div>

    </div>

</div>

</body>
</html>


    `

}