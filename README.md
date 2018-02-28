# fralle-react-app
Portfolio (https://www.fralle.com)

### PAW
- Fix the images below on static pages
- Setup two testprojects, one with specific renderer and one without
  - Ensure that all of them have their sets of images (they could use the same ones tho)
  - Ensure that blur functionality + base64 works
  - Ensure that all srcsets work correctly (check network tab)

- Img srcset 480x270, 480x480, 960x720, 1280x768, 1920x1080, 480x768  
  - ProjectLink         480x768
  - Project (flickity)  480x480, 1280x768, 1920x1080
  - Project (content)   720xANY
  - Other Images        ?

- Fix coderenderer or better option to display code

- Gör klart sidan
- Lägg upp öppet på github
- Lägg in som webprojekt med all data

* # PROJECT PAGE
- Create mockup

# Project content
- Meta data:
  - Title
  - SubTitle (ACTION / RTS || WEB APP)
  - Category (GAME || WEB) 
  - LastUpdated
  - Links (arr[])
- Content
  - Markdown file
  - Images (sizes in px):
      Base64 string max 2kb
      Link: 480x768
      Flickity: 480x270, 960x720, 1366x768, 1920x1080
      Markdown: 720xANY


# Todo fralle.com:


# fralle.com v2:
- Minimalistic design
- Wrapped in 980px
- No 100vh sections
- No carousel
- Blog-section
  - Maybe use frontend RTE (quill, react-quill)
  - Save posts to backend
  - Backend api


# Github API
const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: { Accept: 'application/vnd.github.v3+json' }
})

instance.get('/users/Fralleee/repos').then(res => {
  const data = res.data.filter(x => !x.fork)
  const mappedData = data.map(item => ({ name: item.name, description: item.description }))
  console.log(mappedData)
  mappedData.forEach(item => {
    instance.get(`/repos/Fralleee/${item.name}/readme`).then(res2 => console.log(atob(res2.data.content)))
  })
})