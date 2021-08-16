---
title: "Honeyhoneydeals: A Shopee price tracker to make smarter purchases "
excerpt: "Honeyhoneydeals tracks thousands of Shopee products and allow users to view their price history and set price alerts when the price drops."
coverImage: "/images/shopee-price-tracker/honeyhoneydeals.png"
date: "16 Aug 2021"
author:
  name: Jerron Lim
category: "Software dev"
featured: "True"
---

_View the live site [here](https://www.honeyhoneydeals.com)!_

Ever wondered if you are REALLY getting a good deal on Shopee sales and deals?

Honeyhoneydeals allows you to check the historical prices of popular Shopee products. This way you can know if its a good time to buy that thing you were planning to purchase or if you should wait a bit longer. However, going to the website every day to check if the price has drop is tedious. Therefore, you can also subscribe to alert you via email when the price of your favourite product drops!

The frontend of Honeyhoneydeals was built with Next.js and written in Typescript. Next.js is amazing and it allowed me to optmise my site to drastically reduce load time and improve SEO using numerous features such as Incremental Static Regeneration (ISR) which allowed me to serve up-to-date Static Pages even with frequently updating data.

Honeyhoneydeals is serverless. Technologies used by the backend include AWS cloud services such as RDS, Lambda, CloudWatch, CloudFront, Cognitio and S3.
