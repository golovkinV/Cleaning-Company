using System;
using System.Data.Entity;

namespace CompanyAPI.Models
{
    public class CompanyContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Condition> Conditions { get; set; }
        public DbSet<Order> Orders { get; set; }


        public CompanyContext()
        {
            this.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }
    }
}