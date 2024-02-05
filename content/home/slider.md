---
widget: slider
headless: true  # This file represents a page section.

# ... Put Your Section Options Here (section position etc.) ...

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval: false
weight: 10
active: true

# Minimum slide height.
# Specify a height to ensure a consistent height for each slide.
height: '400px; background-position:center; background-repeat: no-repeat; background-size: cover'


item:
  - title: ''
    content: ''
    # Choose `center`, `left`, or `right` alignment.
    align: center 
    # Overlay a color or image (optional).
    #   Deactivate an option by commenting out the line, prefixing it with `#`.
    overlay_color: '#666'  # An HTML color value.
    overlay_img: uchicago_bannar.jpeg  # Image path relative to your `static/media/` folder
    overlay_filter: 0  # Darken the image. Value in range 0-1.
    # Call to action button (optional).
    #   Activate the button by specifying a URL and button label below.
    #   Deactivate by commenting out parameters, prefixing lines with `#`.
  - title: ''
    content: 'Joint trajectory inference for single-cell genomics using deep learning with a mixture prior'
    align: center
    overlay_color: '#555'
    overlay_img: vitae.png
    overlay_filter: 0
    cta_label: View paper
    cta_url: 'https://jingshuw.org/publication/du-2020-aa/'
    cta_icon_pack: fas
    cta_icon: newspaper
    overlay_filter: 0.3
  - title: ''
    content: 'Aggregating dependent signals with heavy-tailed combination tests'
    align: center
    overlay_color: '#555'
    overlay_img: heavy_tail.png
    overlay_filter: 0
    cta_label: View paper
    cta_url: 'https://jingshuw.org/publication/wang-2020-aa/'
    cta_icon_pack: fas
    cta_icon: newspaper
    overlay_filter: 0.3
  - title: ''
    content: 'Causal Inference for Heritable Phenotypic Risk Factors Using Heterogeneous Genetic Instruments'
    align: center
    overlay_color: '#555'
    overlay_img: model_new.png
    overlay_filter: 0
    cta_label: View paper
    cta_url: 'https://jingshuw.org/publication/wang-2020-aa/'
    cta_icon_pack: fas
    cta_icon: newspaper
    overlay_filter: 0.3
  - title: ''
    content: 'Data denoising with transfer learning in single-cell transcriptomics'
    align: center
    overlay_color: '#555'
    overlay_img: saverx.png
    overlay_filter: 0
    cta_label: View paper
    cta_url: 'https://jingshuw.org/publication/wang-2019-ab/'
    cta_icon_pack: fas
    cta_icon: newspaper
    overlay_filter: 0.3

---
