---
linktitle: STAT34700 Generalized Linear Models (Winter 2021)
weight: 1



# Page metadata.
title: 
date: "2021-01-01T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: false  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  example:
    name: Overview
    weight: 1

---

## Flexibility

This feature can be used for publishing content such as:

* **Online courses**
* **Project or software documentation**
* **Tutorials**

The `courses` folder may be renamed. For example, we can rename it to `docs` for software/project documentation or `tutorials` for creating an online course.

## Delete tutorials

**To remove these pages, delete the `courses` folder and see below to delete the associated menu link.**

## Update site menu

After renaming or deleting the `courses` folder, you may wish to update any `[[main]]` menu links to it by editing your menu configuration at `config/_default/menus.toml`.

For example, if you delete this folder, you can remove the following from your menu configuration:

```toml
[[main]]
  name = "Courses"
  url = "courses/"
  weight = 50
```

Or, if you are creating a software documentation site, you can rename the `courses` folder to `docs` and update the associated *Courses* menu configuration to:

```toml
[[main]]
  name = "Docs"
  url = "docs/"
  weight = 50
```

## Update the docs menu

If you use the *docs* layout, note that the name of the menu in the front matter should be in the form `[menu.X]` where `X` is the folder name. Hence, if you rename the `courses/example/` folder, you should also rename the menu definitions in the front matter of files within `courses/example/` from `[menu.example]` to `[menu.<NewFolderName>]`.



# ## Description

# This applied statistics course is a successor of STAT 343 and covers the foundations of generalized linear models (GLM). We will discuss the general linear modeling idea for exponential family data and introduce specifically models for binary, multinomial, count and categorical data, and the challenges in model fitting and inference. We will also discuss approaches that supplement the classical GLM, including quasi-likelihood for over-dispersed data, robust estimation and penalized GLM. The course also covers related topics including mixed effect models for clustered data, the Bayesian approach of GLM and survival analysis. This course will make a balance between practical real data analysis with examples and a deeper understanding of the models with mathematical derivations.

# ## Textbook

# - Foundations of Linear and Generalized Linear Models by Alan Agresti (required) 
# - Generalized Linear Models by P. McCullagh and J.A. Nelder (optional)


# ## Class schudule and office hours
# Lectures will be recorded and the videos will be posted on Canvas every week.


