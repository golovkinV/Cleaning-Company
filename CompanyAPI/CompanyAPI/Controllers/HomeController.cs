using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using CompanyAPI.Models;

namespace CompanyAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            //EmailSheduler.Start();
            //_ = EmailSender.SendEmailAsync("vladimir.golovkin16@yandex.ru", "Напоминание об уборке", "Будь дома 29.11.2019 в 18:30, мудила");
            return View();
        }
    }
}
