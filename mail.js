var nodemailer = require('nodemailer');
var fs = require('fs');
var text = fs.readFileSync('/home/file/base','utf8')
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ntugtmail@gmail.com',
        pass: text
    }
});

var mailOptions = {
    from: 'GreenTree<senderaddress>', // sender address
    to: 'Dear <receiveraddress>', // list of receivers
    subject: 'Subjects', // Subject line
    html: '<b>Hello world</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
