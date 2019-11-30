using System;
using MimeKit;
using MailKit.Net.Smtp;
using Quartz;
using System.Threading.Tasks;

namespace CompanyAPI.Models
{
    public class EmailSender
    {
        private static string companyName = "Clean and Code";
        private static string adminEmail = "cleanandcode@yandex.ru";
        private static string adminPassword = "shandao";

        public static async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress(companyName, adminEmail));
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

                await client.ConnectAsync("smtp.yandex.ru", 465, true);
                await client.AuthenticateAsync(adminEmail, adminPassword);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }
    }
}
