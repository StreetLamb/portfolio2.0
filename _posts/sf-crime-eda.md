---
title: "Predicting what type of crimes will occur in San Francisco"
excerpt: "Given a day and time, can we determine what types of crime will happen in an area?"
coverImage: "/images/ML/sanfrancisco.jpg"
date: "Oct 2020"
author:
  name: Jerron Lim
category: "ML"
featured: "False"
---

From 1934 to 1963, San Francisco was infamous for housing some of the world's most notorious criminals on the inescapable island of Alcatraz.

Today, the city is known more for its tech scene than its criminal past. But, with rising wealth inequality, housing shortages, and a proliferation of expensive digital toys riding BART to work, there is no scarcity of crime in the city by the bay.

The notebook below explores 12 years of SF crime data and highlights where crime clusters throughout SF, the most common types of crimes that occur, and the day and time when crime is most likely to occur. Then, it will clean and preprocess the data before using Ensemble Learning (Xgboost + Random Forest) to predict the probabilities of each types of crimes that will happen in that region at a given date and time.

The final model placed top 30% in the overall kaggle competition. You may view the notebook in Kaggle [here](https://www.kaggle.com/streetlamb/ensemble-with-xgboost-and-random-forest/notebook) instead.

  <iframe src="/html_files/ensemble-with-xgboost-and-random-forest.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" style="width:100%"></iframe>
