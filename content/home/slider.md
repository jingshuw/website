---
widget: slider
headless: true  # This file represents a page section.

# ... Put Your Section Options Here (section position etc.) ...

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval: flase
weight: 10
active: true

# Minimum slide height.
# Specify a height to ensure a consistent height for each slide.
height: 800px


item:
  - title: Hello
    content: 'I am center aligned 😄'
    # Choose `center`, `left`, or `right` alignment.
    align: center 
    # Overlay a color or image (optional).
    #   Deactivate an option by commenting out the line, prefixing it with `#`.
#    overlay_color: '#666'  # An HTML color value.
    overlay_img: jones_lab1.jpg  # Image path relative to your `static/media/` folder
    overlay_filter: 0.5  # Darken the image. Value in range 0-1.
    # Call to action button (optional).
    #   Activate the button by specifying a URL and button label below.
    #   Deactivate by commenting out parameters, prefixing lines with `#`.
    cta_label: View paper
    cta_url: 'https://jingshuw.org/publication/wang-2020-aa/'
    cta_icon_pack: fas
    cta_icon: newpaper
  - title: ''
    content: ''
    align: center
#    overlay_color: '#555'
    overlay_img: grapple.png
    overlay_filter: 0
  - title: Right
    content: 'I am right aligned 😄'
    align: right
    overlay_color: '#333'
    overlay_img: ''
    overlay_filter: 0.5
---
