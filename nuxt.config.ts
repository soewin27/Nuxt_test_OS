// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    
  ],
  app:{
    head:{
      title: "Soe Win's Accessories Shop",
      meta:[
        { name:"Something",content:"Nuxt Test"}
      ],
      link:[
        { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" },
        { rel:"stylesheet", type:"text/css", href:"/css/main.css"},
        { rel:"stylesheet", type:"text/css", href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}
      ]
    }
  }
})
