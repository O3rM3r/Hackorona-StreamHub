using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LiveyServer.Models
{
    public class Category
    {
        public Category()
        {
            this.Items = new HashSet<Item>(); //defines many to many
        }

        [Key]
        [Column(Order = 1)]
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public virtual ICollection<Item> Items { get; set; }
    }
}