using System;
using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;

namespace CompanyAPI.Models
{
    public static class EmailSender
    {
        private static string adminEmail = "cleanandcode@yandex.ru";
        private static string adminPassword = "shandao";

        public static void SendEmailAsync(string email, string subject, string message) {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Clean and Code", adminEmail));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                client.MessageSent += (sender, args) => { _ = args.Response; };
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                client.Connect("smtp.yandex.ru", 465, true);
                client.Authenticate(adminEmail, adminPassword);
                client.Send(emailMessage);
                client.Disconnect(true);
            }
        }
    }
}
