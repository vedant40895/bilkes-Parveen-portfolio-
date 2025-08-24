"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mrbazldo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-rose-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Ready to transform your image and unlock your potential? Let's discuss how we can work together to achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank you for your message!</h3>
                      <p className="text-gray-700">Your message has been sent successfully. I will get back to you soon.</p>
                    </div>
                  ) : (
                    <form
                      ref={formRef}
                      className="space-y-6"
                      onSubmit={handleFormSubmit}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Service Interest</Label>
                          <select
                            id="service"
                            name="service"
                            className="mt-1 w-full border rounded px-3 py-2"
                          >
                            <option value="">Select a service</option>
                            <option value="image-coaching">1-on-1 Image Coaching</option>
                            <option value="personality-development">Personality Development</option>
                            <option value="public-speaking">Public Speaking Training</option>
                            <option value="image-management">Professional Image Management</option>
                            <option value="speaking-engagement">Speaking Engagement</option>
                            <option value="brand-collaboration">Brand Collaboration</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="mt-1"
                          placeholder="Tell me about your goals and how I can help you..."
                        />
                      </div>

                      {error && (
                        <div className="text-red-600 text-center mb-2">{error}</div>
                      )}
                      <Button type="submit" className="w-full bg-royal-blue hover:bg-royal-blue/90 text-lg py-3" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Photo */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-royal-blue mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">bilkesperveen@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-royal-blue mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+91 79809 01539</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-royal-blue mr-3" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Kolkata, West Bengal, India</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-royal-blue mr-3" />
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">Connect on Social Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/bilkesperveen?igsh=ejYyMHlkdnh4cmMw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bilkes-perveen-2536a3177/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Follow for daily inspiration, behind-the-scenes content, and professional tips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Follow My Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected and get inspired with daily updates from my professional and personal journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "IMG-20250818-WA0007.jpg",
              "IMG-20250818-WA0025.jpg",
              "IMG-20250818-WA0009.jpg",
              "IMG-20250818-WA0034.jpg",
              "IMG-20250818-WA0044.jpg",
              "IMG-20250818-WA0014.jpg",
              "IMG-20250818-WA0060.jpg",
              "IMG-20250818-WA0016.jpg",
              "IMG-20250818-WA0018.jpg",
              "IMG-20250818-WA0020.jpg",
              "IMG-20250818-WA0051.jpg",
              "IMG-20250818-WA0023.jpg"
            ].map((img, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Image
                  src={`/${img}`}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <a href="https://www.instagram.com/bilkesperveen?igsh=ejYyMHlkdnh4cmMw" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is included in a 1-on-1 image coaching session?",
                answer:
                  "Each session includes personal style assessment, wardrobe consultation, body language training, professional photo guidance, and confidence building exercises tailored to your specific goals.",
              },
              {
                question: "How long does the personality development program take?",
                answer:
                  "The comprehensive personality development program typically runs for 4-6 weeks, with weekly sessions and ongoing support. The duration can be customized based on your specific needs and goals.",
              },
              {
                question: "Do you offer virtual coaching sessions?",
                answer:
                  "Yes, I offer both in-person and virtual coaching sessions to accommodate clients from different locations. Virtual sessions are conducted via video call with the same level of personalized attention.",
              },
              {
                question: "What is your availability for speaking engagements?",
                answer:
                  "I'm available for speaking engagements, corporate workshops, and events. Please contact me with your event details, and I'll provide availability and customized proposals.",
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

