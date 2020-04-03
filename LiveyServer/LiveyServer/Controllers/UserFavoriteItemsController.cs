using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LiveyServer.Models;

namespace LiveyServer.Controllers
{
    public class UserFavoriteItemsController : ApiController
    {
        private LiveyTvContext db = new LiveyTvContext();

        // GET: api/UserFavoriteItems
        public IQueryable<UserFavoriteItem> GetUserFavoriteItems()
        {
            return db.UserFavoriteItems;
        }

        // GET: api/UserFavoriteItems/5
        [ResponseType(typeof(UserFavoriteItem))]
        public IHttpActionResult GetUserFavoriteItem(int id)
        {
            UserFavoriteItem userFavoriteItem = db.UserFavoriteItems.Find(id);
            if (userFavoriteItem == null)
            {
                return NotFound();
            }

            return Ok(userFavoriteItem);
        }

        // PUT: api/UserFavoriteItems/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserFavoriteItem(int id, UserFavoriteItem userFavoriteItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userFavoriteItem.UserFavoriteItemID)
            {
                return BadRequest();
            }

            db.Entry(userFavoriteItem).State = System.Data.Entity.EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserFavoriteItemExists(id))
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

        // POST: api/UserFavoriteItems
        [ResponseType(typeof(UserFavoriteItem))]
        public IHttpActionResult PostUserFavoriteItem(UserFavoriteItem userFavoriteItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserFavoriteItems.Add(userFavoriteItem);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userFavoriteItem.UserFavoriteItemID }, userFavoriteItem);
        }

        // DELETE: api/UserFavoriteItems/5
        [ResponseType(typeof(UserFavoriteItem))]
        public IHttpActionResult DeleteUserFavoriteItem(int id)
        {
            UserFavoriteItem userFavoriteItem = db.UserFavoriteItems.Find(id);
            if (userFavoriteItem == null)
            {
                return NotFound();
            }

            db.UserFavoriteItems.Remove(userFavoriteItem);
            db.SaveChanges();

            return Ok(userFavoriteItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserFavoriteItemExists(int id)
        {
            return db.UserFavoriteItems.Count(e => e.UserFavoriteItemID == id) > 0;
        }
    }
}