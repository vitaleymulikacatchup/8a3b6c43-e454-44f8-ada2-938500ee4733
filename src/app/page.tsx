"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, Coffee, Heart, MapPin, Sparkles, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="Bean & Brew"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Coffee Experience"
          description="Discover the perfect blend of flavor and craftsmanship with our artisan roasted coffee beans"
          tag="Welcome"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Shop Coffee",
              href: "product"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop with customers enjoying premium coffee"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We craft exceptional coffee experiences that bring people together, one cup at a time"
          buttons={[
            {
              text: "Our Story",
              href: "https://example.com/story"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Coffee Craftsmanship"
          description="Every cup tells a story of quality, passion, and dedication to the perfect brew"
          tag="Our Process"
          tagIcon={Sparkles}
          features={[
            {
              title: "Artisan Roasting",
              description: "Small-batch roasting to bring out the unique flavor profile of each bean origin",
              imageSrc: "https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee roasting process"
            },
            {
              title: "Expert Brewing",
              description: "Trained baristas using precision techniques for the perfect extraction every time",
              imageSrc: "https://images.pexels.com/photos/7487360/pexels-photo-7487360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional coffee brewing"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Premium Coffee Selection"
          description="Discover our carefully curated collection of specialty coffee beverages"
          tag="Featured"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Bean & Brew",
              name: "Signature Espresso",
              price: "$4.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/33682396/pexels-photo-33682396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium espresso shot"
            },
            {
              id: "2",
              brand: "Bean & Brew",
              name: "Artisan Latte",
              price: "$5.25",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/6166762/pexels-photo-6166762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Artisan latte with foam art"
            },
            {
              id: "3",
              brand: "Bean & Brew",
              name: "Classic Cappuccino",
              price: "$4.75",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic cappuccino with perfect foam"
            },
            {
              id: "4",
              brand: "Bean & Brew",
              name: "Cold Brew Special",
              price: "$4.00",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Refreshing cold brew coffee"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from our coffee-loving community"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33409064/pexels-photo-33409064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Engineer",
              company: "DevCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990160/pexels-photo-5990160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Designer",
              company: "Studio Creative",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "InnovateNow",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7320425/pexels-photo-7320425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Business Analyst",
              company: "DataFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6864505/pexels-photo-6864505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Operations Director",
              company: "GrowthHub",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6443058/pexels-photo-6443058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson portrait"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Lovers Worldwide"
          description="Join thousands of satisfied customers who choose quality coffee"
          tag="Partners"
          tagIcon={Users}
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31705170/pexels-photo-31705170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7580962/pexels-photo-7580962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
          layout="default"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Stories & Tips"
          description="Insights and knowledge from our coffee experts"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Brewing Tips",
              title: "Perfect Pour-Over Technique",
              excerpt: "Master the art of pour-over coffee with our step-by-step guide to achieving the perfect extraction",
              imageSrc: "https://images.pexels.com/photos/6938722/pexels-photo-6938722.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee pour-over brewing technique",
              authorName: "Chef Martinez",
              authorAvatar: "https://images.pexels.com/photos/13736395/pexels-photo-13736395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Coffee Origins",
              title: "Ethiopian Coffee Heritage",
              excerpt: "Discover the rich history and unique flavors of Ethiopian coffee beans and their cultural significance",
              imageSrc: "https://images.pexels.com/photos/33220154/pexels-photo-33220154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ethiopian coffee bean farm",
              authorName: "Emma Thompson",
              authorAvatar: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Visit Our Coffee Shop"
          description="Experience our premium coffee in person or stay updated with our latest offerings"
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our coffee updates and exclusive offers."
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior atmosphere"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Bean & Brew Coffee Logo"
          logoText="Bean & Brew"
          columns={[
            {
              items: [
                {
                  label: "Our Coffee",
                  href: "product"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Brewing Tips",
                  href: "blog"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "https://maps.google.com"
                },
                {
                  label: "Careers",
                  href: "https://example.com/careers"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}