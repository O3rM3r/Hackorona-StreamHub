using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LiveyServer.Models
{
    public class Platform
    {
        public Platform()
        {
            this.Items = new HashSet<Item>(); //defines many to many
        }
        [Key]
        [Column(Order = 1)]
        public int PlatformID { get; set; }
        public string PlatformName { get; set; }
        public virtual ICollection<Item> Items { get; set; }
    }
}