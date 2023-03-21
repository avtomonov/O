// https://nuxt.com/docs/api/configuration/nuxt-config

import settings from './app/content/settings/general.json';

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Alfa Beta',
            titleTemplate: `%s ${settings.titleTemplate}`,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: settings.seoDescription },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `${settings.title} ${settings.titleTemplate}`,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: settings.seoDescription,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: settings.seoMetaImage,
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css',
                }
            ],
        },
    }
})
