namespace LiveyServer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class adddateobjtoitems : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "ItemStartDateObj", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Items", "ItemStartDateObj");
        }
    }
}
