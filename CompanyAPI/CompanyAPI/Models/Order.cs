using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CompanyAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int ManagerId { get; set; }
        public int CleanerId { get; set; }
        public string Address { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }

        public int ServiceId { get; set; }
        public Service Service { get; set; }

        public int ConditionId { get; set; }
        public Condition Condition { get; set; }
    }
}