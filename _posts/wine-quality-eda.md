---
title: "Determining the quality of wine"
excerpt: "Can we classify the quality of wine based on its physiohemical properties?"
coverImage: "/images/ML/wine.jpg"
date: "15 Sep 2020"
author:
  name: Jerron Lim
category: "ML"
featured: "False"
---

In this notebook, we use a dataset containing physiochemical variables of wine such as pH, density, amount of various acids & sugars as inputs and a quality score from 0-10 based on sensory data as output. We will try both KNN and SVC model to determine which is best at correctly classifying the wine to the actual score.

On Kaggle, we can see many users with very high prediction score. However, this is because many fail to account for the population imbalance at different quality levels when training their models. This lead to models that only very good at predicting around a certain quality range. In this notebook, we will address this population imbalance through stratified sampling to ensure that the model learns properly and measuring its performance using a confusion matrix.

You may view the notebook in Kaggle [here](https://www.kaggle.com/streetlamb/using-knn-and-svc-to-determine-wine-quality) instead.

<iframe src="/html_files/using-knn-and-svc-to-determine-wine-quality.html" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';" style="width:100%"></iframe>
