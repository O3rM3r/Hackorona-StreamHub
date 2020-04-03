using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace LiveyServer.Models
{
    public class UserFavoriteItem
    {
        public UserFavoriteItem()
        {
            this.Items = new HashSet<Item>(); //defines many to many
            this.Users = new HashSet<User>(); //defines many to many
        }

        [Key]
        [Column(Order = 1)]
        public int UserFavoriteItemID { get; set; }

        public bool IsFavorite { get; set; }

        public virtual ICollection<Item> Items { get; set; }

        public virtual ICollection<User> Users { get; set; }

    }
}