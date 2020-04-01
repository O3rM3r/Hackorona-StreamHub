namespace LiveyServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        CategoryID = c.Int(nullable: false, identity: true),
                        CategoryName = c.String(),
                    })
                .PrimaryKey(t => t.CategoryID);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        ItemID = c.Int(nullable: false, identity: true),
                        ItemTitle = c.String(),
                        ItemURL = c.String(),
                        ItemDescription = c.String(),
                        ItemTags = c.String(),
                        ItemStartDate = c.Int(nullable: false),
                        ItemDuration = c.Int(nullable: false),
                        ItemOwner = c.String(),
                        PlatformID = c.Int(nullable: false),
                        ItemImgURL = c.String(),
                    })
                .PrimaryKey(t => t.ItemID);
            
            CreateTable(
                "dbo.Platforms",
                c => new
                    {
                        PlatformID = c.Int(nullable: false, identity: true),
                        PlatformName = c.String(),
                    })
                .PrimaryKey(t => t.PlatformID);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserID = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        UserPassword = c.String(),
                    })
                .PrimaryKey(t => t.UserID);
            
            CreateTable(
                "dbo.ItemCategories",
                c => new
                    {
                        Item_ItemID = c.Int(nullable: false),
                        Category_CategoryID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Item_ItemID, t.Category_CategoryID })
                .ForeignKey("dbo.Items", t => t.Item_ItemID, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_CategoryID, cascadeDelete: true)
                .Index(t => t.Item_ItemID)
                .Index(t => t.Category_CategoryID);
            
            CreateTable(
                "dbo.PlatformItems",
                c => new
                    {
                        Platform_PlatformID = c.Int(nullable: false),
                        Item_ItemID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Platform_PlatformID, t.Item_ItemID })
                .ForeignKey("dbo.Platforms", t => t.Platform_PlatformID, cascadeDelete: true)
                .ForeignKey("dbo.Items", t => t.Item_ItemID, cascadeDelete: true)
                .Index(t => t.Platform_PlatformID)
                .Index(t => t.Item_ItemID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PlatformItems", "Item_ItemID", "dbo.Items");
            DropForeignKey("dbo.PlatformItems", "Platform_PlatformID", "dbo.Platforms");
            DropForeignKey("dbo.ItemCategories", "Category_CategoryID", "dbo.Categories");
            DropForeignKey("dbo.ItemCategories", "Item_ItemID", "dbo.Items");
            DropIndex("dbo.PlatformItems", new[] { "Item_ItemID" });
            DropIndex("dbo.PlatformItems", new[] { "Platform_PlatformID" });
            DropIndex("dbo.ItemCategories", new[] { "Category_CategoryID" });
            DropIndex("dbo.ItemCategories", new[] { "Item_ItemID" });
            DropTable("dbo.PlatformItems");
            DropTable("dbo.ItemCategories");
            DropTable("dbo.Users");
            DropTable("dbo.Platforms");
            DropTable("dbo.Items");
            DropTable("dbo.Categories");
        }
    }
}
