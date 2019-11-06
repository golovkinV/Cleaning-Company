using System;
using System.Data.Entity;

namespace CompanyAPI.Models
{
    public class CompanyContext: DbContext
    {
        public DbSet<Service> Services { get; set; }

        public CompanyContext() {
            this.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }
    }
}