import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();

  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Godrej 1.5 Ton 5 Star Split AC",
      brand: "Godrej",
      category: "Air Conditioner",
      price: 35999,
      originalPrice: 42999,
      discount: 16,
      rating: 4.5,
      reviews: 234,
      images: [
        "/godrej.jpg",
        "https://images.unsplash.com/photo-1631545003298-dc58b28b3f55?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Dual Inverter Technology", "Copper Condenser", "Wi-Fi Control", "Auto Clean Function"],
      specifications: {
        "Cooling Capacity": "1.5 Ton (5100 Watts)",
        "Energy Rating": "5 Star",
        "Compressor": "Dual Inverter",
        "Refrigerant": "R32",
        "Warranty": "1 Year Comprehensive + 10 Years Compressor"
      },
      description: "Experience superior cooling with Godrej's 5-star rated split AC featuring dual inverter technology for energy efficiency and consistent temperature control.",
      inStock: true,
      emi: 3000
    },
    {
      id: 3,
      name: "Liebherr 265L Double Door Refrigerator",
      brand: "Liebherr",
      category: "Refrigerator",
      price: 58999,
      originalPrice: 65999,
      discount: 11,
      rating: 4.7,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["BioFresh Technology", "NoFrost", "LED Lighting", "SuperCool Function"],
      specifications: {
        "Capacity": "265 Liters",
        "Type": "Double Door",
        "Energy Rating": "4 Star",
        "Defrosting": "No Frost",
        "Warranty": "1 Year Comprehensive + 10 Years Compressor"
      },
      description: "Premium refrigerator with BioFresh technology to keep your food fresh for longer periods.",
      inStock: false,
      emi: 4917
    },
    {
      id: 23,
      name: "LG 50\" 4K NanoCell Smart TV",
      brand: "LG",
      category: "Television",
      price: 49999,
      originalPrice: 64999,
      discount: 23,
      rating: 4.5,
      reviews: 278,
      images: [
        "/panasonic tv.jpg",
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["4K HDR", "Android TV", "Dolby Atmos", "Voice Remote"],
      specifications: {
        "Screen Size": "50 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "NanoCell",
        "Smart TV": "Android TV",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Immersive 4K Smart TV experience with HDR support and Android TV platform for endless entertainment.",
      inStock: true,
      emi: 4167
    },
    {
      id: 4,
      name: "Panasonic 55\" 4K Smart LED TV",
      brand: "Panasonic",
      category: "Television",
      price: 45999,
      originalPrice: 52999,
      discount: 13,
      rating: 4.4,
      reviews: 298,
      images: [
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["4K HDR", "Android TV", "Dolby Atmos", "Voice Remote"],
      specifications: {
        "Screen Size": "55 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "LED",
        "Smart TV": "Android TV",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Immersive 4K Smart TV experience with HDR support and Android TV platform for endless entertainment.",
      inStock: true,
      emi: 3833
    },
    {
      id: 5,
      name: "Panasonic 1.5 Ton 3 Star Inverter Split AC",
      brand: "Panasonic",
      category: "Air Conditioner",
      price: 32999,
      originalPrice: 38999,
      discount: 15,
      rating: 4.3,
      reviews: 189,
      images: [
        "/panasonic.jpg",
        "https://images.unsplash.com/photo-1631545003298-dc58b28b3f55?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Inverter Technology", "Copper Condenser", "PM 2.5 Filter", "Econavi Technology"],
      specifications: {
        "Cooling Capacity": "1.5 Ton (5100 Watts)",
        "Energy Rating": "3 Star",
        "Compressor": "Inverter",
        "Refrigerant": "R32",
        "Warranty": "1 Year Comprehensive + 5 Years Compressor"
      },
      description: "Experience efficient cooling with Panasonic's 3-star inverter AC featuring Econavi technology for intelligent energy saving and PM 2.5 filter for cleaner air.",
      inStock: true,
      emi: 2750
    },
    {
      id: 6,
      name: "LG 1.5 Ton 5 Star Dual Inverter Split AC",
      brand: "LG",
      category: "Air Conditioner",
      price: 38999,
      originalPrice: 45999,
      discount: 15,
      rating: 4.6,
      reviews: 312,
      images: [
        "/lg.jpg",
        "https://images.unsplash.com/photo-1631545003298-dc58b28b3f55?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Dual Inverter Compressor", "Ocean Black Fin", "AI Convertible 6-in-1", "ThinQ Wi-Fi"],
      specifications: {
        "Cooling Capacity": "1.5 Ton (5100 Watts)",
        "Energy Rating": "5 Star",
        "Compressor": "Dual Inverter",
        "Refrigerant": "R32",
        "Warranty": "1 Year Comprehensive + 10 Years Compressor"
      },
      description: "Advanced cooling with LG's dual inverter technology, AI convertible modes, and ThinQ smart connectivity for optimal comfort and energy efficiency.",
      inStock: true,
      emi: 3250
    },
    {
      id: 7,
      name: "Samsung 1.5 Ton 3 Star Inverter Split AC",
      brand: "Samsung",
      category: "Air Conditioner",
      price: 34999,
      originalPrice: 41999,
      discount: 17,
      rating: 4.4,
      reviews: 267,
      images: [
        "/samsung.jpg",
        "https://images.unsplash.com/photo-1631545003298-dc58b28b3f55?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=800&q=80"
      ],
      features: ["Digital Inverter", "Triple Protector Plus", "Fast Cooling Mode", "Copper Condenser"],
      specifications: {
        "Cooling Capacity": "1.5 Ton (5100 Watts)",
        "Energy Rating": "3 Star",
        "Compressor": "Digital Inverter",
        "Refrigerant": "R32",
        "Warranty": "1 Year Comprehensive + 10 Years Compressor"
      },
      description: "Reliable cooling with Samsung's digital inverter technology, triple protector plus for durability, and fast cooling mode for instant comfort.",
      inStock: true,
      emi: 2917
    },
    {
      id: 11,
      name: "Bosch 7 Kg 5 Star Front Load Washing Machine",
      brand: "Bosch",
      category: "Washing Machine",
      price: 34999,
      originalPrice: 41999,
      discount: 17,
      rating: 4.6,
      reviews: 156,
      images: [
        "/bosch wahsing.jpg"
      ],
      features: ["EcoSilence Drive", "ActiveWater Plus", "VarioPerfect", "AllergyPlus"],
      specifications: {
        "Capacity": "7 Kg",
        "Energy Rating": "5 Star",
        "Type": "Front Load",
        "Motor": "EcoSilence Drive",
        "Spin Speed": "1200 RPM",
        "Warranty": "2 Years Comprehensive + 10 Years Motor"
      },
      description: "German engineering excellence with EcoSilence Drive for whisper-quiet operation, ActiveWater Plus for water efficiency, and AllergyPlus for sensitive skin care.",
      inStock: true,
      emi: 2917
    },
    {
      id: 12,
      name: "LG 7 Kg 5 Star Front Load Washing Machine",
      brand: "LG",
      category: "Washing Machine",
      price: 29999,
      originalPrice: 35999,
      discount: 17,
      rating: 4.5,
      reviews: 267,
      images: [
        "/lg washing.jpg"
      ],
      features: ["AI DD Technology", "Steam Wash", "TurboWash", "Smart Diagnosis"],
      specifications: {
        "Capacity": "7 Kg",
        "Energy Rating": "5 Star",
        "Type": "Front Load",
        "Motor": "Direct Drive Motor",
        "Spin Speed": "1200 RPM",
        "Warranty": "2 Years Comprehensive + 10 Years Motor"
      },
      description: "Smart washing with AI DD technology that detects fabric type and weight for optimal care, steam wash for hygiene, and TurboWash for faster cleaning cycles.",
      inStock: true,
      emi: 2500
    },
    {
      id: 13,
      name: "Panasonic 8 Kg 5 Star Front Load Washing Machine",
      brand: "Panasonic",
      category: "Washing Machine",
      price: 32999,
      originalPrice: 38999,
      discount: 15,
      rating: 4.4,
      reviews: 198,
      images: [
        "/panasonic washing.jpg"
      ],
      features: ["StainMaster+", "Hygiene Steam", "Inverter Motor", "Advanced Foam System"],
      specifications: {
        "Capacity": "8 Kg",
        "Energy Rating": "5 Star",
        "Type": "Front Load",
        "Motor": "Inverter Motor",
        "Spin Speed": "1200 RPM",
        "Warranty": "2 Years Comprehensive + 10 Years Motor"
      },
      description: "Advanced front load washing with StainMaster+ technology for tough stains, hygiene steam for deep cleaning, and inverter motor for energy efficiency and quiet operation.",
      inStock: true,
      emi: 2750
    },
    {
      id: 14,
      name: "Samsung 6.5 Kg 5 Star Top Load Washing Machine",
      brand: "Samsung",
      category: "Washing Machine",
      price: 21999,
      originalPrice: 26999,
      discount: 19,
      rating: 4.3,
      reviews: 189,
      images: [
        "/samsung washing.jpg"
      ],
      features: ["Wobble Technology", "Magic Dispenser", "Digital Inverter Motor", "Diamond Drum"],
      specifications: {
        "Capacity": "6.5 Kg",
        "Energy Rating": "5 Star",
        "Type": "Top Load",
        "Motor": "Digital Inverter Motor",
        "Spin Speed": "700 RPM",
        "Warranty": "2 Years Comprehensive + 20 Years Motor"
      },
      description: "Gentle yet powerful washing with Wobble technology for fabric care, magic dispenser for optimal detergent distribution, and diamond drum design.",
      inStock: true,
      emi: 1833
    },
    {
      id: 15,
      name: "Siemens 8 Kg 5 Star Front Load Washing Machine",
      brand: "Siemens",
      category: "Washing Machine",
      price: 39999,
      originalPrice: 47999,
      discount: 17,
      rating: 4.5,
      reviews: 134,
      images: [
        "/siemens washing.jpg"
      ],
      features: ["iQdrive Motor", "varioPerfect", "speedPerfect", "Hygiene Plus"],
      specifications: {
        "Capacity": "8 Kg",
        "Energy Rating": "5 Star",
        "Type": "Front Load",
        "Motor": "iQdrive Motor",
        "Spin Speed": "1400 RPM",
        "Warranty": "2 Years Comprehensive + 10 Years Motor"
      },
      description: "Premium washing experience with iQdrive motor technology for efficiency, varioPerfect for time/energy optimization, and Hygiene Plus for deep sanitization.",
      inStock: true,
      emi: 3333
    },
    {
      id: 16,
      name: "Bosch 345L Double Door Refrigerator",
      brand: "Bosch",
      category: "Refrigerator",
      price: 52999,
      originalPrice: 62999,
      discount: 16,
      rating: 4.5,
      reviews: 178,
      images: [
        "/bosch ref.jpg"
      ],
      features: ["VitaFresh Technology", "NoFrost Plus", "LED Lighting", "SuperCooling"],
      specifications: {
        "Capacity": "345 Litres",
        "Type": "Double Door",
        "Energy Rating": "3 Star",
        "Defrosting": "Frost Free",
        "Compressor": "VarioInverter",
        "Warranty": "2 Years Comprehensive + 10 Years Compressor"
      },
      description: "German engineering excellence with VitaFresh technology for longer freshness, NoFrost Plus for hassle-free maintenance, and energy-efficient VarioInverter compressor.",
      inStock: true,
      emi: 4417
    },
    {
      id: 17,
      name: "LG 335L Double Door Refrigerator",
      brand: "LG",
      category: "Refrigerator",
      price: 48999,
      originalPrice: 56999,
      discount: 14,
      rating: 4.4,
      reviews: 234,
      images: [
        "/lg ref.jpg"
      ],
      features: ["Smart Inverter", "Multi Air Flow", "Hygiene Fresh+", "Smart Diagnosis"],
      specifications: {
        "Capacity": "335 Litres",
        "Type": "Double Door",
        "Energy Rating": "3 Star",
        "Defrosting": "Frost Free",
        "Compressor": "Smart Inverter",
        "Warranty": "2 Years Comprehensive + 10 Years Compressor"
      },
      description: "Smart cooling with LG's inverter technology for energy efficiency, multi air flow for uniform cooling, and Hygiene Fresh+ for bacteria-free storage.",
      inStock: true,
      emi: 4083
    },
    {
      id: 18,
      name: "Panasonic 296L Double Door Refrigerator",
      brand: "Panasonic",
      category: "Refrigerator",
      price: 42999,
      originalPrice: 49999,
      discount: 14,
      rating: 4.3,
      reviews: 189,
      images: [
        "/panasonic ref.jpg"
      ],
      features: ["Prime Fresh+", "Econavi Technology", "Ag Clean Technology", "LED Lighting"],
      specifications: {
        "Capacity": "296 Litres",
        "Type": "Double Door",
        "Energy Rating": "4 Star",
        "Defrosting": "Frost Free",
        "Compressor": "Inverter",
        "Warranty": "2 Years Comprehensive + 10 Years Compressor"
      },
      description: "Advanced cooling with Prime Fresh+ technology for optimal freshness, Econavi for energy savings, and Ag Clean technology for hygiene protection.",
      inStock: true,
      emi: 3583
    },
    {
      id: 19,
      name: "Samsung 324L Double Door Refrigerator",
      brand: "Samsung",
      category: "Refrigerator",
      price: 46999,
      originalPrice: 54999,
      discount: 15,
      rating: 4.4,
      reviews: 267,
      images: [
        "/samsung ref.jpg"
      ],
      features: ["Digital Inverter", "Twin Cooling Plus", "Power Cool", "Convertible"],
      specifications: {
        "Capacity": "324 Litres",
        "Type": "Double Door",
        "Energy Rating": "3 Star",
        "Defrosting": "Frost Free",
        "Compressor": "Digital Inverter",
        "Warranty": "2 Years Comprehensive + 20 Years Compressor"
      },
      description: "Innovative cooling with Samsung's digital inverter technology, twin cooling plus for separate cooling zones, and convertible modes for flexible storage.",
      inStock: true,
      emi: 3917
    },
    {
      id: 20,
      name: "Siemens 347L Double Door Refrigerator",
      brand: "Siemens",
      category: "Refrigerator",
      price: 58999,
      originalPrice: 68999,
      discount: 14,
      rating: 4.6,
      reviews: 145,
      images: [
        "/siemens ref.jpg"
      ],
      features: ["iSensoric Technology", "NoFrost", "VitaFresh Pro", "LED Lighting"],
      specifications: {
        "Capacity": "347 Litres",
        "Type": "Double Door",
        "Energy Rating": "4 Star",
        "Defrosting": "Frost Free",
        "Compressor": "iSensoric Inverter",
        "Warranty": "2 Years Comprehensive + 10 Years Compressor"
      },
      description: "Premium refrigeration with iSensoric technology for intelligent cooling, VitaFresh Pro for extended freshness, and German engineering excellence.",
      inStock: true,
      emi: 4917
    },
    {
      id: 22,
      name: "Samsung 55\" 4K Crystal UHD Smart TV",
      brand: "Samsung",
      category: "Television",
      price: 54999,
      originalPrice: 69999,
      discount: 21,
      rating: 4.4,
      reviews: 342,
      images: [
        "/panasonic tv.jpg"
      ],
      features: ["Crystal 4K Display", "Smart TV", "HDR10+", "Voice Control"],
      specifications: {
        "Screen Size": "55 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "Crystal UHD",
        "Smart TV": "Tizen OS",
        "HDR": "HDR10+",
        "Connectivity": "3 HDMI, 2 USB, Wi-Fi, Bluetooth",
        "Audio": "20W Dolby Digital Plus",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Immersive viewing experience with Samsung's Crystal 4K display technology, smart Tizen OS for streaming, and HDR10+ for vibrant colors and sharp details.",
      inStock: true,
      emi: 4583
    },
    {
      id: 23,
      name: "LG 50\" 4K NanoCell Smart TV",
      brand: "LG",
      category: "Television",
      price: 49999,
      originalPrice: 64999,
      discount: 23,
      rating: 4.5,
      reviews: 278,
      images: [
        "/panasonic tv.jpg"
      ],
      features: ["NanoCell Technology", "webOS Smart TV", "AI ThinQ", "Dolby Vision"],
      specifications: {
        "Screen Size": "50 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "NanoCell",
        "Smart TV": "webOS 6.0",
        "HDR": "Dolby Vision, HDR10",
        "Connectivity": "4 HDMI, 3 USB, Wi-Fi, Bluetooth",
        "Audio": "20W AI Sound Pro",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Pure colors and sharp details with LG's NanoCell technology, webOS smart platform for seamless streaming, and AI ThinQ for voice control.",
      inStock: true,
      emi: 4167
    },
    {
      id: 24,
      name: "Sony 43\" 4K Android Smart TV",
      brand: "Sony",
      category: "Television",
      price: 42999,
      originalPrice: 54999,
      discount: 22,
      rating: 4.3,
      reviews: 195,
      images: [
        "/panasonic tv.jpg"
      ],
      features: ["4K X-Reality PRO", "Android TV", "Google Assistant", "Dolby Audio"],
      specifications: {
        "Screen Size": "43 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "LED",
        "Smart TV": "Android TV 9.0",
        "HDR": "HDR10, HLG",
        "Connectivity": "3 HDMI, 2 USB, Wi-Fi, Bluetooth",
        "Audio": "20W Bass Reflex Speakers",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Exceptional picture quality with Sony's 4K X-Reality PRO processing, Android TV platform with Google Assistant, and immersive Dolby Audio experience.",
      inStock: true,
      emi: 3583
    },
    {
      id: 25,
      name: "TCL 65\" 4K QLED Smart TV",
      brand: "TCL",
      category: "Television",
      price: 64999,
      originalPrice: 84999,
      discount: 24,
      rating: 4.2,
      reviews: 156,
      images: [
        "/panasonic tv.jpg"
      ],
      features: ["QLED Display", "Quantum Dot Technology", "Android TV", "Dolby Vision"],
      specifications: {
        "Screen Size": "65 inches",
        "Resolution": "4K Ultra HD (3840x2160)",
        "Display Type": "QLED",
        "Smart TV": "Android TV 11",
        "HDR": "Dolby Vision, HDR10+",
        "Connectivity": "4 HDMI, 2 USB, Wi-Fi, Bluetooth",
        "Audio": "30W Dolby Atmos",
        "Warranty": "1 Year Comprehensive + 1 Year Extended"
      },
      description: "Stunning visuals with TCL's QLED quantum dot technology, large 65-inch display for cinematic experience, and Dolby Vision for premium HDR content.",
      inStock: true,
      emi: 5417
    },
    {
      id: 26,
      name: "Mi 32\" HD Ready Smart TV",
      brand: "Mi",
      category: "Television",
      price: 16999,
      originalPrice: 22999,
      discount: 26,
      rating: 4.1,
      reviews: 423,
      images: [
        "/panasonic tv.jpg"
      ],
      features: ["PatchWall", "Android TV", "Chromecast Built-in", "Data Saver"],
      specifications: {
        "Screen Size": "32 inches",
        "Resolution": "HD Ready (1366x768)",
        "Display Type": "LED",
        "Smart TV": "Android TV 9.0",
        "HDR": "Not Available",
        "Connectivity": "3 HDMI, 2 USB, Wi-Fi, Bluetooth",
        "Audio": "20W DTS-HD",
        "Warranty": "1 Year Comprehensive"
      },
      description: "Affordable smart TV with Mi's PatchWall interface, Android TV platform with Chromecast built-in, and data saver feature for optimized streaming.",
      inStock: true,
      emi: 1417
    },
    // Water Heaters - Top 5 Indian Brands
    {
      id: 27,
      name: "V Guard Victo Plus 15L Storage Water Heater",
      brand: "V Guard",
      category: "Water Heater",
      price: 8999,
      originalPrice: 12999,
      discount: 31,
      rating: 4.3,
      reviews: 245,
      images: [
        "/v gurad wh.jpg"
      ],
      features: ["5 Star Energy Rating", "Rust Resistant Tank", "Advanced Safety Features", "7 Year Warranty"],
      specifications: {
        "Capacity": "15 Litres",
        "Type": "Storage Water Heater",
        "Energy Rating": "5 Star",
        "Tank Material": "Vitreous Enamel",
        "Heating Element": "Incoloy 800",
        "Safety Features": "Thermal Cut-out, Pressure Release Valve",
        "Warranty": "7 Years Inner Tank + 2 Years Product"
      },
      description: "Energy efficient 5-star rated water heater with advanced safety features, rust-resistant tank, and 7-year warranty on inner tank.",
      inStock: true,
      emi: 750
    },
    {
      id: 28,
      name: "Havells Monza EC 25L Storage Water Heater",
      brand: "Havells",
      category: "Water Heater",
      price: 12999,
      originalPrice: 16999,
      discount: 24,
      rating: 4.4,
      reviews: 189,
      images: [
        "/harvells wh.jpg"
      ],
      features: ["Titanium Enamel Coating", "Digital Display", "Smart Connectivity", "Auto Cut-off"],
      specifications: {
        "Capacity": "25 Litres",
        "Type": "Storage Water Heater",
        "Energy Rating": "5 Star",
        "Tank Material": "Titanium Enamel",
        "Heating Element": "Feroglas",
        "Control": "Digital Display",
        "Warranty": "5 Years Inner Tank + 2 Years Product"
      },
      description: "Premium water heater with titanium enamel coating, digital display, and smart connectivity features for optimal performance.",
      inStock: true,
      emi: 1083
    },
    {
      id: 29,
      name: "Bajaj New Shakti PC Deluxe 25L Water Heater",
      brand: "Bajaj",
      category: "Water Heater",
      price: 9999,
      originalPrice: 13999,
      discount: 29,
      rating: 4.2,
      reviews: 312,
      images: [
        "/bajaj wh.jpg"
      ],
      features: ["Glass Lined Tank", "Magnesium Anode Rod", "Superior Insulation", "ISI Marked"],
      specifications: {
        "Capacity": "25 Litres",
        "Type": "Storage Water Heater",
        "Energy Rating": "4 Star",
        "Tank Material": "Glass Lined",
        "Heating Element": "Copper Sheathed",
        "Protection": "Magnesium Anode Rod",
        "Warranty": "5 Years Inner Tank + 2 Years Product"
      },
      description: "Reliable water heater with glass-lined tank, magnesium anode rod for corrosion protection, and superior insulation for energy savings.",
      inStock: true,
      emi: 833
    },
    {
      id: 30,
      name: "Crompton Arno Neo 15L Instant Water Heater",
      brand: "Crompton",
      category: "Water Heater",
      price: 7999,
      originalPrice: 10999,
      discount: 27,
      rating: 4.1,
      reviews: 167,
      images: [
        "/crompton wh.jpg"
      ],
      features: ["Instant Heating", "Copper Element", "Auto Thermal Cut-out", "Compact Design"],
      specifications: {
        "Capacity": "15 Litres",
        "Type": "Instant Water Heater",
        "Energy Rating": "4 Star",
        "Tank Material": "ABS Body",
        "Heating Element": "Copper",
        "Safety": "Thermal Cut-out, PRV",
        "Warranty": "2 Years Product + 5 Years Element"
      },
      description: "Compact instant water heater with copper heating element, automatic thermal cut-out, and pressure release valve for safety.",
      inStock: true,
      emi: 667
    },
    {
      id: 31,
      name: "Racold Eterno Pro 25L Storage Water Heater",
      brand: "Racold",
      category: "Water Heater",
      price: 11999,
      originalPrice: 15999,
      discount: 25,
      rating: 4.5,
      reviews: 234,
      images: [
        "/livpure wh.jpg"
      ],
      features: ["Titanium Plus Technology", "Smart Bath Logic", "5 Star Rating", "Advanced Safety"],
      specifications: {
        "Capacity": "25 Litres",
        "Type": "Storage Water Heater",
        "Energy Rating": "5 Star",
        "Tank Material": "Titanium Plus",
        "Heating Element": "Incoloy 800",
        "Technology": "Smart Bath Logic",
        "Warranty": "7 Years Inner Tank + 2 Years Product"
      },
      description: "Advanced water heater with titanium plus technology, smart bath logic, and 5-star energy rating for maximum efficiency.",
      inStock: true,
      emi: 1000
    },
    // Water Purifiers - Top 5 Indian Brands
    {
      id: 32,
      name: "Kent Grand Plus 8L RO+UV+UF Water Purifier",
      brand: "Kent",
      category: "Water Purifier",
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      rating: 4.6,
      reviews: 456,
      images: [
        "/kent wf.jpg"
      ],
      features: ["7-Stage Purification", "RO+UV+UF Technology", "TDS Controller", "8L Storage"],
      specifications: {
        "Capacity": "8 Litres",
        "Purification": "RO+UV+UF",
        "Stages": "7 Stage Purification",
        "TDS Range": "Up to 2000 ppm",
        "Storage": "8 Litre Tank",
        "Power": "60 Watts",
        "Warranty": "1 Year Free Service + 3 Years Warranty"
      },
      description: "Advanced 7-stage purification with RO+UV+UF technology, TDS controller, and 8L storage tank. Removes bacteria, viruses, and dissolved impurities.",
      inStock: true,
      emi: 1583
    },
    {
      id: 33,
      name: "Aquaguard Enhance Green 7L RO+UV+MTDS Water Purifier",
      brand: "Aquaguard",
      category: "Water Purifier",
      price: 16999,
      originalPrice: 21999,
      discount: 23,
      rating: 4.4,
      reviews: 378,
      images: [
        "/aqua wf.jpg"
      ],
      features: ["Green RO Technology", "Mineral Guard", "Taste Adjuster", "Smart LED Indicators"],
      specifications: {
        "Capacity": "7 Litres",
        "Purification": "RO+UV+MTDS",
        "Technology": "Green RO",
        "TDS Range": "Up to 2000 ppm",
        "Storage": "7 Litre Tank",
        "Power": "55 Watts",
        "Warranty": "1 Year Free Service + 3 Years Warranty"
      },
      description: "Eco-friendly water purifier with Green RO technology, mineral guard, and taste adjuster. Features smart LED indicators and 7L storage.",
      inStock: true,
      emi: 1417
    },
    {
      id: 34,
      name: "Pureit Eco Water Saver 10L RO+UV+MF Water Purifier",
      brand: "Pureit",
      category: "Water Purifier",
      price: 14999,
      originalPrice: 19999,
      discount: 25,
      rating: 4.3,
      reviews: 289,
      images: [
        "/pureit wf.jpg"
      ],
      features: ["6-Stage Purification", "Mineral Cartridge", "Digital Display", "Zero Water Wastage"],
      specifications: {
        "Capacity": "10 Litres",
        "Purification": "RO+UV+MF",
        "Stages": "6 Stage Purification",
        "TDS Range": "Up to 2000 ppm",
        "Storage": "10 Litre Tank",
        "Water Recovery": "60% Recovery",
        "Warranty": "1 Year Free Service + 2 Years Warranty"
      },
      description: "Water-saving RO purifier with 6-stage purification, mineral cartridge, and digital display. Saves up to 60% water with zero water wastage.",
      inStock: true,
      emi: 1250
    },
    {
      id: 35,
      name: "Blue Star Aristo 8L RO+UV Water Purifier",
      brand: "Blue Star",
      category: "Water Purifier",
      price: 17999,
      originalPrice: 23999,
      discount: 25,
      rating: 4.5,
      reviews: 198,
      images: [
        "/blue star aristo wf.jpg"
      ],
      features: ["Copper Impregnated Carbon", "Aqua Taste Booster", "Smart LED Indicators", "Auto Shut-off"],
      specifications: {
        "Capacity": "8 Litres",
        "Purification": "RO+UV",
        "Technology": "Copper Impregnated",
        "TDS Range": "Up to 2000 ppm",
        "Storage": "8 Litre Tank",
        "Power": "50 Watts",
        "Warranty": "1 Year Free Service + 3 Years Warranty"
      },
      description: "Premium water purifier with copper impregnated activated carbon, aqua taste booster, and smart LED indicators for filter life monitoring.",
      inStock: true,
      emi: 1500
    },
    {
      id: 36,
      name: "Livpure Glo 7L RO+UV+UF Water Purifier",
      brand: "Livpure",
      category: "Water Purifier",
      price: 13999,
      originalPrice: 18999,
      discount: 26,
      rating: 4.2,
      reviews: 234,
      images: [
        "/livpure wf.jpg"
      ],
      features: ["7-Stage Purification", "Mineralizer Technology", "Smart Filter Indicator", "Compact Design"],
      specifications: {
        "Capacity": "7 Litres",
        "Purification": "RO+UV+UF",
        "Stages": "7 Stage Purification",
        "TDS Range": "Up to 2000 ppm",
        "Storage": "7 Litre Tank",
        "Technology": "Mineralizer",
        "Warranty": "1 Year Free Service + 2 Years Warranty"
      },
      description: "Sleek water purifier with 7-stage purification, mineralizer technology, and smart filter change indicator. Ideal for Indian water conditions.",
      inStock: true,
      emi: 1167
    },
    // Fans - Top 5 Indian Brands
    {
      id: 37,
      name: "Havells Stealth Air 1200mm Premium Ceiling Fan",
      brand: "Havells",
      category: "Fan",
      price: 4999,
      originalPrice: 6999,
      discount: 29,
      rating: 4.5,
      reviews: 342,
      images: [
        "/havells fan.jpg"
      ],
      features: ["BLDC Motor", "Remote Control", "Aerodynamic Blades", "Energy Saving"],
      specifications: {
        "Sweep Size": "1200mm (48 inches)",
        "Motor Type": "BLDC Motor",
        "Speed": "Variable Speed Control",
        "Air Delivery": "230 CMM",
        "Power Consumption": "28 Watts",
        "Control": "Remote Control",
        "Warranty": "2 Years Motor + 1 Year Product"
      },
      description: "Premium BLDC motor ceiling fan with aerodynamically designed blades, remote control, and energy-saving technology. Delivers superior air delivery with whisper-quiet operation.",
      inStock: true,
      emi: 417
    },
    {
      id: 38,
      name: "Orient Electric Aeroquiet 1200mm Ceiling Fan",
      brand: "Orient Electric",
      category: "Fan",
      price: 3999,
      originalPrice: 5499,
      discount: 27,
      rating: 4.3,
      reviews: 278,
      images: [
        "/orient fan.jpg"
      ],
      features: ["Aerodynamic Design", "Rust Proof Finish", "Double Ball Bearing", "High Speed Motor"],
      specifications: {
        "Sweep Size": "1200mm (48 inches)",
        "Motor Type": "High Speed Motor",
        "Speed": "3 Speed Control",
        "Air Delivery": "240 CMM",
        "Power Consumption": "75 Watts",
        "Bearing": "Double Ball Bearing",
        "Warranty": "2 Years Motor + 1 Year Product"
      },
      description: "High-performance ceiling fan with aerodynamic blade design, rust-proof finish, and superior motor efficiency. Features double ball bearing for long-lasting performance.",
      inStock: true,
      emi: 333
    },
    {
      id: 39,
      name: "Crompton Hill Briz 1200mm Ceiling Fan",
      brand: "Crompton",
      category: "Fan",
      price: 2999,
      originalPrice: 4299,
      discount: 30,
      rating: 4.2,
      reviews: 456,
      images: [
        "/crompton fan.jpg"
      ],
      features: ["Decorative Design", "High Grade Steel", "Powerful Motor", "Anti Dust Coating"],
      specifications: {
        "Sweep Size": "1200mm (48 inches)",
        "Motor Type": "High Torque Motor",
        "Speed": "3 Speed Control",
        "Air Delivery": "220 CMM",
        "Power Consumption": "70 Watts",
        "Material": "High Grade Steel",
        "Warranty": "2 Years Motor + 1 Year Product"
      },
      description: "Elegant ceiling fan with decorative design, high-grade steel construction, and powerful motor. Ideal for modern homes with superior air circulation.",
      inStock: true,
      emi: 250
    },
    {
      id: 40,
      name: "Bajaj Maxima 1200mm Ceiling Fan",
      brand: "Bajaj",
      category: "Fan",
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      rating: 4.1,
      reviews: 523,
      images: [
        "/bajaj fan.jpg"
      ],
      features: ["Ribbed Blades", "Anti Dust Coating", "Robust Motor", "Affordable Price"],
      specifications: {
        "Sweep Size": "1200mm (48 inches)",
        "Motor Type": "Single Phase Motor",
        "Speed": "3 Speed Control",
        "Air Delivery": "210 CMM",
        "Power Consumption": "75 Watts",
        "Blades": "Ribbed Design",
        "Warranty": "2 Years Motor + 1 Year Product"
      },
      description: "Reliable ceiling fan with ribbed blades for enhanced air delivery, anti-dust coating, and robust motor. Perfect balance of performance and affordability.",
      inStock: true,
      emi: 208
    },
    {
      id: 41,
      name: "Usha Striker Galaxy 1200mm Ceiling Fan",
      brand: "Usha",
      category: "Fan",
      price: 3499,
      originalPrice: 4799,
      discount: 27,
      rating: 4.4,
      reviews: 189,
      images: [
        "/usha fan.jpg"
      ],
      features: ["Unique Blade Design", "Premium Finish", "High Speed Motor", "Anti Rust Coating"],
      specifications: {
        "Sweep Size": "1200mm (48 inches)",
        "Motor Type": "High Speed Motor",
        "Speed": "3 Speed Control",
        "Air Delivery": "230 CMM",
        "Power Consumption": "72 Watts",
        "Finish": "Premium Metallic",
        "Warranty": "2 Years Motor + 1 Year Product"
      },
      description: "Stylish ceiling fan with unique blade design, premium finish, and high-speed motor. Features anti-rust coating and smooth operation for years.",
      inStock: true,
      emi: 292
    },
    // Air Coolers - Top 5 Indian Brands
    {
      id: 42,
      name: "Symphony Diet 22T 22L Personal Air Cooler",
      brand: "Symphony",
      category: "Air Cooler",
      price: 7999,
      originalPrice: 10999,
      discount: 27,
      rating: 4.3,
      reviews: 234,
      images: [
        "/symphony air.jpg"
      ],
      features: ["Honeycomb Cooling Pads", "Powerful Motor", "Ice Chamber", "Compact Design"],
      specifications: {
        "Capacity": "22 Litres",
        "Type": "Personal Air Cooler",
        "Cooling Pads": "Honeycomb",
        "Air Delivery": "1400 CMH",
        "Power Consumption": "170 Watts",
        "Coverage Area": "Up to 150 sq ft",
        "Warranty": "1 Year Product + 5 Years Motor"
      },
      description: "Compact personal air cooler with honeycomb cooling pads, powerful motor, and ice chamber. Perfect for small rooms with efficient cooling and low power consumption.",
      inStock: true,
      emi: 667
    },
    {
      id: 43,
      name: "Bajaj Platini PX97 Torque 36L Desert Air Cooler",
      brand: "Bajaj",
      category: "Air Cooler",
      price: 9999,
      originalPrice: 13999,
      discount: 29,
      rating: 4.2,
      reviews: 167,
      images: [
        "/bajaj platini air.jpg"
      ],
      features: ["Turbo Fan Technology", "4-Way Air Deflection", "Honeycomb Pads", "Castor Wheels"],
      specifications: {
        "Capacity": "36 Litres",
        "Type": "Desert Air Cooler",
        "Cooling Pads": "Honeycomb",
        "Air Delivery": "2200 CMH",
        "Power Consumption": "230 Watts",
        "Coverage Area": "Up to 300 sq ft",
        "Warranty": "1 Year Product + 5 Years Motor"
      },
      description: "High-capacity desert air cooler with turbo fan technology, 4-way air deflection, and honeycomb cooling pads. Ideal for large rooms and outdoor spaces.",
      inStock: true,
      emi: 833
    },
    {
      id: 44,
      name: "Orient Electric Smartcool DX 50L Tower Air Cooler",
      brand: "Orient Electric",
      category: "Air Cooler",
      price: 11999,
      originalPrice: 15999,
      discount: 25,
      rating: 4.4,
      reviews: 298,
      images: [
        "/orient air.jpg"
      ],
      features: ["Remote Control", "Digital Display", "Auto Fill", "Timer Function"],
      specifications: {
        "Capacity": "50 Litres",
        "Type": "Tower Air Cooler",
        "Cooling Pads": "Honeycomb",
        "Air Delivery": "2800 CMH",
        "Power Consumption": "200 Watts",
        "Coverage Area": "Up to 400 sq ft",
        "Warranty": "1 Year Product + 5 Years Motor"
      },
      description: "Smart tower air cooler with remote control, digital display, and inverter compatibility. Features auto-fill, timer function, and powerful cooling performance.",
      inStock: true,
      emi: 1000
    },
    {
      id: 45,
      name: "Crompton Ozone 75L Desert Air Cooler",
      brand: "Crompton",
      category: "Air Cooler",
      price: 13999,
      originalPrice: 18999,
      discount: 26,
      rating: 4.1,
      reviews: 145,
      images: [
        "/crompton air.jpg"
      ],
      features: ["Everlast Pump", "Honeycomb Pads", "Castor Wheels", "Large Capacity"],
      specifications: {
        "Capacity": "75 Litres",
        "Type": "Desert Air Cooler",
        "Cooling Pads": "Honeycomb",
        "Air Delivery": "4200 CMH",
        "Power Consumption": "300 Watts",
        "Coverage Area": "Up to 500 sq ft",
        "Warranty": "1 Year Product + 5 Years Motor"
      },
      description: "Large capacity desert air cooler with everlast pump, honeycomb cooling pads, and castor wheels. Designed for maximum cooling in hot and dry climates.",
      inStock: true,
      emi: 1167
    },
    {
      id: 46,
      name: "Voltas VM D70MH 70L Desert Air Cooler",
      brand: "Voltas",
      category: "Air Cooler",
      price: 15999,
      originalPrice: 21999,
      discount: 27,
      rating: 4.5,
      reviews: 312,
      images: [
        "/voltas air.jpg"
      ],
      features: ["Multi-Stage Air Purification", "Mosquito Net", "Auto Swing", "Speed Control"],
      specifications: {
        "Capacity": "70 Litres",
        "Type": "Desert Air Cooler",
        "Cooling Pads": "High Efficiency Pads",
        "Air Delivery": "3800 CMH",
        "Power Consumption": "280 Watts",
        "Coverage Area": "Up to 450 sq ft",
        "Warranty": "1 Year Product + 5 Years Motor"
      },
      description: "Premium desert air cooler with multi-stage air purification, mosquito net, and high-efficiency cooling pads. Features auto-swing and speed control.",
      inStock: true,
      emi: 1333
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return "Product not found";
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      brand: product.brand
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-primary">Shop</button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-80">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.brand}</Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                {!product.inStock && (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <Badge className="bg-success text-success-foreground">
                  {product.discount}% OFF
                </Badge>
              </div>
              <div className="text-success font-medium">
                You save {formatPrice(product.originalPrice - product.price)}
              </div>
              <div className="text-sm text-muted-foreground">
                EMI from ₹{product.emi.toLocaleString()}/month
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 btn-gradient"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {product.inStock && (
                <Button size="lg" variant="outline" className="w-full">
                  Buy Now
                </Button>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="justify-start">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Technical Specifications</h3>
                  <div className="grid gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Product Features</h3>
                  <div className="grid gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Customer Reviews</h3>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Reviews feature coming soon...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
