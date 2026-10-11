---
title: "Improving estimation efficiencies for family-based GWAS by integrating large external data"
date: 2025-12-29
publishDate: 2025-12-29T23:16:49.132009Z
authors: [zixuan_wu, "Yunqi Yang", "Aabesh Bhattacharyya", "Matthew Stephens", admin]
publication_types: ["3"]
abstract: "Family-based genome-wide association studies (GWAS) can separate direct from indirect genetic effects such as genetic nurture, population stratification, and assortative mating, yet these designs often suffer from limited statistical power because large samples of genotyped trios and sibships are rare. We introduce a calibration framework that improves the efficiency of within-family GWAS by integrating three readily available summary statistics for each SNP: the within-family association, the corresponding population-based estimate from the same family sample, and an external population-based estimate from a large GWAS. The method does not require individual-level data and is compatible with generalized linear models used for both continuous and binary traits. Theoretical results show that calibration can reduce variance by up to fifty percent in trio designs and up to twenty-five percent in sibling designs, equivalent to doubling the effective sample size for trios. Simulations confirm the accuracy and unbiasedness of the calibrated estimator, and applications to UK Biobank family data demonstrate substantial precision gains and improved downstream Mendelian Randomization inference. Analysis of published within-sibship GWAS summary statistics further illustrates that the approach can be applied directly to publicly available data. Together, these results show that calibration provides a practical and powerful way to enhance family-based genetic analyses."

featured: false
publication: "*medRXiv*"
# tags: ["Mendelian Randomization", "GWAS"]

links:
# - name: ""
#   url: ""
- name: Preprint
  url: https://www.medrxiv.org/content/10.64898/2025.12.26.25343073v1
url_code: 'https://github.com/ZixuanWu1/CalibrationGWAS'
---
