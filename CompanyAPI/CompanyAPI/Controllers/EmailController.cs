using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Mvc;
using CompanyAPI.Models;

namespace CompanyAPI.Controllers
{
    public class EmailController : ApiController
    {
        // POST: api/Services
        [ResponseType(typeof(void))]
        public IHttpActionResult PostService(EmailObj emailObj)
        {
            _ = EmailSender.SendEmailAsync(emailObj.Email,
                "Заказ оформлен",
                $"{emailObj.ClientName}, Будь дома {emailObj.Date} в {emailObj.Time}");
            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
