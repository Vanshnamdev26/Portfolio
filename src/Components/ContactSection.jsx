import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = axios.post("http://localhost:5000/api/users/create", formData);
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
      setIsSubmitting(false);
      return;
      
    }
    setTimeout(() => {
      toast.success("Message sent! Thank you, I'll get back to you soon.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            {[
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email",
                value: "vanshnwork268@gmail.com",
                href: "mailto:vanshnwork268@gmail.com",
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                value: "+91 (952) 826-6704",
                href: "tel:+919528266704",
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Location",
                value: "Shamli, Uttar Pradesh, India",
                href: "https://www.google.com/maps/place/Shamli,+Uttar+Pradesh", // Optional
              },
            ].map(({ icon, title, value, href }, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-3 rounded-md hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  {icon}
                </div>
                <div>
                  <h4 className="font-medium">{title}</h4>
                  {href ? (
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Connect With Me */}
            <div className="pt-8 text-center">
              <h4 className="font-medium mb-6 text-lg tracking-wide text-primary">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-5">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/vansh.namdev0/" },
                  { icon: Twitch, label: "Twitch", href: "#" },
                ].map(({ icon: Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted text-foreground hover:text-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="absolute bottom-[-1.5rem] text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
  {[
    {
      label: "Your Name",
      id: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      label: "Your Email",
      id: "email",
      type: "email",
      placeholder: "john@example.com",
    },
  ].map(({ label, id, type, placeholder }) => (
    <div key={id}>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        value={formData[id]}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            [id]: e.target.value,
          }))
        }
        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all duration-300 shadow-sm"
      />
    </div>
  ))}

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      required
      placeholder="Hello, I'd like to talk about..."
      value={formData.message}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          message: e.target.value,
        }))
      }
      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition-all duration-300 shadow-sm resize-none"
    />
  </div>

  <button
    type="submit"
    disabled={isSubmitting}
    className={cn(
      "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60"
    )}
  >
    {isSubmitting ? "Sending..." : "Send Message"}
    <Send size={16} />
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};
