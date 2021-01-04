---
title: "Confounder adjustment in multiple hypothesis testing"
date: 2017-01-01
publishDate: 2021-01-03T23:18:25.258012Z
authors: [admin, "Qingyuan Zhao", "Trevor Hastie", "Art B. Owen"]
publication_types: ["2"]
abstract: "We consider large-scale studies in which thousands of significance tests are performed simultaneously. In some of these studies, the multiple testing procedure can be severely biased by latent confounding factors such as batch effects and unmeasured covariates that correlate with both primary variable(s) of interest (e.g., treatment variable, phenotype) and the outcome. Over the past decade, many statistical methods have been proposed to adjust for the confounders in hypothesis testing. We unify these methods in the same framework, generalize them to include multiple primary variables and multiple nuisance variables, and analyze their statistical properties. In particular, we provide theoretical guarantees for RUV-4 [Gagnon-Bartsch, Jacob and Speed (2013)] and LEAPP [Ann. Appl. Stat. 6 (2012) 1664-1688], which correspond to two different identification conditions in the framework: the first requires a set of \"negative controls\" that are known a priori to follow the null distribution; the second requires the true nonnulls to be sparse. Two different estimators which are based on RUV-4 and LEAPP are then applied to these two scenarios. We show that if the confounding factors are strong, the resulting estimators can be asymptotically as powerful as the oracle estimator which observes the latent confounding factors. For hypothesis testing, we show the asymptotic $z$-tests based on the estimators can control the type I error. Numerical experiments show that the false discovery rate is also controlled by the Benjamini-Hochberg procedure when the sample size is reasonably large."
featured: false
publication: "*Annals Statistics*"

links:
- name: Paper
  url: "https://projecteuclid.org:443/euclid.aos/1509436821"
- name: Preprint
  url: https://arxiv.org/abs/1508.04178
url_code: https://cran.r-project.org/web/packages/cate/index.html

---

