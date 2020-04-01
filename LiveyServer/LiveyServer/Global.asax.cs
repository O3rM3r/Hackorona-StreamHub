using LiveyServer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace LiveyServer
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
     
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            //Database.SetInitializer<LiveyTvContext>(new DropCreateDatabaseIfModelChanges<LiveyTvContext>());
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            ////using (var context = new LiveyTvContext())
            ////{
            ////    Database.SetInitializer<LiveyTvContext>(new DropCreateDatabaseIfModelChanges<LiveyTvContext>());
            ////    ////context.Database.Initialize(force: true);

            ////    // Database.SetInitializer<LiveyTvContext>(null);
            ////}
        }
    }
}
