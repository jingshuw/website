---
title: "Aggregating Dependent Signals with Heavy-Tailed Combination Tests"
date: 2023-10-31
publishDate: 2023-10-31T23:16:49.132009Z
authors: [lin_gui, "Yuchao Jiang", admin]
publication_types: ["3"]
abstract: "Combining dependent p-values to evaluate the global null hypothesis presents a longstanding challenge in statistical inference, particularly when aggregating results from diverse methods to boost signal detection. P-value combination tests using heavy-tailed distribution based transformations, such as the Cauchy combination test and the harmonic mean p-value, have recently garnered significant interest for their potential to efficiently handle arbitrary p-value dependencies. Despite their growing popularity in practical applications, there is a gap in comprehensive theoretical and empirical evaluations of these methods. This paper conducts an extensive investigation, revealing that, theoretically, while these combination tests are asymptotically valid for pairwise quasi-asymptotically independent test statistics, such as bivariate normal variables, they are also asymptotically equivalent to the Bonferroni test under the same conditions. However, extensive simulations unveil their practical utility, especially in scenarios where stringent type-I error control is not necessary and signals are dense. Both the heaviness of the distribution and its support substantially impact the tests' non-asymptotic validity and power, and we recommend using a truncated Cauchy distribution in practice. Moreover, we show that under the violation of quasi-asymptotic independence among test statistics, these tests remain valid and, in fact, can be considerably less conservative than the Bonferroni test. We also present two case studies in genetics and genomics, showcasing the potential of the combination tests to significantly enhance statistical power while effectively controlling type-I errors."

featured: false
publication: "*ArXiv*"
# tags: ["Single cell biology; RNA sequencing"]

links:
# - name: ""
#   url: ""
- name: Preprint
  url: https://arxiv.org/abs/2310.20460
url_code: 'https://github.com/gl-ybnbxb/heavytailcombtest'

---
