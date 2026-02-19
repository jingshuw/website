---
title: "Statistical Inference for Cell Type Deconvolution"
date: 2022-02-20
publishDate: 2021-02-20T23:16:49.132009Z
authors: ["Dongyue Xie", lin_gui, admin]
publication_types: ["3"]
abstract: "Integrating heterogeneous datasets across different measurement platforms is a fundamental challenge in many scientific applications. A common example arises in deconvolution problems, such as cell type deconvolution, where one aims to estimate the composition of latent subpopulations using reference data from a different source. However, this task is complicated by systematic platform-specific scaling effects, measurement noise, and differences between data sources. For the problem of cell type deconvolution, existing methods often neglect the correlation and uncertainty in cell type proportion estimates, possibly leading to an additional concern of false positives in downstream comparisons across multiple individuals. We introduce MEAD, a statistical framework that provides both accurate estimation and valid statistical inference on the estimates. One of our key contributions is the identifiability result, which establishes the conditions under which cell type compositions are identifiable under arbitrary gene-specific scaling differences across platforms. MEAD also supports the comparison of cell type proportions across individuals after deconvolution, accounting for gene-gene correlations and biological variability. Through simulations and real-data analysis, MEAD demonstrates superior reliability for inferring cell type compositions in complex biological systems." 

featured: false
publication: "*ArXiv*"
# tags: ["Single cell biology; RNA sequencing"]

links:
# - name: ""
#   url: ""
- name: Preprint
  url: https://arxiv.org/abs/2202.06420
url_code: 'https://github.com/DongyueXie/MEAD'

---

