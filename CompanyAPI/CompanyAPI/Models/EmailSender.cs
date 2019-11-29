using System;
using MimeKit;
using MailKit.Net.Smtp;
using Quartz;
using System.Threading.Tasks;

namespace CompanyAPI.Models
{
    public class EmailSender: IJob
    {
        private static string companyName = "Clean and Code";
        private static string adminEmail = "cleanandcode@yandex.ru";
        private static string adminPassword = "shandao";

        private string email = "vladimir.golovkin16@yandex.ru";
        private string subject = "Напоминание об уборке";
        private string message = "Будь дома 29.11.2019 в 18:30, мудила";

        public async Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine("kek1");

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

        //public static async Task SendEmailAsync(string email, string subject, string message) {
        //    var emailMessage = new MimeMessage();

        //    emailMessage.From.Add(new MailboxAddress(companyName, adminEmail));
        //    emailMessage.To.Add(new MailboxAddress("", email));
        //    emailMessage.Subject = subject;
        //    emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        //    {
        //        Text = message
        //    };

        //    using (var client = new SmtpClient())
        //    {
        //        client.MessageSent += (sender, args) => { _ = args.Response; };
        //        client.ServerCertificateValidationCallback = (s, c, h, e) => true;

        //        await client.ConnectAsync("smtp.yandex.ru", 465, true);
        //        await client.AuthenticateAsync(adminEmail, adminPassword);
        //        await client.SendAsync(emailMessage);
        //        await client.DisconnectAsync(true);
        //    }
        //}
    }
}
