using System.Web.Http;
using WebActivatorEx;
using LiveyServer;
using Swashbuckle.Application;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace LiveyServer
{
    public class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;
            GlobalConfiguration.Configuration
              .EnableSwagger(c => c.SingleApiVersion("v1", "LiveyServer"))
              .EnableSwaggerUi();
        }
    }
}
