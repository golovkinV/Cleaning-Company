using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CompanyAPI.Models
{
    public class User
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string SecondName { get; set; }

        public string Patronymic { get; set; }

        public string Phone { get; set; }

        public int Role_id { get; set; }

        public Role Role { get; set; }
    }
}