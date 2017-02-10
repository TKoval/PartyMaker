using Microsoft.AspNetCore.Mvc;

namespace PartyMaker.WebUI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View((object)"Server-side message (Rendered with Razor)");
        }
    }
}
