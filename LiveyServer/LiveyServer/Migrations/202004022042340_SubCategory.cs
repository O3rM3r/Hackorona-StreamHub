namespace LiveyServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SubCategory : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UserFavoriteItems",
                c => new
                    {
                        UserFavoriteItemID = c.Int(nullable: false, identity: true),
                        IsFavorite = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.UserFavoriteItemID);
            
            AddColumn("dbo.Categories", "Category_CategoryID", c => c.Int());
            AddColumn("dbo.Items", "UserFavoriteItem_UserFavoriteItemID", c => c.Int());
            AddColumn("dbo.Users", "UserFavoriteItem_UserFavoriteItemID", c => c.Int());
            CreateIndex("dbo.Categories", "Category_CategoryID");
            CreateIndex("dbo.Items", "UserFavoriteItem_UserFavoriteItemID");
            CreateIndex("dbo.Users", "UserFavoriteItem_UserFavoriteItemID");
            AddForeignKey("dbo.Categories", "Category_CategoryID", "dbo.Categories", "CategoryID");
            AddForeignKey("dbo.Items", "UserFavoriteItem_UserFavoriteItemID", "dbo.UserFavoriteItems", "UserFavoriteItemID");
            AddForeignKey("dbo.Users", "UserFavoriteItem_UserFavoriteItemID", "dbo.UserFavoriteItems", "UserFavoriteItemID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Users", "UserFavoriteItem_UserFavoriteItemID", "dbo.UserFavoriteItems");
            DropForeignKey("dbo.Items", "UserFavoriteItem_UserFavoriteItemID", "dbo.UserFavoriteItems");
            DropForeignKey("dbo.Categories", "Category_CategoryID", "dbo.Categories");
            DropIndex("dbo.Users", new[] { "UserFavoriteItem_UserFavoriteItemID" });
            DropIndex("dbo.Items", new[] { "UserFavoriteItem_UserFavoriteItemID" });
            DropIndex("dbo.Categories", new[] { "Category_CategoryID" });
            DropColumn("dbo.Users", "UserFavoriteItem_UserFavoriteItemID");
            DropColumn("dbo.Items", "UserFavoriteItem_UserFavoriteItemID");
            DropColumn("dbo.Categories", "Category_CategoryID");
            DropTable("dbo.UserFavoriteItems");
        }
    }
}
