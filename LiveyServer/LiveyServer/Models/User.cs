using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LiveyServer.Models
{
    public class User
    {
        [Key]
        [Column(Order = 1)]
        public int UserID { get; set; }
        public string Username { get; set; }
        public string UserPassword { get; set; }
    }
}