﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CompanyAPI.Models;
using System.Web.Http.Cors;

namespace CompanyAPI.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        private CompanyContext db = new CompanyContext();

        // GET: api/Orders
        public IQueryable<Order> GetOrders()
        {
            return db.Orders
                .Include(o => o.Service)
                .Include(o => o.Condition);
        }

        // GET: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult GetOrder(int id)
        {
            Order order = db.Orders
                .Where(o => o.Id == id)
                .Include(o => o.Service)
                .Include(o => o.Condition)
                .FirstOrDefault();

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // GET: api/orders/client_orders/1
        [HttpGet]
        [Route("client_orders/{client_id}")]
        public IQueryable<Order> ClientOrders(int client_id)
        {
            var orders = db.Orders
                .Where(o => o.ClientId == client_id)
                .Include(o => o.Service)
                .Include(o => o.Condition);

            return orders;
        }

        [HttpGet]
        [Route("end_orders")]
        public IQueryable<Order> AllEndOrders()
        {
            var orders = db.Orders
                .Where(o => o.ConditionId == 3)
                .Include(o => o.Service)
                .Include(o => o.Condition);

            return orders;
        }

        [HttpGet]
        [Route("good_orders")]
        public IQueryable<Order> AllGoogOrders() {
            var orders = db.Orders
                .Where(o => o.ConditionId == 2)
                .Include(o => o.Service)
                .Include(o => o.Condition);

            return orders;
        }

        // GET: api/orders/cleaner_orders/1
        [HttpGet]
        [Route("cleaner_orders/{cleaner_id}")]
        public IQueryable<Order> CleanerOrders(int cleaner_id)
        {
            var orders = db.Orders
                .Where(o => o.CleanerId == cleaner_id)
                .Include(o => o.Service)
                .Include(o => o.Condition);

            return orders;
        }

        [HttpGet]
        [Route("manager_orders")]
        public IQueryable<Order> ManagerOrders()
        {
            var orders = db.Orders
                .Where(o => o.ConditionId == 4)
                .Include(o => o.Service)
                .Include(o => o.Condition);

            return orders;
        }
        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOrder(int id, Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            db.Entry(order).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Orders
        [ResponseType(typeof(Order))]
        public IHttpActionResult PostOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Orders.Add(order);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [ResponseType(typeof(Order))]
        public IHttpActionResult DeleteOrder(int id)
        {
            Order order = db.Orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            db.Orders.Remove(order);
            db.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OrderExists(int id)
        {
            return db.Orders.Count(e => e.Id == id) > 0;
        }
    }
}