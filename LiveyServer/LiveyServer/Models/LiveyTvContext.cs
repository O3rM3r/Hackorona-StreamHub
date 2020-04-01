﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LiveyServer.Models
{
    public class LiveyTvContext : DbContext
    {
        public LiveyTvContext() : base("name=LiveyTvConnectionString")
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<User> Users { get; set; }
    }
}