# Flexbox Explainer

This repository contains flexbox.lazyco.bg website. It uses [Jekyll](https://jekyllrb.com/) to generate a static site. The static files are deployed in [CloudFlare Pages](https://pages.cloudflare.com/) by integration with this private repository. 

CloudFlare Pages have their own CD process. On main branch push the code is pulled by CloudFlare, build and deployed. There is Slack integration with the build process that send notification upon completion.

## Jekyll documentation
You can find more information about how Jekyll works [in their documentation](https://jekyllrb.com/docs/)

## Liquid templates
Jekyll uses Liquid for templating and [their documentation](https://shopify.github.io/liquid/) is great as well.

## Plugins

### Jekyll Sass Converter
We are using the [jekyll-sass-converter plugin](https://github.com/jekyll/jekyll-sass-converter) (built-in) to write sass.

# How to run
1. Make sure you have Jekyll installed
1. Clone repository locally
1. Run `jekyll serve` to start the local server. There is a `--livereload` option if you want the server to refresh the page automatically on filechange.
1. Run `Jekyll build` if you just want to generate the site. Generated static files can be found in the `_site` folder.

# Forms
As the site is static we can't deal with forms here. At the moment the site is using [Formspree](https://formspree.io/) to handle the submissions from Demo and Contact forms. Every submission is sent to email and Slack.

