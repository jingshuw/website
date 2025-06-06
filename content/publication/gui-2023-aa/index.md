---
title: "Aggregating Dependent Signals with Heavy-Tailed Combination Tests"
date: 2023-10-31
publishDate: 2023-10-31T23:16:49.132009Z
authors: [lin_gui, "Yuchao Jiang", admin]
publication_types: ["3"]
abstract: "Combining dependent p-values poses a long-standing challenge in statistical inference, particularly when aggregating findings from multiple methods to enhance signal detection. Recently, p-value combination tests based on regularly varying-tailed distributions, such as the Cauchy combination test and harmonic mean p-value, have attracted attention for their robustness to unknown dependence. This paper provides a theoretical and empirical evaluation of these methods under an asymptotic regime where the number of p-values is fixed and the global test significance level approaches zero. We examine two types of dependence among the p-values. First, when p-values are pairwise asymptotically independent, such as with bivariate normal test statistics with no perfect correlation, we prove that these combination tests are asymptotically valid. However, they become equivalent to the Bonferroni test as the significance level tends to zero for both one-sided and two-sided p-values. Empirical investigations suggest that this equivalence can emerge at moderately small significance levels. Second, under pairwise quasi-asymptotic dependence, such as with bivariate t-distributed test statistics, our simulations suggest that these combination tests can remain valid and exhibit notable power gains over Bonferroni, even as the significance level diminishes. These findings highlight the potential advantages of these combination tests in scenarios where p-values exhibit substantial dependence. Our simulations also examine how test performance depends on the support and tail heaviness of the underlying distributions."

featured: false
publication: "*Biometrika*, accepted"
# tags: ["Hypothesis testing"]

links:
# - name: ""
#   url: ""
- name: Preprint
  url: https://arxiv.org/abs/2310.20460
url_code: 'https://github.com/gl-ybnbxb/heavytailcombtest'

---
