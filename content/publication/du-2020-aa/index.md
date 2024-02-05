---
title: "Joint Trajectory Inference for Single-cell Genomics Using Deep Learning with a Mixture Prior"
date: 2023-09-01
publishDate: 2021-01-03T23:16:49.132009Z
authors: [jinhong_du, tianyu_chen, ming_gao, admin]
publication_types: ["3"]
abstract: "Trajectory inference methods analyze thousands of cells from single-cell sequencing technologies and computationally infer their developmental trajectories. Though many tools have been developed for trajectory inference, most of them lack a coherent statistical model and reliable uncertainty quantification. In this paper, we present VITAE, a probabilistic method combining a latent hierarchical mixture model with variational autoencoders to infer trajectories from posterior approximations. VITAE is computationally scalable and can adjust for confounding covariates to integrate multiple datasets. We show that VITAE outperforms other state-of-the-art trajectory inference methods on both real and synthetic data under various trajectory topologies. We also apply VITAE to jointly analyze two single-cell RNA sequencing datasets on mouse neocortex. Our results suggest that VITAE can successfully uncover a shared developmental trajectory of the projection neurons and reliably order cells from both datasets along the inferred trajectory."

featured: false
publication: "*BioRXiv*"
# tags: ["Single cell biology; RNA sequencing; imputation; post-denoising inference; empirical Bayes; deep learning"]

links:
# - name: ""
#   url: ""
- name: Preprint
  url: https://www.biorxiv.org/content/10.1101/2020.12.26.424452v3
url_code: 'https://github.com/jaydu1/VITAE'

image:
  caption: 'VITAE provides better trajectory inference than an alternative Seurat integration + Slingshot approach'
  focal_point: ""
  preview_only: false
---

