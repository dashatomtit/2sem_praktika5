using Microsoft.AspNetCore.Mvc;

namespace WebAppTestData.Controllers;

public class AccountController : Controller
{
    // GET
    public IActionResult Login()
    {
        return View();
    }
}