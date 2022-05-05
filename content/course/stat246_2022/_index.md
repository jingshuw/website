---
linktitle: 
# STAT 24630 Causal Inference Methods and Case Studies
weight: 3



# Page metadata.
#title: STAT 24630 Causal Inference Methods and Case Studies 
date: "2022-01-10T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: false  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.

menu:
  stat24630_2022:
#    parent: Example Toipic
    weight: 1
---



## Description

In many applications of statistics, a large proportion of the questions of interest are about causality rather than questions of description or association. Would booster shots reduce the chance of getting infected by the new variant of COVID-19? How does a new tax policy affect the economic activity? Can a universal health insurance program improve people’s health? In this course, we will introduce some basic concepts and methods in causal inference and discuss examples from various disciplines. The course plans to cover the potential outcome framework, randomize experiments, randomization and model-based inference, matching, sensitivity analysis, and instrumental variables. Examples include the evaluation of job training programs, educational voucher schemes, clinical trials and observational data of medical treatments, smoking, the influenza vaccination study, and more.

Textbook:
- - [**Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction**](https://www.cambridge.org/core/books/causal-inference-for-statistics-social-and-biomedical-sciences/71126BE90C58F1A431FE9B2DD07938AB) by
*Imbens, Guido W. and Rubin, Donald B.* (2015). 



## Course Materials
Week | Date | Topic | Slides | Extra materials | Due
---|---|---|---|---|---
1| 2022-03-29 | Introduction with four examples |  {{% staticref "materials/stat246_2022/Lecture1.pdf" "newtab" %}}Lecture 1{{% /staticref %}} | Papers listed at the end of slides|---
1| 2022-03-31 | Potential outcome framework concepts |  {{% staticref "materials/stat246_2022/Lecture2.pdf" "newtab" %}}Lecture 2{{% /staticref %}} | Papers listed at the end of slides|---
2| 2022-04-05 | Randomized experiment and Fisher's exact p-value |  {{% staticref "materials/stat246_2022/Lecture3.pdf" "newtab" %}}Lecture 3{{% /staticref %}} | ---|---
2| 2022-04-07 | Case study with Fisher's exact p-value |  {{% staticref "materials/stat246_2022/Lecture4.pdf" "newtab" %}}Lecture 4{{% /staticref %}} | ---|---
3| 2022-04-12 | Neyman's repeated sampling approach |  {{% staticref "materials/stat246_2022/Lecture5.pdf" "newtab" %}}Lecture 5{{% /staticref %}} | {{% staticref "materials/stat246_2022/R_example1.nb.html" "newtab" %}}R Example to compute Fisher's exact p-value{{% /staticref %}}|---
3| 2022-04-13 |---|---|---|HW1 due at 11:59pm
3| 2022-04-14 | Regression for randomized experiments |  {{% staticref "materials/stat246_2022/Lecture6.pdf" "newtab" %}}Lecture 6{{% /staticref %}} | --- |--- 
4| 2022-04-19 | Statified randomized experiments |  {{% staticref "materials/stat246_2022/Lecture7.pdf" "newtab" %}}Lecture 7{{% /staticref %}} | {{% staticref "materials/stat246_2022/R_example2.nb.html" "newtab" %}}R Example for regression{{% /staticref %}} |--- 
4| 2022-04-21 | Pairwise randomized experiments |  {{% staticref "materials/stat246_2022/Lecture8.pdf" "newtab" %}}Lecture 8{{% /staticref %}} | {{% staticref "materials/stat246_2022/R_example3.nb.html" "newtab" %}}R Example for analyzing pairwise experiment{{% /staticref %}} |--- 
5| 2022-04-25 |---|---|---|HW2 due at 11:59pm
5| 2022-04-26 | Two case studies, non-compliance in randomized experiments |  {{% staticref "materials/stat246_2022/Lecture9.pdf" "newtab" %}}Lecture 9{{% /staticref %}} | {{% staticref "materials/stat246_2022/R_example4.nb.html" "newtab" %}}R Example for case study{{% /staticref %}}, {{% staticref "materials/stat246_2022/HOMEFOOD.tab" "newtab" %}}HOMEFOOD.tab{{% /staticref %}} |--- 
5| 2022-04-28 | Non-compliance in randomized experiments |  {{% staticref "materials/stat246_2022/Lecture10.pdf" "newtab" %}}Lecture 10{{% /staticref %}}|---|--- 
6| 2022-05-03 | Unconfoundedness, conditional randomized experiments |  {{% staticref "materials/stat246_2022/Lecture11.pdf" "newtab" %}}Lecture 11{{% /staticref %}}|---|---
6| 2022-05-05 | Observational studies, propensity score estimation |  {{% staticref "materials/stat246_2022/Lecture12.pdf" "newtab" %}}Lecture 12{{% /staticref %}}|---|---
6| 2022-05-08 |---|---|---|HW3 due at 11:59pm
