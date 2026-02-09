---
title: "Preprint: Improving Estimation Efficiencies for Family-Based GWAS by Integrating Large External Data"
date: 2026-01-17
lastmod: 2026-01-17
summary: "A new calibration method to boost efficiency and power in family-based GWAS using external summary statistics."
tags:
  - Preprint
  - GWAS
  - Family-Based Studies
  - Mendelian Randomization
  - Genetics
---

We have posted a new preprint on medRxiv, "Improving estimation efficiencies for family-based GWAS by integrating large external data", proposes a general calibration framework to enhance statistical efficiency in within-family genome-wide association studies (GWAS) by incorporating large external GWAS summary data:

👉 medRxiv preprint: https://doi.org/10.64898/2025.12.26.25343073

Key highlights of our paper include:

- Family-based GWAS can isolate direct genetic effects from confounders like population stratification, genetic nurture, and assortative mating but often have limited power due to smaller sample sizes.
- We introduce a calibration framework that combines three types of summary statistics per SNP: (i) the within-family association; (ii) the corresponding population-based estimate from the same family sample; and (iii) an external population-based GWAS estimate. This method does not require individual-level data and is compatible with generalized linear models for both continuous and binary traits.
- Theoretical results show the calibration can reduce estimator variance by up to ~50\% in trio designs and ~25\% in sibling designs — roughly equivalent to doubling effective sample size in trios.
- Simulations confirm unbiasedness and variance reduction, and applications to UK Biobank family data demonstrate substantial precision gains and improved downstream Mendelian Randomization inference. The approach can also be applied directly to published within-sibship summary statistics, broadening its utility.

This framework offers a practical way to leverage large external GWAS summary datasets to improve power and estimation efficiency in family-based genetic analyses while preserving the design’s robustness to confounding.