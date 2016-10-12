import { Injectable }     from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Destination } from "./destination";

const DESTINATIONS = {
    "0": {
        "name": "All Airports",
        "city": "Abidjan",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Abidjan.jpg",
        "iata": "ABJ",
        "region": "Africa",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/abidjan.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-abidjan.jpg",
        "companies": {
            "0": "Air France"
        }
    },
    "1": {
        "name": "All Airports",
        "city": "Abu Dhabi",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Abu-Dhabi.jpg",
        "iata": "AUH",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/abu-dhabi.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-abu-dhabi.jpg",
        "companies": {
            "0": "Etihad Airways"
        }
    },
    "2": {
        "name": "All Airports",
        "city": "Amsterdam",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Amsterdam.jpg",
        "iata": "AMS",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/amsterdam.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-amsterdam.jpg",
        "companies": {
            "0": "China Southern Airlines",
            "1": "Emirates"
        }
    },
    "3": {
        "name": "All Airports",
        "city": "Atlanta",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Atlanta.jpg",
        "iata": "ATL",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/atlanta.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-atlanta.jpg",
        "companies": {
            "0": "Korean Air"
        }
    },
    "4": {
        "name": "All Airports",
        "city": "Auckland",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Auckland.jpg",
        "iata": "AKL",
        "region": "Oceania",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/auckland.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-auckland.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Singapore Airlines"
        }
    },
    "5": {
        "name": "All Airports",
        "city": "Bangkok",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Bangkok.jpg",
        "iata": "BKK",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/bangkok.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-bangkok.jpg",
        "companies": {
            "0": "Qatar Airways",
            "1": "Emirates",
            "2": "Thai Airways",
            "3": "Asiana Airlines",
            "4": "Air France"
        }
    },
    "6": {
        "name": "All Airports",
        "city": "Barcelona",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Barcelona.jpg",
        "iata": "BCN",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/barcelona.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-barcelona.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "7": {
        "name": "All Airports",
        "city": "Beijing",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Beijing.jpg",
        "iata": "PEK",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/beijing.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-beijing.jpg",
        "companies": {
            "0": "China Southern Airlines",
            "1": "Emirates",
            "2": "Lufthansa",
            "3": "Singapore Airlines"
        }
    },
    "8": {
        "name": "All Airports",
        "city": "Birmingham",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Birmingham.jpg",
        "iata": "BHX",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/birmingham.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-birmingham.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "9": {
        "name": "All Airports",
        "city": "Brisbane",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Brisbane.jpg",
        "iata": "BNE",
        "region": "Oceania",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/brisbane.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-brisbane.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "10": {
        "name": "All Airports",
        "city": "Chengdu",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Chengdu.jpg",
        "iata": "CTU",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/chengdu.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-chengdu.jpg",
        "companies": {
            "0": "China Southern Airlines"
        }
    },
    "11": {
        "name": "All Airports",
        "city": "Copenhagen",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Copenhagen.jpg",
        "iata": "CPH",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/copenhagen.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-copenhagen.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "12": {
        "name": "All Airports",
        "city": "Dallas",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Dallas.jpg",
        "iata": "DFW",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/dallas.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-dallas.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Qantas"
        }
    },
    "13": {
        "name": "All Airports",
        "city": "Delhi",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Delhi.jpg",
        "iata": "DEL",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/delhi.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-delhi.jpg",
        "companies": {
            "0": "Lufthansa",
            "1": "Singapore Airlines"
        }
    },
    "14": {
        "name": "All Airports",
        "city": "Doha",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Doha.jpg",
        "iata": "DOH",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/doha.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-doha.jpg",
        "companies": {
            "0": "Qatar Airways"
        }
    },
    "15": {
        "name": "All Airports",
        "city": "Dubai",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Dubai.jpg",
        "iata": "DXB",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/dubai.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-dubai.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Qantas"
        }
    },
    "16": {
        "name": "All Airports",
        "city": "Dusseldorf",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Dusseldorf.jpg",
        "iata": "DUS",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/dusseldorf.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-dusseldorf.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "17": {
        "name": "All Airports",
        "city": "Frankfurt",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Frankfurt.jpg",
        "iata": "FRA",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/frankfurt.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-frankfurt.jpg",
        "companies": {
            "0": "Thai Airways",
            "1": "Lufthansa",
            "2": "Emirates",
            "3": "Singapore Airlines"
        }
    },
    "18": {
        "name": "All Airports",
        "city": "Guangzhou",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Guangzhou.jpg",
        "iata": "CAN",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/guangzhou.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-guangzhou.jpg",
        "companies": {
            "0": "China Southern Airlines",
            "1": "Qatar Airways",
            "2": "Emirates"
        }
    },
    "19": {
        "name": "All Airports",
        "city": "Hong Kong",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-HongKong.jpg",
        "iata": "HKG",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/hongkong.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-hongkong.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Thai Airways",
            "2": "Lufthansa",
            "3": "British Airways",
            "4": "Air France",
            "5": "Asiana Airlines",
            "6": "Singapore Airlines",
            "7": "Qantas"
        }
    },
    "20": {
        "name": "All Airports",
        "city": "Houston",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Houston.jpg",
        "iata": "HOU",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/houston.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-houston.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Lufthansa"
        }
    },
    "21": {
        "name": "All Airports",
        "city": "Jeddah",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Jeddah.jpg",
        "iata": "JED",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/jeddah.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-jeddah.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "22": {
        "name": "All Airports",
        "city": "Johannesburg",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Johannesburg.jpg",
        "iata": "JNB",
        "region": "Africa",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/johannesburg.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-johannesburg.jpg",
        "companies": {
            "0": "British Airways",
            "1": "Air France"
        }
    },
    "23": {
        "name": "All Airports",
        "city": "Kuala Lumpur",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Kuala-Lumpur.jpg",
        "iata": "KUL",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/kuala-lumpur.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-kuala-lumpur.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Malaysia Airlines"
        }
    },
    "24": {
        "name": "All Airports",
        "city": "Kuwait",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Kuwait.jpg",
        "iata": "KWI",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/kuwait.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-kuwait.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "25": {
        "name": "All Airports",
        "city": "London",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-London.jpg",
        "iata": "LHR",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/london.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-london.jpg",
        "companies": {
            "0": "Etihad Airways",
            "1": "Thai Airways",
            "2": "Qatar Airways",
            "3": "Emirates",
            "4": "Qantas",
            "5": "British Airways",
            "6": "Malaysia Airlines",
            "7": "Korean Air",
            "8": "Singapore Airlines"
        }
    },
    "26": {
        "name": "All Airports",
        "city": "Los Angeles",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Los-Angeles.jpg",
        "iata": "LAX",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/los-angeles.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-los-angeles.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Lufthansa",
            "2": "China Southern Airlines",
            "3": "British Airways",
            "4": "Qantas",
            "5": "Air France",
            "6": "Asiana Airlines",
            "7": "Korean Air",
            "8": "Singapore Airlines"
        }
    },
    "27": {
        "name": "All Airports",
        "city": "Madrid",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Madrid.jpg",
        "iata": "MAD",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/madrid.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-madrid.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "28": {
        "name": "All Airports",
        "city": "Manchester",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Manchester.jpg",
        "iata": "MAN",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/manchester.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-manchester.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "29": {
        "name": "All Airports",
        "city": "Mauritius",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Mauritius.jpg",
        "iata": "MRU",
        "region": "Africa",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/mauritius.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-mauritius.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "30": {
        "name": "All Airports",
        "city": "Melbourne",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Melbourne.jpg",
        "iata": "MEL",
        "region": "Oceania",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/melbourne.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-melbourne.jpg",
        "companies": {
            "0": "Etihad Airways",
            "1": "Emirates",
            "2": "Qantas"
        }
    },
    "31": {
        "name": "All Airports",
        "city": "Mexico",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Mexico.jpg",
        "iata": "MEX",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/mexico.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-mexico.jpg",
        "companies": {
            "0": "Air France"
        }
    },
    "32": {
        "name": "All Airports",
        "city": "Miami",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Miami.jpg",
        "iata": "MIA",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/miami.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-miami.jpg",
        "companies": {
            "0": "Lufthansa",
            "1": "British Airways",
            "2": "Air France"
        }
    },
    "33": {
        "name": "All Airports",
        "city": "Milan",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Milan.jpg",
        "iata": "MXP",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/milan.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-milan.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "34": {
        "name": "All Airports",
        "city": "Moscow",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Moscow.jpg",
        "iata": "MOW",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/moscow.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-moscow.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "35": {
        "name": "All Airports",
        "city": "Mumbai",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Mumbai-1-a.jpg",
        "iata": "BOM",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/mumbai.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-mumbai.jpg",
        "companies": {
            "0": "Etihad Airways",
            "1": "Emirates",
            "2": "Singapore Airlines"
        }
    },
    "36": {
        "name": "All Airports",
        "city": "Munich",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Munich.jpg",
        "iata": "MUC",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/munich.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-munich.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "37": {
        "name": "All Airports",
        "city": "New York",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-NewYork.jpg",
        "iata": "JFK",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/new-york.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-new-york.jpg",
        "companies": {
            "0": "Etihad Airways",
            "1": "Emirates",
            "2": "Singapore Airlines",
            "3": "Air France",
            "4": "Asiana Airlines",
            "5": "Korean Air"
        }
    },
    "38": {
        "name": "All Airports",
        "city": "Osaka",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Osaka.jpg",
        "iata": "ITM",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/osaka.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-osaka.jpg",
        "companies": {
            "0": "Thai Airways",
            "1": "Singapore Airlines"
        }
    },
    "39": {
        "name": "All Airports",
        "city": "Paris",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Paris.jpg",
        "iata": "CDG",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/paris.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-paris.jpg",
        "companies": {
            "0": "Air France",
            "1": "Thai Airways",
            "2": "Qatar Airways",
            "3": "Emirates",
            "4": "Korean Air",
            "5": "Singapore Airlines"
        }
    },
    "40": {
        "name": "All Airports",
        "city": "Perth",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Perth.jpg",
        "iata": "PER",
        "region": "Oceania",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/perth.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-perth.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "41": {
        "name": "All Airports",
        "city": "Prague",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Prague.jpg",
        "iata": "PRG",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/prague.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-prague.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "42": {
        "name": "All Airports",
        "city": "Rome",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Roma.jpg",
        "iata": "FCO",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/rome.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-rome.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "43": {
        "name": "All Airports",
        "city": "San Francisco",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-SanFrancisco.jpg",
        "iata": "SFO",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/sanfrancisco.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-sanfrancisco.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Lufthansa",
            "2": "British Airways",
            "3": "Air France"
        }
    },
    "44": {
        "name": "All Airports",
        "city": "Seoul",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Seoul.jpg",
        "iata": "ICN",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/seoul.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-seoul.jpg",
        "companies": {
            "0": "Korean Air",
            "1": "Asiana Airlines",
            "2": "Emirates",
            "3": "Lufthansa",
            "4": "British Airways"
        }
    },
    "45": {
        "name": "All Airports",
        "city": "Shanghai",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Shangai.jpg",
        "iata": "SHA",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/shanghai.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-shanghai.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Lufthansa",
            "2": "Air France",
            "3": "Singapore Airlines"
        }
    },
    "46": {
        "name": "All Airports",
        "city": "Singapore",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Singapore.jpg",
        "iata": "SIN",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/singapore.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-singapore.jpg",
        "companies": {
            "0": "Singapore Airlines",
            "1": "Emirates",
            "2": "Lufthansa",
            "3": "British Airways"
        }
    },
    "47": {
        "name": "All Airports",
        "city": "Sydney",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Sidney.jpg",
        "iata": "SYD",
        "region": "Oceania",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/sydney.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-sydney.jpg",
        "companies": {
            "0": "Etihad Airways",
            "1": "Emirates",
            "2": "Qantas",
            "3": "Qatar Airways",
            "4": "China Southern Airlines",
            "5": "Korean Air",
            "6": "Singapore Airlines"
        }
    },
    "48": {
        "name": "All Airports",
        "city": "Taipei",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Taipei.jpg",
        "iata": "TPE",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/taipei.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-taipei.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "49": {
        "name": "All Airports",
        "city": "Tokyo",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Tokyo.jpg",
        "iata": "TYO",
        "region": "Asia",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/tokyo.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-tokyo.jpg",
        "companies": {
            "0": "Thai Airways",
            "1": "Singapore Airlines"
        }
    },
    "50": {
        "name": "All Airports",
        "city": "Toronto",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Toronto.jpg",
        "iata": "YYZ",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/toronto.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-toronto.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "51": {
        "name": "All Airports",
        "city": "Vancouver",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Vancouver.jpg",
        "iata": "YVR",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/vancouver.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-vancouver.jpg",
        "companies": {
            "0": "British Airways"
        }
    },
    "52": {
        "name": "All Airports",
        "city": "Vienna",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Vienna.jpg",
        "iata": "VIE",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/vienna.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-vienna.jpg",
        "companies": {
            "0": "Emirates"
        }
    },
    "53": {
        "name": "All Airports",
        "city": "Washington",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Wahsington.jpg",
        "iata": "WAS",
        "region": "North America",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/washington.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-washington.jpg",
        "companies": {
            "0": "Emirates",
            "1": "British Airways",
            "2": "Air France"
        }
    },
    "54": {
        "name": "All Airports",
        "city": "Zurich",
        "imageSquare": "/content/dam/websites/iflya380/destination-illustrations/Airbus-destinatitions-prod-Zurich.jpg",
        "iata": "ZRH",
        "region": "Europe",
        "destinationUrl": "https://www.iflya380.com/a380-destinations/zurich.html",
        "country": "",
        "image": "/content/dam/websites/iflya380/destination-illustrations/booking/dest-zurich.jpg",
        "companies": {
            "0": "Emirates",
            "1": "Singapore Airlines"
        }
    }
};

@Injectable()
export class DestinationsService {

    constructor(private http: Http) {
    }

    getDestinations(): Promise<Destination[]> {
        let result: Destination[] = [];
        let keys = Object.keys(DESTINATIONS);

        let destination: Destination = null;
        for (var key in keys) {
            destination = new Destination();
            destination.name = DESTINATIONS[key].city;
            destination.iata = DESTINATIONS[key].iata;
            destination.region = DESTINATIONS[key].region;
            destination.destinationUrl = DESTINATIONS[key].destinationUrl;
            destination.imageSquare = 'http://www.iflya380.com' + DESTINATIONS[key].imageSquare;
            destination.image = 'http://www.iflya380.com' + DESTINATIONS[key].image;
            result.push(destination);
        };
        return Promise.resolve(result);
    }

    getDestination(name: string): Promise<Destination> {
        return this.getDestinations()
            .then(destinations => destinations.find(destination => destination.name === name));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred');
        console.error(error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}