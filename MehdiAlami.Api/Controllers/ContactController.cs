using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Resend;
using System.Net;
using Microsoft.AspNetCore.RateLimiting;

namespace MehdiAlami.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IResend _resend;

    public ContactController(IResend resend)
    {
        _resend = resend;
    }

    [EnableRateLimiting("ContactForm")]
    [HttpPost]
    public async Task<IActionResult> Send(ContactRequest request)
    {
        if (!string.IsNullOrWhiteSpace(request.Website))
        {
            return Ok();
        }

        var safeName = WebUtility.HtmlEncode(request.Name);
        var safeEmail = WebUtility.HtmlEncode(request.Email);
        var safeMessage = WebUtility.HtmlEncode(request.Message);

        var message = new EmailMessage
        {
            From = "Mehdi Alami <contact@mehdialami.dev>",
            ReplyTo = request.Email,
            To = "contact@mehdialami.dev",
            Subject = $"New message from {safeName}",
            HtmlBody = $"""
            <p><strong>Name:</strong> {safeName}</p>
            <p><strong>Email:</strong> {safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p>{safeMessage}</p>
            """
        };

        await _resend.EmailSendAsync(message);

        return Ok();
    }

    public class ContactRequest
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        public string Website { get; set; } = string.Empty;
    }
}